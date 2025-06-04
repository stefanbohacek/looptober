module.exports = {
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response =
        'class="nav-link link-secondary active fw-bold" aria-current="page"';
    } else {
      response = 'class="nav-link link-secondary"';
    }

    return response;
  },
  getProjectURL() {
    // return `https://${process.env.PROJECT_DOMAIN}.glitch.me/`;
    return "https://looptober.neocities.org/"
  },
  getProjectEditURL() {
    // return `https://glitch.com/edit/#!/${process.env.PROJECT_DOMAIN}`;
    return "https://github.com/stefanbohacek/looptober"
  },
  sortArrayOfObjectsByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  },
  getMatomoJSSnippet() {
    return process.env.MATOMO_JS ? process.env.MATOMO_JS : "";
  },
};
