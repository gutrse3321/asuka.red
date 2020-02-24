/**
 * @Author: Tomonori
 * @Date: 2020/2/21 17:29
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */

class Helper {

  private windowWidth: number = 0;
  private windowHeight: number = 0;

  constructor() {
    this.getWindowSize();
    this.listenResize();
  }

  public getWindowWidth(): number {
    return this.windowWidth;
  }

  public getWindowHeight(): number {
    return this.windowHeight;
  }

  public listenMouseMove(func: Function) {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      func(e);
    });
  }

  private getWindowSize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  private listenResize() {
    window.addEventListener("resize", this.getWindowSize.bind(this));
  }
}

export default new Helper();
