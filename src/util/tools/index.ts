/**
 * @Author: Tomonori
 * @Date: 2020/2/28 14:24
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */

export const dateFormat = (date: number | string, format: string): string => {
  let dateObj: Date = new Date();

  if (typeof date === "number") {
    dateObj = new Date(date);
  } else {
    dateObj = new Date(parseInt(format, 0));
  }

  const dateInfo: any = {
    "M+": (dateObj.getMonth() + 1),
    "d+": dateObj.getDate(),
    "h+": dateObj.getHours(),
    "m+": dateObj.getMinutes(),
    "s+": dateObj.getSeconds(),
    "q+": Math.floor((dateObj.getMonth() + 3) / 3),
    "S": dateObj.getMilliseconds()
  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dateObj.getFullYear().toString()).substr(4 - RegExp.$1.length));
  }

  for (const key in dateInfo) {
    if (new RegExp(`(${key})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? dateInfo[key] : ("00" + dateInfo[key]).substr((<number> dateInfo[key]).toString().length));
    }
  }

  return format;
};

export const checkPhoneAgent = (system: string) : boolean => {
  const ua: string = window.navigator.userAgent.toLowerCase();

  switch (system) {
    case "ios":
      return /(?:iphone)/.test(ua);
    case "android":
      return /(?:android)/.test(ua);
    case "wx":
      return /(?:micromessenger)/.test(ua);
    case "qq":
      return /MQQBrowserQQ|MQQBrowser QQ/ig.test(ua);
  }
};
