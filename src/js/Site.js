import Index from './index';
import Instagram from './instagram';

export default class Site {
  constructor() {
    this.$body = $(document.body);

    this._checkMobile();

    new Index();
    new Instagram();
  }

  _checkMobile() {
    if (navigator.userAgent.match(/Mobile/i)) {
      this.$body.addClass('is-mobile');
    }
  }
}

$(() => {
  return new Site();
});
