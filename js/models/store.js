'use strict';
app.store = (function() {
    var setItem = function(name, values) {
        return window.localStorage.setItem(name, JSON.stringify(value));
    };
    var getItem = function(name) {
        return JSON.parse(window.localStorage.getItem(name));
    };
    var remItem = function(name) {
        return window.localStorage.removeItem(name);
    };
    var setCookie = function(name, value, options) {
        options = options || {};
      
        var expires = options.expires;
      
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);
      
        var updatedCookie = name + "=" + value;
      
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    };
    var deleteCookie = function (name) {
            setCookie(name, "", {
                expires: -1
            });
    };

    return {
        setItem: setItem,
        getItem: getItem,
        remItem: remItem,
        setCookie: setCookie,
        deleteCookie: deleteCookie
    };
}());