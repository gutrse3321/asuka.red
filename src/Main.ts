import {Render} from "./Render";
import {IOptions} from "./common/base";
import Helper from "./common/Helper";

class Main extends Render {
    protected options: IOptions;
    protected el: HTMLElement;

    constructor() {
        super();
        this.options = {
            className: 'main',
            parent: document.body
        }
        super.addMainElement()
        this.listener()
    }

    protected render(): void {
        console.log(this.el)
    }

    private listener() {
        Helper.listenMouseMove((e: MouseEvent) => {
            console.log(e.pageX)
        })
    }
}

new Main();
