/**
 Language class
 **/

import { en_GB } from "../i18n/en_GB";
import { ru_RU } from "../i18n/ru_RU";

class I18N {

    private locale: string;
    private data: any;

    constructor(locale:string) {

        this.locale = locale;

        switch(locale){
            case "ru_RU":
                this.data = ru_RU;
                break;

            case "en_GB":
                this.data = en_GB;
                break;

            default:
                this.data = en_GB;
                this.locale = "en_GB";
                break;
        }
    }

    get(key: string){
        return this.data[key] || key;
    }
}

export function i18n(key: string){
    return new I18N(app.locale).get(key);
}
