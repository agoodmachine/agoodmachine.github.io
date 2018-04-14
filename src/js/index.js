export default class Index {
  constructor() {
    const $loadingOverlay = $('[data-loading-overlay]');

    setTimeout(() => {
      $loadingOverlay.removeClass('visible');

      setTimeout(() => {
        $loadingOverlay.remove();
      }, 400);
    }, 1500);
  }
}
