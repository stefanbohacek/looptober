module.exports = {
    getLinkActiveState(itemUrl, pageUrl) {
      let response = "";
  
      if (itemUrl === pageUrl) {
        response = 'class="nav-link link-secondary active fw-bold" aria-current="page"';
      } else {
        response = 'class="nav-link link-secondary"';
      }
  
      return response;
    },
    getProjectURL() {
      return `https://${process.env.PROJECT_DOMAIN}.glitch.me/`;
    },
    getProjectEditURL() {
      return `https://glitch.com/edit/#!/${process.env.PROJECT_DOMAIN}`;
    },
    sortArrayOfObjectsByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    },
  };
  