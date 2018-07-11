// 解析url参数
export function urlParse() {
  let url = window.location.search;
  let o = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let temArr = item.substring(1).split('=');
      let key = decodeURIComponent(temArr[0]);
      let value = decodeURIComponent(temArr[1]);
      o[key] = value;
    });
  }
  return o;
};
