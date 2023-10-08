import qs from "qs";
class UrlTools {
  static get url() {
    return window.location.href;
  }

  static setUrl(url: string) {
    if (!url) return;
    window.location.href = url;
  }

  static getUrlParams(url: string = window.location.href) {
    const queryString = url.split("?")[1];
    return queryString || "";
  }

  static getUrlParamsObj(url: string = window.location.href) {
    const queryString = UrlTools.getUrlParams(url);
    return qs.parse(queryString);
  }
}

export default UrlTools;
