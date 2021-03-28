function fxSoCountDownTimer(dt, id, product) {
  var helperTime = dt.replace(/-/g, "/");
  var end = new Date(helperTime);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;
  var tempDays, tempHours, tempMinutes, tempSeconds;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);

      document.querySelector("#product-" + id).remove();

      return false;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    if (true === product) {
      if (tempDays !== days) {
        document.querySelector(
          "#box_productfull #product-" + id + " .so_content-days"
        ).innerHTML = days;
      }

      if (tempHours !== hours) {
        document.querySelector(
          "#box_productfull #product-" + id + " .so_content-hour"
        ).innerHTML = hours;
      }

      if (tempMinutes !== minutes) {
        document.querySelector(
          "#box_productfull #product-" + id + " .so_content-min"
        ).innerHTML = minutes;
      }

      if (tempSeconds !== seconds) {
        document.querySelector(
          "#box_productfull #product-" + id + " .so_content-sec"
        ).innerHTML = seconds;
      }
    } else {
      if (tempDays !== days) {
        document.querySelector(
          "#fx-hit-day #product-" + id + " .so_content-days"
        ).innerHTML = days;
      }

      if (tempHours !== hours) {
        document.querySelector(
          "#fx-hit-day #product-" + id + " .so_content-hour"
        ).innerHTML = hours;
      }

      if (tempMinutes !== minutes) {
        document.querySelector(
          "#fx-hit-day #product-" + id + " .so_content-min"
        ).innerHTML = minutes;
      }

      if (tempSeconds !== seconds) {
        document.querySelector(
          "#fx-hit-day #product-" + id + " .so_content-sec"
        ).innerHTML = seconds;
      }
    }

    tempDays = days;
    tempHours = hours;
    tempMinutes = minutes;
    tempSeconds = seconds;
  }

  timer = setInterval(showRemaining, 1000);
}

function fxHitDay(settings, products) {
  _hitday = this;
  _hitday.loadStatus = 0;
  _hitday.frontAPI;
  _hitday.width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (
    "list_slider" === settings[0] ||
    "list_photo" === settings[0] ||
    "slide_left" === settings[0] ||
    "slide_right" === settings[0]
  ) {
    var settings,
      counter,
      productsAtt,
      productsArray = [],
      productHelperArr = [],
      box,
      innerbox,
      productTemp,
      product,
      aRow,
      boxImageSize,
      imgProduct,
      productNameWrap,
      productName,
      price,
      emPrice,
      delPrice,
      formBasket,
      fieldsetBasket,
      shadedInputWrap,
      unitInput,
      unit,
      inputHidden,
      buttonAddToBasket,
      spanButton,
      quickView,
      ulTags,
      liSuperOffer,
      spanSuperOffer,
      spanPromo,
      styles,
      sliderInnerbox,
      wrapperProduct,
      scrollY,
      closeSlide,
      closeSlideContent,
      colseSlideImage,
      counterProducts,
      handlerLib,
      libJS,
      headHandler;
  } else if ("list_photo_block" === settings[0]) {
    var settings,
      counter,
      productsAtt,
      productsArray = [],
      productHelperArr = [],
      box,
      fRow,
      h3Small,
      h3SmallA,
      div,
      aProdImg,
      spanProdImage,
      imageProd,
      divGrid8,
      aProdName,
      spanProdName,
      divProdDesc,
      pProdDesc,
      pAvail,
      spanKeyAvail,
      spanValueAvail,
      pDeliv,
      spanDelivKey,
      spanDelivlValue,
      formBasket,
      divPrice,
      divInnerPrice,
      spanPrice,
      emPrice,
      delPrice,
      fieldsetForm,
      divShadedWrap,
      inputQuantity,
      spanUnit,
      inputStock,
      inputHidden,
      buttonAddToBasket,
      spanButton,
      ulTags,
      liSuperOffer,
      spanSuperOffer,
      spanPromo,
      styles,
      scrollY,
      counterProducts,
      handlerLib,
      libJS,
      headHandler;
  } else if ("popup" === settings[0]) {
    var settings,
      counter,
      productsAtt,
      productsArray = [],
      productHelperArr = [],
      box,
      fxWrapperModal,
      fxModal,
      fxModalHeader,
      fxH3Header,
      fxModalBody,
      fxModalClose,
      fxModalInnerbox,
      box,
      innerbox,
      productTemp,
      product,
      aRow,
      boxImageSize,
      imgProduct,
      productNameWrap,
      productName,
      price,
      emPrice,
      delPrice,
      formBasket,
      fieldsetBasket,
      shadedInputWrap,
      unitInput,
      unit,
      inputHidden,
      buttonAddToBasket,
      spanButton,
      quickView,
      ulTags,
      liSuperOffer,
      spanSuperOffer,
      spanPromo,
      styles,
      scrollY,
      counterProducts,
      handlerLib,
      libJS,
      headHandler;
  }

  _hitday.createFlagProductList = function () {
    for (var k in _hitday.products) {
      var helperTime = _hitday.products[k][2].replace(/-/g, "/");
      var a = new Date();
      var c = new Date(helperTime);

      if (
        document.querySelector(
          'div[data-product-id="' + _hitday.products[k][0] + '"]'
        ) &&
        a < c
      ) {
        if (
          document.querySelector(
            'div[data-product-id="' + _hitday.products[k][0] + '"] ul.tags'
          )
        ) {
          liSuperOffer = document.createElement("li");
          liSuperOffer.className = "superoffer";
          liSuperOffer.style.background = _hitday.settings[4];

          spanSuperOffer = document.createElement("span");
          if (_hitday.settings[6] == undefined) {
            spanSuperOffer.textContent = "hit dnia";
          } else if (_hitday.settings[6][_hitday.lang]) {
            spanSuperOffer.textContent = _hitday.settings[6][_hitday.lang];
          } else if ("string" == _hitday.settings[6]) {
            spanSuperOffer.textContent = _hitday.settings[6];
          } else {
            spanSuperOffer.textContent = "hit dnia";
          }
          spanSuperOffer.style.color = _hitday.settings[5];

          liSuperOffer.appendChild(spanSuperOffer);
          document
            .querySelector(
              'div[data-product-id="' + _hitday.products[k][0] + '"] ul.tags'
            )
            .appendChild(liSuperOffer);
        }
      }
    }
  };

  _hitday.scrollShow = function () {
    var counterClass = 0;
    var fixedClass = document
      .querySelector("#fx-hit-day.fixed_product")
      .className.split(" ");

    window.fxSettingsHit = _hitday.settings;

    window.addEventListener("scroll", function (settings) {
      scrollY = window.scrollY || window.pageYOffset;

      if (window.fxSettingsHit[2]) {
        if (window.fxSettingsHit[2] < scrollY) {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 === counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider fx-show " + window.fxSettingsHit[0];
          }
        } else {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 < counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider " + window.fxSettingsHit[0];
          }
        }
      } else {
        if (200 < scrollY) {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 === counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider fx-show " + window.fxSettingsHit[0];
          }
        } else {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 < counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider " + window.fxSettingsHit[0];
          }
        }
      }
    });
  };

  _hitday.scrollShowIos = function () {
    var counterClass = 0;
    var fixedClass = document
      .querySelector("#fx-hit-day.fixed_product")
      .className.split(" ");

    window.fxSettingsHit = _hitday.settings;

    window.addEventListener("touchmove", function () {
      if (window.fxSettingsHit[2]) {
        if (
          window.fxSettingsHit[2] < document.querySelector("body").scrollTop
        ) {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 === counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider fx-show " + window.fxSettingsHit[0];
          }
        } else {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 < counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider " + window.fxSettingsHit[0];
          }
        }
      } else {
        if (200 < document.querySelector("body").scrollTop) {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 === counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider fx-show " + window.fxSettingsHit[0];
          }
        } else {
          counterClass = 0;
          fixedClass = document
            .querySelector("#fx-hit-day.fixed_product")
            .className.split(" ");

          fixedClass.forEach(function (item, index) {
            if ("fx-show" === item) {
              counterClass++;
            }
          });

          if (0 < counterClass) {
            document.querySelector("#fx-hit-day.fixed_product").className =
              "fixed_product fx-slider " + window.fxSettingsHit[0];
          }
        }
      }
    });
  };

  _hitday.addStyleToBody = function () {
    if ("" !== _hitday.settings[15] && _hitday.settings[15]) {
      _hitday.settings[15] = _hitday.settings[15].replace(/&fx/g, "\n");

      styles = document.createElement("style");
      styles.innerHTML = _hitday.settings[15];

      document.querySelector("body").appendChild(styles);
    }
  };

  _hitday.createBox = function (products) {
    innerbox = document.createElement("div");
    innerbox.className = "innerbox";

    var testAdd = document.getElementById("fx-hit-day").appendChild(innerbox);
  };

  _hitday.addCounterProduct = function () {
    for (var k in _hitday.products) {
      var helperTime = _hitday.products[k][2].replace(/-/g, "/");
      var a = new Date();
      var c = new Date(helperTime);

      if (
        document.querySelector("body#shop_product" + _hitday.products[k][0]) &&
        a < c
      ) {
        if (document.querySelector("ul.tags")) {
          var wrapperConter = document.createElement("div");
          wrapperConter.className += "fx-wrapper";

          liSuperOffer = document.createElement("li");
          liSuperOffer.className = "superoffer";
          liSuperOffer.style.background = _hitday.settings[4];

          spanSuperOffer = document.createElement("span");

          if (_hitday.settings[6] == undefined) {
            spanSuperOffer.textContent = "hit dnia";
          } else if (_hitday.settings[6][_hitday.lang]) {
            spanSuperOffer.textContent = _hitday.settings[6][_hitday.lang];
          } else if ("string" == _hitday.settings[6]) {
            spanSuperOffer.textContent = _hitday.settings[6];
          } else {
            spanSuperOffer.textContent = "hit dnia";
          }
          spanSuperOffer.style.color = _hitday.settings[5];

          liSuperOffer.appendChild(spanSuperOffer);
          document.querySelector("ul.tags").appendChild(liSuperOffer);

          var conterMain = document.createElement("div");
          conterMain.className += "so_counter so_counter_date";
          conterMain.id = "product-" + _hitday.products[k][0];

          var wrapperDays = document.createElement("div");
          wrapperDays.className = "so_wrapper-day";
          var contentDays = document.createElement("div");
          contentDays.className = "so_content-days";
          contentDays.style.background = _hitday.settings[12];
          contentDays.style.background =
            "-moz-linear-gradient(top, " +
            this.settings[12] +
            " 0%, " +
            this.settings[12] +
            " 50%, " +
            this.settings[13] +
            " 51%, " +
            this.settings[13] +
            " 100%)";
          contentDays.style.background =
            "-webkit-linear-gradient(top, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentDays.style.background =
            "linear-gradient(to bottom, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentDays.filter =
            "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
            this.settings[12] +
            "', endColorstr='" +
            this.settings[13] +
            "',GradientType=0 )";
          contentDays.style.color = _hitday.settings[11];
          var textDays = document.createElement("span");

          if (_hitday.settings[16] == undefined) {
            textDays.innerText = "dni";
          } else if (_hitday.settings[16][_hitday.lang]) {
            textDays.innerText = _hitday.settings[16][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[16]) {
            textDays.innerText = _hitday.settings[16];
          } else {
            textDays.innerText = "dni";
          }

          textDays.style.color = _hitday.settings[14];
          wrapperDays.appendChild(contentDays);
          wrapperDays.appendChild(textDays);

          var wrapperHours = document.createElement("div");
          wrapperHours.className = "so_wrapper-hour";
          var contentHours = document.createElement("div");
          contentHours.className = "so_content-hour";
          contentHours.style.background = _hitday.settings[12];
          contentHours.style.background =
            "-moz-linear-gradient(top, " +
            this.settings[12] +
            " 0%, " +
            this.settings[12] +
            " 50%, " +
            this.settings[13] +
            " 51%, " +
            this.settings[13] +
            " 100%)";
          contentHours.style.background =
            "-webkit-linear-gradient(top, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentHours.style.background =
            "linear-gradient(to bottom, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentHours.filter =
            "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
            this.settings[12] +
            "', endColorstr='" +
            this.settings[13] +
            "',GradientType=0 )";
          contentHours.style.color = _hitday.settings[11];
          var textHours = document.createElement("span");

          if (_hitday.settings[17] == undefined) {
            textHours.innerText = "godzin";
          } else if (_hitday.settings[17][_hitday.lang]) {
            textHours.innerText = _hitday.settings[17][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[17]) {
            textHours.innerText = _hitday.settings[17];
          } else {
            textHours.innerText = "godzin";
          }

          textHours.style.color = _hitday.settings[14];
          wrapperHours.appendChild(contentHours);
          wrapperHours.appendChild(textHours);

          var wrapperMin = document.createElement("div");
          wrapperMin.className = "so_wrapper-min";
          var contentMin = document.createElement("div");
          contentMin.className = "so_content-min";
          contentMin.style.background = _hitday.settings[12];
          contentMin.style.background =
            "-moz-linear-gradient(top, " +
            this.settings[12] +
            " 0%, " +
            this.settings[12] +
            " 50%, " +
            this.settings[13] +
            " 51%, " +
            this.settings[13] +
            " 100%)";
          contentMin.style.background =
            "-webkit-linear-gradient(top, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentMin.style.background =
            "linear-gradient(to bottom, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentMin.filter =
            "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
            this.settings[12] +
            "', endColorstr='" +
            this.settings[13] +
            "',GradientType=0 )";
          contentMin.style.color = _hitday.settings[11];
          var textMin = document.createElement("span");

          if (_hitday.settings[18] == undefined) {
            textMin.innerText = "minut";
          } else if (_hitday.settings[18][_hitday.lang]) {
            textMin.innerText = _hitday.settings[18][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[18]) {
            textMin.innerText = _hitday.settings[18];
          } else {
            textMin.innerText = "minut";
          }

          textMin.style.color = _hitday.settings[14];
          wrapperMin.appendChild(contentMin);
          wrapperMin.appendChild(textMin);

          var wrapperSec = document.createElement("div");
          wrapperSec.className = "so_wrapper-sec";
          var contentSec = document.createElement("div");
          contentSec.className = "so_content-sec";
          contentSec.style.background = _hitday.settings[12];
          contentSec.style.background =
            "-moz-linear-gradient(top, " +
            this.settings[12] +
            " 0%, " +
            this.settings[12] +
            " 50%, " +
            this.settings[13] +
            " 51%, " +
            this.settings[13] +
            " 100%)";
          contentSec.style.background =
            "-webkit-linear-gradient(top, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentSec.style.background =
            "linear-gradient(to bottom, " +
            this.settings[12] +
            " 0%," +
            this.settings[12] +
            " 50%," +
            this.settings[13] +
            " 51%," +
            this.settings[13] +
            " 100%)";
          contentSec.filter =
            "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
            this.settings[12] +
            "', endColorstr='" +
            this.settings[13] +
            "',GradientType=0 )";
          contentSec.style.color = _hitday.settings[11];
          var textSec = document.createElement("span");

          if (_hitday.settings[19] == undefined) {
            textSec.innerText = "sekund";
          } else if (_hitday.settings[19][_hitday.lang]) {
            textSec.innerText = _hitday.settings[19][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[19]) {
            textSec.innerText = _hitday.settings[19];
          } else {
            textSec.innerText = "sekund";
          }

          textSec.style.color = _hitday.settings[14];
          wrapperSec.appendChild(contentSec);
          wrapperSec.appendChild(textSec);

          var textProduct = document.createElement("h2");

          if (_hitday.settings[1] == undefined) {
            textProduct.textContent = "Do końca promocji pozostało: ";
          } else if (_hitday.settings[1][_hitday.lang]) {
            textProduct.textContent = _hitday.settings[1][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[1]) {
            textProduct.textContent = _hitday.settings[1];
          } else {
            textProduct.textContent = "Do końca promocji pozostało: ";
          }

          conterMain.appendChild(wrapperDays);
          conterMain.appendChild(wrapperHours);
          conterMain.appendChild(wrapperMin);
          conterMain.appendChild(wrapperSec);
          wrapperConter.appendChild(textProduct);
          wrapperConter.appendChild(conterMain);

          var timerProduct = document.querySelector(
            "#box_productfull .maininfo .f-row > .f-grid-6:nth-of-type(2)"
          );

          fxSoCountDownTimer(
            _hitday.products[k][2],
            _hitday.products[k][0],
            true
          );
          timerProduct.insertBefore(wrapperConter, timerProduct.firstChild);
        }
      }
    }
  };

  _hitday.createPopup = function () {
    if ("popup" === _hitday.settings[0]) {
      fxWrapperModal = document.createElement("div");
      fxWrapperModal.className += "fx-wrapper-modal";
      fxWrapperModal.id = "fx-hit-day";
      fxWrapperModal.setAttribute("data-type-popup", "hit-day");

      if ("yes" === _hitday.settings[3]) {
        fxWrapperModal.className += " rwd-hide";
      }

      fxModal = document.createElement("div");
      fxModal.className += "fx-modal fx-modal-visible";

      fxModalHeader = document.createElement("div");
      fxModalHeader.className += "fx-modal-header";

      if (document.querySelector("#fx-hit-day .boxhead span")) {
        fxH3Header = document.createElement("h3");
        fxH3Header.textContent = document.querySelector(
          "#fx-hit-day .boxhead span"
        ).outerText;
      }

      fxModalBody = document.createElement("div");
      fxModalBody.className += "fx-modal-body";

      box = document.createElement("div");
      box.className += "box fx-slider loading";

      fxModalClose = document.createElement("div");
      fxModalClose.id = "fx-close";
      fxModalClose.className += "fx-modal-close";

      innerbox = document.createElement("div");
      innerbox.className += "innerbox";

      box.appendChild(innerbox);
      fxModalBody.appendChild(fxModalClose);
      fxModalBody.appendChild(box);
      if (document.querySelector("#fx-hit-day .boxhead span")) {
        fxModalHeader.appendChild(fxH3Header);
        fxModal.appendChild(fxModalHeader);
      }

      fxModal.appendChild(fxModalBody);

      fxWrapperModal.appendChild(fxModal);
      var testAdd = document.querySelector("body").appendChild(fxWrapperModal);

      if (testAdd) {
        _hitday.getProductsShop();
      }
    }
  };

  _hitday.createSliderIn = function () {
    sliderInnerbox = document.createElement("div");
    sliderInnerbox.className += "innerbox";

    wrapperProduct = document.createElement("div");
    wrapperProduct.className +=
      "fixed_product box fx-slider loading " + _hitday.settings[0];
    wrapperProduct.id = "fx-hit-day";

    closeSlide = document.createElement("div");
    closeSlide.id = "fx-close-slidein";

    closeSlideContent = document.createElement("a");
    closeSlideContent.setAttribute("href", "#");
    closeSlideContent.id = "fx-close-trigger";

    if (_hitday.settings[22] == undefined) {
      closeSlideContent.innerText = "zamknij";
    } else if (_hitday.settings[22][_hitday.lang]) {
      closeSlideContent.innerText = _hitday.settings[22][_hitday.lang];
    } else if ("string" == typeof _hitday.settings[22]) {
      closeSlideContent.innerText = _hitday.settings[22];
    } else {
      closeSlideContent.innerText = "zamknij";
    }

    closeSlideContent.style.background = _hitday.settings[20];
    closeSlideContent.style.color = _hitday.settings[21];
    closeSlideContent.setAttribute("title", "Close module");

    closeSlide.appendChild(closeSlideContent);
    wrapperProduct.appendChild(closeSlide);
    wrapperProduct.appendChild(sliderInnerbox);

    document.querySelector("body").appendChild(wrapperProduct);
  };

  _hitday.getProductsShop = function () {
    var tempIdArray = [];

    for (var l in _hitday.products) {
      tempIdArray.push(Number(_hitday.products[l][0]));
    }

    _hitday.frontAPI.getProducts(
      function (products) {
        _hitday.productsObject = products;
        _hitday.createProducts(_hitday.productsObject);
      },
      {
        // lang: _hitday.lang,
        // currency: Shop.values.currency,
        urlParams: "?limit=50",
        ids: tempIdArray,
      }
    );
  };

  _hitday.createProducts = function (products) {
    counterProducts = 0;
    for (var i in products["list"]) {
      if (products["list"][i]["price"]["gross"]["promo"]) {
        counterProducts++;
        if (
          "list_slider" === _hitday.settings[0] ||
          "list_photo" === _hitday.settings[0] ||
          "popup" === _hitday.settings[0] ||
          "slide_left" === _hitday.settings[0] ||
          "slide_right" === _hitday.settings[0]
        ) {
          productTemp = document.createElement("div");
          productTemp.setAttribute(
            "data-product-id",
            products["list"][i]["id"]
          );
          productTemp.setAttribute(
            "data-category",
            products["list"][i]["category"]["name"]
          );
          productTemp.className = "product row center";
          productTemp.id = "product-" + products["list"][i]["id"];

          aRow = document.createElement("a");
          aRow.setAttribute("href", products["list"][i]["url"]);
          aRow.setAttribute("title", products["list"][i]["name"]);
          aRow.className = "row";

          boxImageSize = document.createElement("span");
          boxImageSize.className = "boximgsize row";

          imgProduct = document.createElement("img");
          imgProduct.setAttribute(
            "src",
            "/environment/cache/images/300_300_productGfx_" +
              products["list"][i]["main_image"] +
              ".jpg"
          );
          imgProduct.setAttribute(
            "data-src",
            "/environment/cache/images/300_300_productGfx_" +
              products["list"][i]["main_image"] +
              ".jpg"
          );
          imgProduct.setAttribute("alt", products["list"][i]["name"]);

          productNameWrap = document.createElement("div");
          productNameWrap.className = "productnamewrap row";

          productName = document.createElement("span");
          productName.className = "productname";
          productName.textContent = products["list"][i]["name"];

          price = document.createElement("div");
          price.className = "price row";

          delPrice = document.createElement("del");
          delPrice.textContent = products["list"][i]["price"]["gross"]["base"];

          emPrice = document.createElement("em");
          emPrice.textContent = products["list"][i]["price"]["gross"]["promo"];

          formBasket = document.createElement("form");
          formBasket.className = "basket basket-box";
          if (_hitday.lang == "pl_PL") {
            formBasket.setAttribute("action", "/pl/basket/add/post");
          } else {
            formBasket.setAttribute(
              "action",
              "/" + _hitday.lang + "/basket/add/post"
            );
          }
          formBasket.setAttribute("method", "post");

          fieldsetBasket = document.createElement("fieldset");

          shadedInputWrap = document.createElement("div");
          shadedInputWrap.className = "shaded_inputwrap";

          unitInput = document.createElement("input");
          unitInput.setAttribute("name", "quantity");
          unitInput.setAttribute("value", "1");
          unitInput.setAttribute("type", "text");
          unitInput.className = "short center";

          unit = document.createElement("span");
          unit.className = "unit";
          unit.textContent = products["list"][i]["unit"]["name"];

          inputHidden = document.createElement("input");
          inputHidden.setAttribute("type", "hidden");
          inputHidden.setAttribute("value", products["list"][i]["stockId"]);
          inputHidden.setAttribute("name", "stock_id");

          buttonAddToBasket = document.createElement("button");
          buttonAddToBasket.className = "addtobasket btn btn-red";
          buttonAddToBasket.setAttribute("type", "submit");
          buttonAddToBasket.style.background = _hitday.settings[7];
          buttonAddToBasket.style.borderColor = _hitday.settings[8];

          spanButton = document.createElement("span");

          if (_hitday.settings[10] == undefined) {
            spanButton.textContent = "Do koszyka";
          } else if (_hitday.settings[10][_hitday.lang]) {
            spanButton.textContent = _hitday.settings[10][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[10]) {
            spanButton.textContent = _hitday.settings[10];
          } else {
            spanButton.textContent = "Do koszyka";
          }
          spanButton.style.color = _hitday.settings[9];

          quickView = document.createElement("a");
          quickView.className = "btn large tablet quickview";
          quickView.setAttribute("data-price", true);
          quickView.setAttribute("data-eval", 1);
          quickView.setAttribute("data-id", products["list"][i]["id"]);

          ulTags = document.createElement("ul");
          ulTags.className += "tags";

          liSuperOffer = document.createElement("li");
          liSuperOffer.className = "superoffer";
          liSuperOffer.style.background = _hitday.settings[4];

          spanSuperOffer = document.createElement("span");

          if (_hitday.settings[6] == undefined) {
            spanSuperOffer.textContent = "hit dnia";
          } else if (_hitday.settings[6][_hitday.lang]) {
            spanSuperOffer.textContent = _hitday.settings[6][_hitday.lang];
          } else if ("string" == _hitday.settings[6]) {
            spanSuperOffer.textContent = _hitday.settings[6];
          } else {
            spanSuperOffer.textContent = "hit dnia";
          }

          spanSuperOffer.style.color = _hitday.settings[5];
        } else if ("list_photo_block" === _hitday.settings[0]) {
          productTemp = document.createElement("div");
          productTemp.setAttribute(
            "data-product-id",
            products["list"][i]["id"]
          );
          if (products["list"][i]["category"])
            productTemp.setAttribute(
              "data-category",
              products["list"][i]["category"]["name"]
            );

          if (products["list"][i]["producer"])
            productTemp.setAttribute(
              "data-producer",
              products["list"][i]["producer"]["name"]
            );

          productTemp.className = "oneperrow f-row product 3";
          productTemp.id = "product-" + products["list"][i]["id"];

          fRow = document.createElement("div");
          fRow.className += "f-row description";

          h3Small = document.createElement("h3");
          h3Small.className += "small tablet  f-grid-12";

          h3SmallA = document.createElement("a");
          h3SmallA.setAttribute("href", products["list"][i]["url"]);
          h3SmallA.setAttribute("title", products["list"][i]["name"]);
          h3SmallA.setAttribute("rel", "nofollow");
          h3SmallA.textContent = products["list"][i]["name"];

          div = document.createElement("div");

          aProdImg = document.createElement("a");
          aProdImg.className += "details f-grid-4 prodimage";
          aProdImg.setAttribute("href", products["list"][i]["url"]);
          aProdImg.setAttribute("title", products["list"][i]["name"]);
          aProdImg.setAttribute("rel", "nofollow");

          spanProdImage = document.createElement("span");
          spanProdImage.className += "f-grid-12 img-wrap";

          imageProd = document.createElement("img");
          imageProd.setAttribute(
            "src",
            "/environment/cache/images/300_300_productGfx_" +
              products["list"][i]["main_image"] +
              ".jpg"
          );
          imageProd.setAttribute(
            "data-src",
            "/environment/cache/images/300_300_productGfx_" +
              products["list"][i]["main_image"] +
              ".jpg"
          );
          imageProd.setAttribute("alt", products["list"][i]["name"]);

          divGrid8 = document.createElement("div");
          divGrid8.className += "f-grid-8";

          aProdName = document.createElement("a");
          aProdName.className += "f-grid-12 prodname large";
          aProdName.setAttribute("href", products["list"][i]["url"]);
          aProdName.setAttribute("title", products["list"][i]["name"]);

          spanProdName = document.createElement("span");
          spanProdName.className += "productname";
          spanProdName.textContent = products["list"][i]["name"];

          divProdDesc = document.createElement("div");
          divProdDesc.className += "product-short-description resetcss large";
          divProdDesc.innerHTML = products["list"][i]["shortDescription"];

          pAvail = document.createElement("p");
          pAvail.className += "avail";

          spanKeyAvail = document.createElement("span");
          spanKeyAvail.className += "availability";
          spanKeyAvail.textContent = "Dostęponość: ";

          spanValueAvail = document.createElement("span");
          spanValueAvail.className += "availability";
          spanValueAvail.textContent =
            products["list"][i]["availability"]["name"];

          pDeliv = document.createElement("p");
          pDeliv.className += "deliv";

          spanDelivKey = document.createElement("span");
          spanDelivKey.className += "delivery";
          spanDelivKey.textContent = "Wysyłka w: ";

          spanDelivlValue = document.createElement("span");
          spanDelivlValue.className += "delivery";
          spanDelivlValue.textContent = products["list"][i]["delivery"]["name"];

          formBasket = document.createElement("form");
          formBasket.className += "basket f-grid-12 right";
          if (_hitday.lang == "pl_PL") {
            formBasket.setAttribute("action", "/pl/basket/add/post");
          } else {
            formBasket.setAttribute(
              "action",
              "/" + _hitday.lang + "/basket/add/post"
            );
          }
          formBasket.setAttribute("method", "post");

          divPrice = document.createElement("div");
          divPrice.className += "price";

          divInnerPrice = document.createElement("div");

          spanPrice = document.createElement("span");
          spanPrice.textContent = "Cena:";

          delPrice = document.createElement("del");
          delPrice.textContent = products["list"][i]["price"]["gross"]["base"];

          emPrice = document.createElement("em");
          emPrice.textContent = products["list"][i]["price"]["gross"]["final"];

          fieldsetForm = document.createElement("fieldset");

          divShadedWrap = document.createElement("div");
          divShadedWrap.className += "shaded_inputwrap";

          inputQuantity = document.createElement("input");
          inputQuantity.setAttribute("name", "quantity");
          inputQuantity.setAttribute("value", "1");
          inputQuantity.setAttribute("type", "text");
          inputQuantity.className += "short center";

          spanUnit = document.createElement("span");
          spanUnit.className += "unit";
          spanUnit.textContent = products["list"][i]["unit"]["name"];

          inputStock = document.createElement("input");
          inputStock.setAttribute("type", "hidden");
          inputStock.setAttribute("value", products["list"][i]["stockId"]);
          inputStock.setAttribute("name", "stock_id");

          inputHidden = document.createElement("input");
          inputHidden.setAttribute("type", "hidden");
          inputHidden.setAttribute("name", "required");
          inputHidden.setAttribute("value", "1");

          buttonAddToBasket = document.createElement("button");
          buttonAddToBasket.className = "addtobasket btn btn-red";
          buttonAddToBasket.setAttribute("type", "submit");
          buttonAddToBasket.style.background = _hitday.settings[7];
          buttonAddToBasket.style.borderColor = _hitday.settings[8];

          spanButton = document.createElement("span");
          if (_hitday.settings[10][_hitday.lang]) {
            spanButton.textContent = _hitday.settings[10][_hitday.lang];
          } else if ("string" == typeof _hitday.settings[10]) {
            spanButton.textContent = _hitday.settings[10];
          } else {
            spanButton.textContent = "Do koszyka";
          }
          spanButton.style.color = _hitday.settings[9];

          ulTags = document.createElement("ul");
          ulTags.className += "tags";

          liSuperOffer = document.createElement("li");
          liSuperOffer.className = "superoffer";
          liSuperOffer.style.background = _hitday.settings[4];

          spanSuperOffer = document.createElement("span");

          if (_hitday.settings[6] == undefined) {
            spanSuperOffer.textContent = "hit dnia";
          } else if (_hitday.settings[6][_hitday.lang]) {
            spanSuperOffer.textContent = _hitday.settings[6][_hitday.lang];
          } else if ("string" == _hitday.settings[6]) {
            spanSuperOffer.textContent = _hitday.settings[6];
          } else {
            spanSuperOffer.textContent = "hit dnia";
          }
          spanSuperOffer.style.color = _hitday.settings[5];
        }

        var conterMain = document.createElement("div");
        conterMain.className += "so_counter so_counter_date";

        var wrapperDays = document.createElement("div");
        wrapperDays.className = "so_wrapper-day";
        var contentDays = document.createElement("div");
        contentDays.className = "so_content-days";
        contentDays.style.background = _hitday.settings[12];
        contentDays.style.background =
          "-moz-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%, " +
          _hitday.settings[12] +
          " 50%, " +
          _hitday.settings[13] +
          " 51%, " +
          _hitday.settings[13] +
          " 100%)";
        contentDays.style.background =
          "-webkit-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentDays.style.background =
          "linear-gradient(to bottom, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentDays.filter =
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
          _hitday.settings[12] +
          "', endColorstr='" +
          _hitday.settings[13] +
          "',GradientType=0 )";
        contentDays.style.color = _hitday.settings[11];
        var textDays = document.createElement("span");

        if (_hitday.settings[16] == undefined) {
          textDays.innerText = "dni";
        } else if (_hitday.settings[16][_hitday.lang]) {
          textDays.innerText = _hitday.settings[16][_hitday.lang];
        } else if ("string" == typeof _hitday.settings[16]) {
          textDays.innerText = _hitday.settings[16];
        } else {
          textDays.innerText = "dni";
        }

        textDays.style.color = _hitday.settings[14];
        wrapperDays.appendChild(contentDays);
        wrapperDays.appendChild(textDays);

        var wrapperHours = document.createElement("div");
        wrapperHours.className = "so_wrapper-hour";
        var contentHours = document.createElement("div");
        contentHours.className = "so_content-hour";
        contentHours.style.background = _hitday.settings[12];
        contentHours.style.background =
          "-moz-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%, " +
          _hitday.settings[12] +
          " 50%, " +
          _hitday.settings[13] +
          " 51%, " +
          _hitday.settings[13] +
          " 100%)";
        contentHours.style.background =
          "-webkit-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentHours.style.background =
          "linear-gradient(to bottom, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentHours.filter =
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
          _hitday.settings[12] +
          "', endColorstr='" +
          _hitday.settings[13] +
          "',GradientType=0 )";
        contentHours.style.color = _hitday.settings[11];
        var textHours = document.createElement("span");

        if (_hitday.settings[17] == undefined) {
          textHours.innerText = "godzin";
        } else if (_hitday.settings[17][_hitday.lang]) {
          textHours.innerText = _hitday.settings[17][_hitday.lang];
        } else if ("string" == typeof _hitday.settings[17]) {
          textHours.innerText = _hitday.settings[17];
        } else {
          textHours.innerText = "godzin";
        }

        textHours.style.color = _hitday.settings[14];
        wrapperHours.appendChild(contentHours);
        wrapperHours.appendChild(textHours);

        var wrapperMin = document.createElement("div");
        wrapperMin.className = "so_wrapper-min";
        var contentMin = document.createElement("div");
        contentMin.className = "so_content-min";
        contentMin.style.background = _hitday.settings[12];
        contentMin.style.background =
          "-moz-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%, " +
          _hitday.settings[12] +
          " 50%, " +
          _hitday.settings[13] +
          " 51%, " +
          _hitday.settings[13] +
          " 100%)";
        contentMin.style.background =
          "-webkit-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentMin.style.background =
          "linear-gradient(to bottom, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentMin.filter =
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
          _hitday.settings[12] +
          "', endColorstr='" +
          _hitday.settings[13] +
          "',GradientType=0 )";
        contentMin.style.color = _hitday.settings[11];
        var textMin = document.createElement("span");

        if (_hitday.settings[18] == undefined) {
          textMin.innerText = "minut";
        } else if (_hitday.settings[18][_hitday.lang]) {
          textMin.innerText = _hitday.settings[18][_hitday.lang];
        } else if ("string" == typeof _hitday.settings[18]) {
          textMin.innerText = _hitday.settings[18];
        } else {
          textMin.innerText = "minut";
        }

        textMin.style.color = _hitday.settings[14];
        wrapperMin.appendChild(contentMin);
        wrapperMin.appendChild(textMin);

        var wrapperSec = document.createElement("div");
        wrapperSec.className = "so_wrapper-sec";
        var contentSec = document.createElement("div");
        contentSec.className = "so_content-sec";
        contentSec.style.background = _hitday.settings[12];
        contentSec.style.background =
          "-moz-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%, " +
          _hitday.settings[12] +
          " 50%, " +
          _hitday.settings[13] +
          " 51%, " +
          _hitday.settings[13] +
          " 100%)";
        contentSec.style.background =
          "-webkit-linear-gradient(top, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentSec.style.background =
          "linear-gradient(to bottom, " +
          _hitday.settings[12] +
          " 0%," +
          _hitday.settings[12] +
          " 50%," +
          _hitday.settings[13] +
          " 51%," +
          _hitday.settings[13] +
          " 100%)";
        contentSec.filter =
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='" +
          _hitday.settings[12] +
          "', endColorstr='" +
          _hitday.settings[13] +
          "',GradientType=0 )";
        contentSec.style.color = _hitday.settings[11];
        var textSec = document.createElement("span");

        if (_hitday.settings[19] == undefined) {
          textSec.innerText = "sekund";
        } else if (_hitday.settings[19][_hitday.lang]) {
          textSec.innerText = _hitday.settings[19][_hitday.lang];
        } else if ("string" == typeof _hitday.settings[19]) {
          textSec.innerText = _hitday.settings[19];
        } else {
          textSec.innerText = "sekund";
        }

        textSec.style.color = _hitday.settings[14];
        wrapperSec.appendChild(contentSec);
        wrapperSec.appendChild(textSec);

        conterMain.appendChild(wrapperDays);
        conterMain.appendChild(wrapperHours);
        conterMain.appendChild(wrapperMin);
        conterMain.appendChild(wrapperSec);

        if (
          "list_slider" === _hitday.settings[0] ||
          "list_photo" === _hitday.settings[0] ||
          "popup" === _hitday.settings[0] ||
          "slide_left" === _hitday.settings[0] ||
          "slide_right" === _hitday.settings[0]
        ) {
          boxImageSize.appendChild(imgProduct);
          aRow.appendChild(boxImageSize);
          productNameWrap.appendChild(productName);
          aRow.appendChild(productNameWrap);

          price.appendChild(delPrice);
          price.appendChild(emPrice);

          shadedInputWrap.appendChild(unitInput);
          fieldsetBasket.appendChild(shadedInputWrap);
          fieldsetBasket.appendChild(unit);
          fieldsetBasket.appendChild(inputHidden);
          buttonAddToBasket.appendChild(spanButton);
          fieldsetBasket.appendChild(buttonAddToBasket);

          formBasket.appendChild(fieldsetBasket);

          liSuperOffer.appendChild(spanSuperOffer);
          ulTags.appendChild(liSuperOffer);

          productTemp.appendChild(conterMain);
          productTemp.appendChild(aRow);
          productTemp.appendChild(price);
          productTemp.appendChild(formBasket);
          productTemp.appendChild(ulTags);
        } else if ("list_photo_block" === _hitday.settings[0]) {
          h3Small.appendChild(h3SmallA);

          fRow.appendChild(h3Small);

          spanProdImage.appendChild(imageProd);
          aProdImg.appendChild(spanProdImage);

          aProdName.appendChild(spanProdName);
          divGrid8.appendChild(aProdName);

          pAvail.appendChild(spanKeyAvail);
          pAvail.appendChild(spanValueAvail);

          pDeliv.appendChild(spanDelivKey);
          pDeliv.appendChild(spanDelivlValue);

          divInnerPrice.appendChild(spanPrice);
          divInnerPrice.appendChild(emPrice);
          divInnerPrice.appendChild(delPrice);
          divPrice.appendChild(divInnerPrice);

          formBasket.appendChild(divPrice);

          divShadedWrap.appendChild(inputQuantity);
          fieldsetForm.appendChild(divShadedWrap);
          fieldsetForm.appendChild(spanUnit);
          fieldsetForm.appendChild(inputStock);
          fieldsetForm.appendChild(inputHidden);
          buttonAddToBasket.appendChild(spanButton);
          fieldsetForm.appendChild(buttonAddToBasket);

          formBasket.appendChild(fieldsetForm);

          divGrid8.appendChild(divProdDesc);
          divGrid8.appendChild(pAvail);
          divGrid8.appendChild(pDeliv);
          divGrid8.appendChild(formBasket);

          div.appendChild(aProdImg);
          div.appendChild(divGrid8);

          fRow.appendChild(div);

          liSuperOffer.appendChild(spanSuperOffer);
          ulTags.appendChild(liSuperOffer);

          productTemp.appendChild(conterMain);
          productTemp.appendChild(fRow);
          productTemp.appendChild(ulTags);
        }

        for (var j in _hitday.products) {
          if (_hitday.products[j][0] == products["list"][i]["id"]) {
            var helperTime = _hitday.products[j][2].replace(/-/g, "/");
            var a = new Date();
            var c = new Date(helperTime);

            if (a < c) {
              if ("popup" === _hitday.settings[0]) {
                document
                  .querySelector("#fx-hit-day.fx-wrapper-modal .innerbox")
                  .appendChild(productTemp);
              } else if (
                "slide_left" === _hitday.settings[0] ||
                "slide_right" === _hitday.settings[0]
              ) {
                document
                  .querySelector(".fixed_product .innerbox")
                  .appendChild(productTemp);

                var iOS =
                  !!navigator.platform &&
                  /iPad|iPhone|iPod/.test(navigator.platform);

                if ("true" == iOS) {
                  _hitday.scrollShowIos(_hitday.settings);
                } else {
                  _hitday.scrollShow(_hitday.settings);
                }
              } else {
                document
                  .querySelector("#fx-hit-day .innerbox")
                  .appendChild(productTemp);
              }
              fxSoCountDownTimer(
                _hitday.products[j][2],
                _hitday.products[j][0],
                false
              );
            }
          }
        }
      }
    }

    if (
      counterProducts == 0 &&
      document.querySelector(".fx-wrapper-modal#fx-hit-day")
    ) {
      document.querySelector(".fx-wrapper-modal#fx-hit-day").remove();
    }
  };

  _hitday.checkVersionFrontApi = function () {
    try {
      _hitday.frontAPI = frontAPI;

      if (!_hitday.frontAPI) {
        console.warn("Not found frontAPI.");

        _hitday.loadingFrontApi();
      } else {
        _hitday.init();
      }
    } catch (err) {
      console.log(err);
    }
  };

  _hitday.loadingFrontApi = function () {
    libJS = document.createElement("script");
    headHandler = document.getElementsByTagName("head")[0];

    libJS.setAttribute("type", "text/javascript");
    libJS.setAttribute("src", "//dcsaascdn.net/js/front-api-1.1.0.min.js");
    libJS.id = "frontApi";

    headHandler.addEventListener(
      "load",
      function (event) {
        if (
          event.target.nodeName == "SCRIPT" &&
          _hitday.loadStatus == 0 &&
          event.target.id == "frontApi"
        ) {
          _hitday.loadStatus++;
          _hitday.checkVersionFrontApi();
        }
      },
      true
    );

    headHandler.appendChild(libJS);
  };

  _hitday.init = function () {
    _hitday.lang = _hitday.frontAPI.getLang();
    _hitday.curr = _hitday.frontAPI.getCurrency();

    if (document.querySelector("#box_mainproducts"))
      _hitday.createFlagProductList();

    if ("" !== _hitday.settings[15]) _hitday.addStyleToBody();

    if (document.querySelector("body.shop_product")) {
      _hitday.addCounterProduct();
    }

    if (
      "list_slider" === _hitday.settings[0] &&
      document.getElementById("fx-hit-day")
    )
      document.getElementById("fx-hit-day").className += " fx-slider loading";

    if (
      ("list_slider" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day")) ||
      ("list_photo" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day")) ||
      ("list_photo_block" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day"))
    ) {
      if (document.querySelector("#fx-hit-day .innerbox") == null) {
        _hitday.createBox(products);
      }
    }

    if (
      ("yes" === _hitday.settings[3] && 768 < _hitday.width) ||
      "no" === _hitday.settings[3]
    ) {
      if (
        ("slide_left" === _hitday.settings[0] &&
          document.getElementById("fx-hit-day")) ||
        ("slide_right" === _hitday.settings[0] &&
          document.getElementById("fx-hit-day"))
      )
        _hitday.createSliderIn();
    }

    if (
      "popup" === _hitday.settings[0] &&
      document.getElementById("fx-hit-day")
    ) {
      if (
        ("yes" === _hitday.settings[3] && 768 < _hitday.width) ||
        "no" === _hitday.settings[3]
      ) {
        var value = "; " + document.cookie;
        var parts = value.split("; fx-hit-popup=");

        if (parts.length == 2) {
          var testCookies = parts.pop().split(";").shift();
        }

        if ("hide" !== testCookies) {
          _hitday.createPopup();
        }
      }
    } else if (
      ("slide_left" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day")) ||
      ("slide_right" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day"))
    ) {
      _hitday.getProductsShop(products);
    } else if (
      ("list_photo" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day")) ||
      ("list_slider" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day")) ||
      ("list_photo_block" === _hitday.settings[0] &&
        document.getElementById("fx-hit-day"))
    ) {
      _hitday.getProductsShop(products);
    }

    if (
      "popup" === _hitday.settings[0] ||
      "slide_left" === _hitday.settings[0] ||
      "slide_right" === _hitday.settings[0]
    ) {
      if (document.getElementById("fx-hit-day"))
        document.querySelector("#fx-hit-day").remove();
    }
    return true;
  };

  if (settings) {
    _hitday.settings = JSON.parse(settings);
  }

  if (products && "" !== products) {
    var temp = JSON.parse(products);

    if (typeof temp == "object") {
      var lengthTemp = Object.keys(temp).length;
    } else {
      var lengthTemp = temp.length;
    }

    if (
      (lengthTemp > 0 &&
        document.querySelector("#fx-hit-day") &&
        _hitday.settings[24] == "true") ||
      (document.querySelector("body.shop_product") &&
        _hitday.settings[24] == "true")
    ) {
      _hitday.products = [];

      for (var i in temp) {
        _hitday.products.push([
          temp[i]["id"],
          temp[i]["date_from"],
          temp[i]["date_to"],
        ]);
      }

      _hitday.loadingFrontApi();

      setTimeout(function () {
        if (document.querySelector("#fx-hit-day.fx-slider")) {
          shoper.selectorFunctions.boxslider.load(
            $("#fx-hit-day.fx-slider"),
            shoper
          );
        } else if (document.querySelector("#fx-hit-day .fx-slider")) {
          shoper.selectorFunctions.boxslider.load(
            $("#fx-hit-day .fx-slider"),
            shoper
          );
        }
      }, 2000);
    }
  } else {
    console.log(
      "Nie ma żadnych produktów w promocji lub nie ma modułu dodanego na stronę..."
    );
  }
}

document.addEventListener("click", function (ev) {
  if ("fx-close" === ev.target.id) {
    var date = new Date();

    if ("" != _hitday.settings[23]) {
      var days = _hitday.settings[23];
    } else {
      var days = 1;
    }

    date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);
    document.cookie =
      "fx-hit-popup=hide; expires=" + date.toUTCString() + "; path=/";

    document.getElementById("fx-hit-day").style.display = "none";
  }

  if ("fx-close-trigger" === ev.target.id) {
    ev.preventDefault();
    var classHit = (document.getElementById("fx-hit-day").style.display =
      "none");
  }
});
