export function formateDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let replaceStr = o[key] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? replaceStr : padLeftZero(replaceStr));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
