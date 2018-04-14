(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _checkout = require('./checkout');

var _checkout2 = _interopRequireDefault(_checkout);

var _instagram = require('./instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var Site = (function () {
  function Site() {
    _classCallCheck(this, Site);

    this.$body = $(document.body);

    this._checkMobile();

    var $checkout = $('[data-content="checkout"]');
    var $instagram = $('[data-content="instagram"]');

    if ($checkout.length) {
      new _checkout2['default']($checkout);
    }

    if ($instagram.length) {
      new _instagram2['default']($instagram);
    }
  }

  Site.prototype._checkMobile = function _checkMobile() {
    if (navigator.userAgent.match(/Mobile/i)) {
      this.$body.addClass('is-mobile');
    }
  };

  return Site;
})();

exports['default'] = Site;

$(function () {
  return new Site();
});
module.exports = exports['default'];

},{"./checkout":2,"./instagram":3}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Checkout = (function () {
  function Checkout($el) {
    _classCallCheck(this, Checkout);

    this.$el = $el;
    this.$form = this.$el.find('[data-checkout-form]');

    this._bindEvents();
  }

  Checkout.prototype._bindEvents = function _bindEvents() {
    var _this = this;

    this.$el.on('submit', '[data-checkout-form]', function (event) {
      _this._submitForm(event);
    });
  };

  Checkout.prototype._submitForm = function _submitForm(event) {
    var _this2 = this;

    event.preventDefault();

    // Disable the submit button to prevent repeated clicks:
    this.$form.find('[data-checkout-submit]').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken(this.$form, function (status, response) {

      if (response.error) {
        // Problem!

        // Show the errors on the form:
        _this2.$form.find('.checkout-errors').text(response.error.message);
        _this2.$form.find('[data-checkout-submit]').prop('disabled', false); // Re-enable submission
      } else {
          // Token was created!

          // Get the token ID:
          var token = response.id;

          // Insert the token ID into the form so it gets submitted to the server:
          _this2.$form.append($('<input type="hidden" name="stripeToken">').val(token));

          // Submit the form:
          _this2.$form.get(0).submit();
        }
    });

    // Prevent the form from being submitted:
    return false;
  };

  return Checkout;
})();

exports['default'] = Checkout;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Instagram = function Instagram() {
  _classCallCheck(this, Instagram);

  var step = 1;
  if (window.location.hash.indexOf('access_token') !== -1) {
    step = 2;

    $('[data-instagram-accessToken]').val(window.location.hash.split('access_token=')[1]);
  }

  $('[data-instagram-step="' + step + '"]').addClass('visible').siblings('[data-instagram-step]').removeClass('visible');
};

exports['default'] = Instagram;
module.exports = exports['default'];

},{}]},{},[1]);
