/**
 * @Author: Tomonori
 * @Date: 2020/2/21 17:29
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */

class Helper {

  public listenMouseMove(func: Function) {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      func(e)
    })
  }
}

export default new Helper();
