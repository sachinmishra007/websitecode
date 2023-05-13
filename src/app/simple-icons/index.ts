import { SimpleIcon } from "simple-icons";
import * as icons from "simple-icons";
const urls = {
    "urls": {
        ".NET": "https://dotnet.microsoft.com",
        "Visual Studio Code": "https://code.visualstudio.com",
        "AIOHTTP": "https://docs.aiohttp.org/en/stable/",
        "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "Vue.js": "https://vuejs.org",
        "Dart": "https://dart.dev",
        "Deno": "https://deno.land",
        "HTML5": "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        "Prettier": "https://prettier.io",
        "React": "https://reactjs.org",
        "GitHub Actions": "https://github.com/features/actions",
        "Apollo GraphQL": "https://www.apollographql.com",
        "Redux": "https://redux.js.org",
        "ReactiveX": "http://reactivex.io",
        "Read the Docs": "https://readthedocs.org",
        "D3.js": "https://d3js.org",
        "Jekyll": "https://jekyllrb.com",
        "JSON": "https://json.org",
        "jsDelivr": "https://www.jsdelivr.com",
        "Markdown": "https://www.markdownguide.org",
        "MDN Web Docs": "https://developer.mozilla.org/",
        "Medium": "https://medium.com",
        "Microsoft SQL Server": "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
        "NASA": "https://www.nasa.gov",
        "Notepad++": "https://notepad-plus-plus.org",
        "NuGet": "https://www.nuget.org",
        "Open Access": "https://www.openaccess.nl",
        "Protractor": "https://www.protractortest.org",
        "PureScript": "https://www.purescript.org",
        "Qt": "https://www.qt.io",
        "Home Assistant": "https://www.home-assistant.io",
        "SQLite": "https://www.sqlite.org"
    }
}

export const enum ExportType {
    URL = 'URL',
    HTML = 'HTML',
    MARKDOWN = 'MARKDOWN'
}

export function Get(name: string | Array<string>, type?: ExportType | 'URL' | 'HTML' | 'MARKDOWN', includeURL?: boolean): string | undefined {
    return get(name, type, includeURL);
}

export function get(name: string | Array<string>, type?: ExportType | 'URL' | 'HTML' | 'MARKDOWN', includeURL?: boolean): string | undefined {
    if (type == undefined) type = ExportType.MARKDOWN;
    if (includeURL == undefined) includeURL = true;
    if (typeof name === 'string') name = [name];

    const result = name.map((iconName) => {
        // debugger;
        const icon = (<any>icons)["si" + iconName.substring(0, 1).toUpperCase() + iconName.substring(1, iconName.length)];
        if (icon === undefined) {
            if (name.length == 1) {
                return undefined;
            }
            else {
                throw new Error(`Invalid icon name "${iconName}"`);
            }
        }
        const brandName = icon.title.replace(/[ -]/g, '_');
        const iconColor = getIconColor(icon.hex);
        const shieldURL = `https://img.shields.io/badge/-${brandName}-${icon.hex}?style=flat-square&logo=${icon.slug}&logoColor=${iconColor}`;
        const url = serviceURL(icon);

        if (type == ExportType.URL) {
            return shieldURL;
        }
        else if (type == ExportType.HTML) {
            const htmlImage = `<img alt="${icon.title}" src="${shieldURL}"/>`;
            return includeURL ? `<a target="_blank" href="${url}">${htmlImage}</a>` : htmlImage;
        }
        else if (type == ExportType.MARKDOWN) {
            const markdownImage = `![${icon.title}](${shieldURL})`;
            return includeURL ? `[${markdownImage}](${url})` : markdownImage;
        }
        else {
            throw new Error('Invalid argument for type');
        }
    });
    if (result[0] === undefined) return undefined;
    return result.join(' ');
}

function serviceURL(icon: SimpleIcon): string {
    if (Object.prototype.hasOwnProperty.call(urls.urls, icon.title)) {
        return (urls.urls as any)[icon.title];
    }
    else {
        return baseURL(icon.source);
    }
}

function baseURL(urlString: string): string {
    const url = new URL(urlString);
    const urlParts = url.hostname.split('.');
    return url.protocol + '//' + urlParts
        .slice(0)
        .slice(-(urlParts.length === 4 ? 3 : 2))
        .join('.');
}

function getIconColor(background: string): string {
    const rgb = hexToRgb(background);
    const brightness = +((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 255000).toFixed(2);
    return brightness <= 0.69 ? 'fff' : '333';
}

function hexToRgb(hex: string): Array<number> {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // istanbul ignore next (now way to test it really)
    if (result == null) throw new TypeError('Invalid HEX');
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}