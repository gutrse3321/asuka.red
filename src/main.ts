/**
 * @Author: Tomonori
 * @Date: 2020/2/25 17:03
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import "./assets/css/index.styl"

import ko from "./assets/images/ko.jpg"

let text = document.createElement("div");
text.className = "text";
text.innerHTML = "会说就多说点";
document.body.appendChild(text);

let img = document.createElement("img");
img["src"] = ko;
document.body.appendChild(img);
