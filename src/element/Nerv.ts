/**
 * @Author: Tomonori
 * @Date: 2020/2/21 17:25
 * @Title: nerv标志
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import {Render} from "../Render";
import NervWebPImage from "../asset/image/nerv.webp";

export class Nerv extends Render {

  protected render(): void {
    this.el = this.createElement("img");
    this.addClass(this.el, <string> this.options.className);
    this.appendChild(this.options.parent, this.el, false);
    this.el.setAttribute("src", NervWebPImage);
  }

}
