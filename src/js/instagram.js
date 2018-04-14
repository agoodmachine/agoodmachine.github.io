export default class Instagram {
  constructor() {
    let step = 1;
    if (window.location.hash.indexOf('access_token') !== -1) {
      step = 2;

      $('[data-instagram-accessToken]').val(window.location.hash.split('access_token=')[1]);
    }

    $(`[data-instagram-step="${step}"]`)
      .addClass('visible')
      .siblings('[data-instagram-step]')
      .removeClass('visible');
  }
}
