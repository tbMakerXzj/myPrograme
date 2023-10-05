class UrlTools {
  static get url() {
    return window.location.href;
  }

  static setUrl(url: any) {
    if (!url) return;
    window.location.href = url;
  }
}

export default UrlTools;
