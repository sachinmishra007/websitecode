import { ChangeDetectionStrategy, Component, HostListener, InjectionToken, Injector, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Router } from '@angular/router';
import Typed from 'typed.js';
import AOS from 'aos';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent implements OnInit {
  @ViewChild('navbar') navbar;
  @ViewChild('infoMessage') infoMessage;
  info = {
    firstname: '',
    lastname: '',
    subject: '',
    email: '',
    description: ''
  };
  myForm: FormGroup;
  todo = [];
  done = [];

  private webWorker: Worker;
  itemList = [
    {
      id: 'week-1',
      weekList: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 4",
      ]
    },
    {
      id: 'week-2',
      weekList: [
        "Item 3",
        "Item 1",
        "Item 2",
        "Item 4",
        "Item 5",
      ]
    },
    {
      id: 'week-3',
      weekList: [
        "Item 1",
        "Item 4",
        "Item 3",
        "Item 4",
        "Item 4",
      ]
    }
  ] as any;
  weeks = [];
  connectedTo = [];
  dataInfo = [];
  constructor(
    // private _rourte: Router,
    private fb: FormBuilder,
    private _zone: NgZone,
    private _httpClient: HttpClient
  ) {




    for (let item of this.itemList) {
      this.connectedTo.push(item.id);
    }
    // this.weeks = [
    //   {
    //     id: 'week-1',
    //     weeklist: [
    //       "item 1",
    //       "item 2",
    //       "item 3",
    //       "item 4",
    //       "item 5"
    //     ]
    //   }, {
    //     id: 'week-2',
    //     weeklist: [
    //       "item 1",
    //       "item 2",
    //       "item 3",
    //       "item 4",
    //       "item 5"
    //     ]
    //   }, {
    //     id: 'week-3',
    //     weeklist: [
    //       "item 1",
    //       "item 2",
    //       "item 3",
    //       "item 4",
    //       "item 5"
    //     ]
    //   }, {
    //     id: 'week-4',
    //     weeklist: [
    //       "item 1",
    //       "item 2",
    //       "item 3",
    //       "item 4",
    //       "item 5"
    //     ]
    //   },
    // ];
    // for (let week of this.weeks) {
    //   this.connectedTo.push(week.id);
    // };


  }

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   email: ['', [
    //     Validators.required,
    //     Validators.email
    //   ]],
    //   password: ['', [
    //     Validators.required,
    //     Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
    //   ]],
    //   age: [null, [ 
    //     Validators.required,
    //     Validators.minLength(2), 
    //     Validators.min(18), 
    //     Validators.max(65)
    //   ]]
    // });
    // this.myForm.valueChanges.subscribe((_cal)=>{
    //   console.log(_cal);
    // })
    AOS.init({
      duration: 600,
    });
    const options = {
      strings: ['Innovator.', 'Professional.', 'Evangelist.', 'Foodie.', 'Lazy 😂.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typeinfo', options);
  }

  // drag(event: CdkDragDrop<string[]>) {

  //   //if movement if within the same container 

  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data, event.previousIndex, event.currentIndex);
  //   }

  //   //if movement if to other containers 

  //   else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }


  // drag1(event: CdkDragDrop<string[]>) {

  // }

  // get email() {
  //   return this.myForm.get('email');
  // }

  // get password() {
  //   return this.myForm.get('password');
  // }

  // get age() {
  //   return this.myForm.get('age');
  // }
  // get phoneForms() {
  //   return this.myForm.get('phones') as FormArray
  // }

  // addPhone() {

  //   const phone = this.fb.group({ 
  //     area: [],
  //     prefix: [],
  //     line: [],
  //   })

  //   this.phoneForms.push(phone);
  // }

  // deletePhone(i) {
  //   this.phoneForms.removeAt(i)
  // }

  drop(event: CdkDragDrop<string[]>) {
    //if movement if within the same container 

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, event.previousIndex, event.currentIndex);
    }

    //if movement if to other containers 

    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  output
  number

  calcFib() {
    this.output = "Loading....";
    this.active();
    this.webWorker.postMessage(this.number)
  }

  active() {
    const thisRef = this;
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('./webworker.worker', { type: "module", name: "fibothread", })
      this.webWorker.onmessage = function (data) {
        thisRef.output = data.data;
        thisRef.webWorker.terminate();
      }
    }
  }
  ClickDetail() {
    this._zone.runOutsideAngular(() => {
      setTimeout(() => {
        for (let index = 0; index < 10000; index++) {
          this.dataInfo.push({ item: 'Item Info' + index, id: index })
        }
      }, 0)
    });
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.scrollY > 20) {
      this.navbar.nativeElement.classList.add('sticky');
    }
    else {
      this.navbar.nativeElement.classList.remove('sticky');

    }

  }

  example(element) {
    if (element.children[0].classList.contains('fa-bars')) {
      element.children[0].classList.remove('fa-bars');
      element.children[0].classList.add('fa-times');
    }
    else {
      element.children[0].classList.remove('fa-times')
      element.children[0].classList.add('fa-bars');


    }
    const ele: any = document.getElementsByClassName('menu');
    if (ele[0].classList.contains('active')) {
      ele[0].classList.remove('active');
    }
    else {
      ele[0].classList.add('active');
    }
  }

  hidemenu(element) {
    const ele: any = document.getElementsByClassName('menu');
    ele[0].classList.remove('active');
    element.children[0].classList.remove('fa-times')
    element.children[0].classList.add('fa-bars');
  }
  checkMCA(element) {
    if (element.parentElement.parentElement.children[1].classList
      .contains('education-is-info-none')) {
      element.parentElement.parentElement.children[1].classList
        .remove('education-is-info-none')

    }
    else {
      element.parentElement.parentElement.children[1].classList
        .add('education-is-info-none')
    }



    if (element.children[0].classList.contains('fa-plus')) {
      element.children[0].classList.remove('fa-plus')
      element.children[0].classList.add('fa-minus')
    }
    else {
      element.children[0].classList.remove('fa-minus')
      element.children[0].classList.add('fa-plus')
    }
  }

  navigateSocial(string) {
    switch (string) {
      case 'twitter':
        {
          window.open('https://twitter.com/MishraSachin007', '_blank');
          return;
        }
      case 'overflow':
        {
          window.open('https://stackoverflow.com/users/7909738/sachin-mishra?tab=profile', '_blank');
          return;
        }
      case 'facebook':
        {
          window.open('https://stackoverflow.com/users/7909738/sachin-mishra?tab=profile', '_blank');
          return;
        }
      case 'linkedin':
        {
          window.open('https://www.linkedin.com/in/sachinmishra007/', '_blank');
          return;
        }
      case 'instagram':
        {
          window.open('https://www.instagram.com/sachinmishra609/', '_blank');

          return;
        }
      case 'github':
        {
          window.open('https://github.com/sachinmishra007', '_blank');

          return;
        }
      default:
        break;
    }
  }
  download() {
    window.open("https://drive.google.com/file/d/1XiCQ9JDaJbtfmYnrztbpqo75JTXuLxlw/view?usp=sharing", "_blank")
  }
  // message;
  keyUp(text: string) {
    text = text[0].toUpperCase() + text.substring(1);
  }
  saveRecord() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._httpClient.post("https://cms-api-in.herokuapp.com/api/user/sendEmail",
      JSON.stringify({
        "email": this.info.email,
        "firstname": this.info.firstname,
        "lastname": this.info.lastname,
        "subject": this.info.subject,
        "description": this.info.description
      }), {
      headers: headers
    });
  }
  submit(submit) {
    let message: string = '';
    if (this.info.firstname == '') {
      message = 'Please enter the first name';
    }
    else if (this.info.lastname == '') {
      message = 'Please enter the last name';
    }
    else if (this.info.subject == '') {
      message = 'Please enter the subject line';
    }
    else if (this.info.email == '') {
      message = 'Please enter the email';
    }
    else if (this.info.description == '') {
      message = 'Please enter the description';
    }
    if (message != '') {
      this.infoMessage.nativeElement.style.display = 'flex';
      this.infoMessage.nativeElement.children[1].innerText = message;
    }
    else {
      if (submit.innerText == 'Submit') {
        submit.innerText = 'Loading ...'
        submit.style.cursor = 'not-allowed';
        this.saveRecord().subscribe((_response) => {
          submit.innerText = 'Submit';
          this.infoMessage.nativeElement.style.display = 'flex';
          this.infoMessage.nativeElement.children[1].innerText = 'Query has been Submitted !';
          submit.style.cursor = 'pointer';
          this.clear();
        }, (_error) => {
          console.log(_error);
          submit.innerText = 'Submit';
          submit.style.cursor = 'pointer';
          this.clear();
        });
      }
    }
  }
  clear() {
    this.info = {
      firstname: '',
      lastname: '',
      subject: '',
      email: '',
      description: ''
    };
  }
  close() {
    this.infoMessage.nativeElement.style.display = 'none';
  }
}
