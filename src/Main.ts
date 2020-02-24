import {Render} from "./Render";

import "./asset/css/index.styl"
import {Background} from "./element/Background";

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
    }
}

new Main();
