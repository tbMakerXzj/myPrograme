import { get } from "lodash";

class UrlTools {
  static get url() {
    return window.location.href;
  }

  static setUrl(url: any) {
    if (!url) return;
    window.location.href = url;
  }

  static getUrlParams(location: any = window.location) {
    const querySearch: string = get(location, "search", "");
    if (querySearch && querySearch.startsWith("?")) {
      return querySearch.substr(1, querySearch.length - 1);
    }
    return "";
  }
}

export default UrlTools;
