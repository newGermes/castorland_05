'use strict';
// import store from store

app.shortCart = (function() {
    var render = function() {
        app.shopingCart.innerText = app.store.getItem('shortCartPrice');
    };

    return {
        render: render
    };
}());