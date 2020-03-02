/**
 * @Author: Tomonori
 * @Date: 2020/3/2 15:38
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import marked from "marked";

marked.setOptions({
  breaks: true, //允许<br>，gfm必须为true(默认为true)
  smartLists: true
});

export default marked;
