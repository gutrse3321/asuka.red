/**
 * @Author: Tomonori
 * @Date: 2020/2/21 17:23
 * @Title: 明日香人物版图
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import {Render} from "../Render";
import AsukaWebPImage from "../asset/image/asuka.webp";

export class Asuka extends Render {

  protected render(): void {
    this.el = this.createElement("img");
    this.addClass(this.el, <string> this.options.className);
    this.appendChild(this.options.parent, this.el, false);
    this.el.setAttribute("src", AsukaWebPImage);
  }

}
