/**
 * @Author: Tomonori
 * @Date: 2020/2/21 17:22
 * @Title: 背景图片
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import {Render} from "../Render";
import BgWebPImage from "../asset/image/bg.webp";
import {IOptions} from "../common/base";
import Helper from "../common/Helper";

export class Background extends Render {

  constructor(options: IOptions) {
    super(options);
    this.listener()
  }

  protected render(): void {
    this.el = this.createElement("img");
    this.addClass(this.el, <string> this.options.className);
    this.appendChild(this.options.parent, this.el, true);
    this.el.setAttribute("src", BgWebPImage);
  }

  private listener() {
    let bgWidth = this.el.offsetWidth;
    let bgHeight = this.el.offsetHeight;

    let rateX = Helper.getWindowWidth() / bgWidth,
        rateY = Helper.getWindowHeight() / bgHeight;

    Helper.listenMouseMove((e: MouseEvent) => {
      this.el.style.left = `${e.pageX * rateX * 0.01 + 45}%`;
      this.el.style.top = `${e.pageY * rateY * 0.01 + 45}%`;
    })
  }

}
