import {Render} from "./Render";

import "./asset/css/index.styl"
import {Background} from "./element/Background";
import {Nerv} from "./element/Nerv";

class Main extends Render {

    constructor() {
        super({
            className: 'main',
            parent: document.body
        });
    }

    protected render(): void {
        let mainEl = this.addMainElement();
        let background = new Background({className: "img__bg", parent: mainEl});
        let nerv = new Nerv({className: "img__nerv", parent: mainEl});
    }
}

new Main();
