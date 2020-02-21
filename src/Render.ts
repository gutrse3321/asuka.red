/**
 * @Author: Tomonori
 * @Date: 2020/2/21 15:01
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import { IOptions } from "./common/base";

export abstract class Render {

    protected abstract options: IOptions;
    protected el: HTMLElement;

    /**
     * 主体逻辑方法
     */
    protected abstract render(): void;

    protected addMainElement(tagName: string = 'div') {
        this.el = this.createElement(tagName);
        this.addMainClasses();
        this.appendChild(this.options.parent, this.el, false);
        this.render()
    }

    private addMainClasses() {
        let opts = this.options;

        if (typeof opts.className === 'string') {
            this.addClass(this.el, opts.className);
        } else {
            for (let i = 0; i < opts.className.length; i++) {
                this.addClass(this.el, opts.className[i]);
            }
        }
    }

    /**
     * DOM创建元素
     * @param tagName
     * @return {HTMLElement}
     */
    protected createElement(tagName: string) : HTMLElement {
        return document.createElement(tagName);
    }

    /**
     * 添加css class
     * @param el
     * @param className
     */
    protected addClass(el: HTMLElement, className: string) {
        className && el.classList.add(className);
    }

    /**
     * 插入儿子元素到父辈元素
     * @param parent
     * @param el
     * @param insertPre 是否是在parent的第一个儿子元素之前插入
     */
    protected appendChild(parent: HTMLElement, el: HTMLElement, insertPre: boolean) {
        insertPre ? parent.insertBefore(el, parent.firstChild) : parent.appendChild(el);
    }
}
