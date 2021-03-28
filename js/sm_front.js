var smFront;
'use strict';

var bhrBasket = {
    cart: {},
    email: '',
    contactId: '',
    cookieExpiryTime: 43200,
    cartCreationTime: ''
};

smFront = (function () {
    var self = this,
      salesmanagoAppUrl = 'https://shoper.salesmanago.com/api.php/front/v1/';

    self.transformRequest = function (obj) {
        var str = [];
        Object.keys(obj).forEach(function (p) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        });
        return str.join("&");
    };

    self.setShoperCookie = function (cname, cvalue, exdays, cdomain) {
        var d = new Date(), expires = '';
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=" + cdomain + ";path=/";
    };

    self.getCookie = function (name) {
        var m = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return m ? m[1] : false;
    };

    self.addContactId = function (data) {
        if (data.success) {
            self.setShoperCookie('smclient', data.contactId, 30, document.location.host);
            bhrBasket.contactId = data.contactId;
            self.saveBasket();
        }
    };

    // self.addEventId = function (data) {
    //   if (bhrBasket.cart.eventId !== data.eventId && data.success) {
    //     bhrBasket.cart.eventId = data.eventId;
    //     self.saveBasket();
    //   }
    // };

    self.checkCartCookieExpiryTime = function () {
        if (bhrBasket.cart.eventId && bhrBasket.cartCreationTime) {
            var d = new Date();
            var timePassed = d.getTime() - bhrBasket.cartCreationTime;

            if (timePassed > bhrBasket.cookieExpiryTime) {
                bhrBasket.cart.eventId = '';
                bhrBasket.cartCreationTime = '';
            }
        }
    };

    self.addEventId = function (data) {
        if (bhrBasket.cart.eventId !== data.eventId && data.success) {
            if (!bhrBasket.cart.eventId) {
                var d = new Date();
                bhrBasket.cartCreationTime = d.getTime();
            }
            bhrBasket.cookieExpiryTime = data.cartExpire * 3600;
            bhrBasket.cart.eventId = data.eventId;
            self.saveBasket();
        }
    };

    self.clearBasket = function () {
        bhrBasket.cart = {};
        self.saveBasket();
    };

    self.checkAuthUser = function () {
        if (bhrBasket.contactId && bhrBasket.contactId !== "") {
            return true;
        } else if (self.getCookie('smclient')) {
            bhrBasket.contactId = self.getCookie('smclient');
            self.saveBasket();
            return true;
        }
        return false;
    };

    self.authUserFromBasket = function (email) {
        try {
            if (email && (email !== bhrBasket.email)) {
                bhrBasket.email = email;
                // self.saveBasket();

                var data = {
                    email: email,
                    clientId: window._smid,
                    shop: _smshop
                };
                self.request(data, 'contact', self.addContactId)
            }
        } catch (error) {
        }
    };

    self.request = function (data, url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", salesmanagoAppUrl + url, false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                callback(response);
            }
        };
        xhr.send(self.transformRequest(data));
    };

    self.saveBasket = function () {
        localStorage.setItem('bhrBasket', JSON.stringify(bhrBasket));
    };

    self.fetchBasket = function () {
        var basket = localStorage.getItem('bhrBasket');
        if (basket) {
            bhrBasket = JSON.parse(basket);
        }
    };

    self.addCartEvent = function () {
        var data = {
            type: 'CART',
            products: bhrBasket.cart.products,
            value: bhrBasket.cart.value,
            detail1: bhrBasket.cart.name,
            detail2: bhrBasket.cart.quantity,
            detail3: bhrBasket.cart.variant,
            clientId: window._smid,
            shop: _smshop
        };

        if (bhrBasket.email) {
            data.email = bhrBasket.email;
        } else {
            data.contactId = bhrBasket.contactId;
        }

        if (bhrBasket.cart.eventId) {
            data.eventId = bhrBasket.cart.eventId;
        }

        self.request(data, 'basket', self.addEventId)
    };

    self.updateBasket = function () {
        self.checkCartCookieExpiryTime();
        self.fetchBasket();
        try {
            frontAPI.getBasketInfo(function (basketInfo) {
                var products = [],
                    name = [],
                    quantity = [],
                    variant = [];
                if (bhrBasket.cart.value !== basketInfo.basket.sum_no_shipping_float) {
                    if (basketInfo.basket.sum_no_shipping_float == 0) {
                        self.clearBasket();
                    } else {
                        for (var i = 0; i < basketInfo.products.length; i++) {
                            name.push(basketInfo.products[i].name);
                            products.push(basketInfo.products[i].product_id);
                            quantity.push(basketInfo.products[i].quantity);
                            variant.push(basketInfo.products[i].variant);
                        }
                        bhrBasket.cart.products = products.join(',');
                        bhrBasket.cart.name = name.join(',');
                        bhrBasket.cart.quantity = quantity.join(',');
                        bhrBasket.cart.variant = variant.join(',');
                        bhrBasket.cart.value = basketInfo.basket.sum_no_shipping_float;
                        self.saveBasket();
                        if (self.checkAuthUser()) {
                            self.addCartEvent();
                        }
                    }
                }
            });
        } catch (error) {
            console.log('bhr error updateBasket');
            console.log(error);
        }
    };

    function getUserContactId(email) {
        var data = {
            email: email,
            clientId: window._smid,
            shop: _smshop
        };

        bhrBasket.email = email;
        self.saveBasket();

        self.request(data, 'contact', self.addContactId)
    }

    function afterFrontApiReady() {
        frontAPI.getBasketInfo(function (response) {
            if (response.user_info.mail) {
                self.authUserFromBasket(response.user_info.mail);
                self.updateBasket();
            } else {
                self.updateBasket();
            }
        });
    }

    return {
        afterFrontApiReady: afterFrontApiReady,
        getUserContactId: getUserContactId
    };
})();

document.addEventListener("DOMContentLoaded", function () {

    var doInterval = true;
    var intervalId = setInterval(
        function () {
            if (window.frontAPI && doInterval) {
                var cartLocation = document.location.pathname;
                if (cartLocation.includes('basket')
                    && !cartLocation.includes('step2')
                    && !cartLocation.includes('step3')
                    && !cartLocation.includes('reg')
                    && !cartLocation.includes('noreg')) {
                    smFront.afterFrontApiReady();
                }

                doInterval = false;
                clearInterval(intervalId);
            }
        },
        1000);

    var newsletterButton,
        registerButton,
        loginButton,
        orderButton;

    newsletterButton = document.querySelector('div[id=box_newsletter] button[type=submit]');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function (ev) {
            var emailField,
                email;

            emailField = document.querySelector('div[id=box_newsletter] input[name=email]');
            email = emailField.value;

            if (email) {
                smFront.getUserContactId(email);
            }
        });
    }

    registerButton = document.querySelector('div[id=box_register] button.register');
    if (registerButton) {
        registerButton.addEventListener('click', function (ev) {
            var emailField,
                email;

            emailField = document.querySelector('div[id=box_register] input[name=mail]');
            email = emailField.value;
            if (email) {
                smFront.getUserContactId(email);
            }
        });
    }

    loginButton = document.querySelector('div[id=box_login] button.login');
    if (loginButton) {
        loginButton.addEventListener('click', function (ev) {
            var emailField,
                email;

            emailField = document.querySelector('div[id=box_login] input[name=mail]');
            email = emailField.value;

            if (email) {
                smFront.getUserContactId(email);
            }
        });
    }

    orderButton = document.querySelector('div[id=box_basketaddress] button.summary');
    if (orderButton) {
        orderButton.addEventListener('click', function (ev) {
            var emailField,
                email;

            emailField = document.querySelector('div[id=box_basketaddress] input[name=mail]');
            email = emailField.value;

            if (email) {
                smFront.getUserContactId(email);
            }
        });
    }
});
