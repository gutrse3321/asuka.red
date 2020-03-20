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

export const getTime = (params: string | number): string => {
  let date: Date;
  const currentDate: Date = new Date();
  const yesterdayDate: Date = new Date(currentDate.setTime(currentDate.getTime() - 24 * 60 * 60 * 1000));

  if (typeof params === "number") {
    date = new Date(params);
  } else {
    date = new Date(parseInt(params, 0));
  }

  const item: any = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  }

  const current: any = {
    Y: currentDate.getFullYear(),
    M: currentDate.getMonth() + 1,
    D: currentDate.getDate() + 1,
    H: currentDate.getHours(),
    m: currentDate.getMinutes(),
    s: currentDate.getSeconds(),
  }

  const yesterday: any = {
    Y: yesterdayDate.getFullYear(),
    M: yesterdayDate.getMonth() + 1,
    D: yesterdayDate.getDate(),
    H: yesterdayDate.getHours(),
    m: yesterdayDate.getMinutes(),
    s: yesterdayDate.getSeconds(),
  };

  if (item.Y === current.Y && item.M === current.M && item.D === current.D) {
    if (item.H < current.H) {
      return `${item.H - item.H}小时前`;
    }

    if (item.m < current.m) {
      console.log(item.m);
      console.log(current.m);
      return `${current.m - item.m}分钟前`;
    }

    return '刚刚';
  }

  if (item.Y === yesterday.Y && item.M === yesterday.M && item.D === yesterday.D) {
    return `昨天 ${item.H}:${parseMin(item.m)}`;
  }

  return `${item.M}-${item.D} ${item.H}:${parseMin(item.m)}`;
};

/**
 * 分钟补零
 * @param min
 */
const parseMin = (min: number): string => min < 9 ? `0${min}` : min.toString();

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
