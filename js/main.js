'use stirct';
// import addToCart from addToCart
// import sortingData from sortingData

app.elm = {
    body: document.body,
    addToCart: document.querySelector('.add_to_cart'),
    sort: document.querySelector('#sort'),
    quantity: document.querySelector('#quantity'),
    shoppingCart: document.querySelector('#shopping_cart .ajax_cart_quantity'),
    addQuantity: function(id) {
        return document.querySelector('#add_quantity_' + id)
    }
};

// adding a listener to buttons in Category
app.addToCart.delegation(app.elm.body, app.elm.addToCart);

// get data attribute value
app.sortingData.setDataFrom(app.elm.sort, 'sort');
app.sortingData.setDataFrom(app.elm.quantity, 'quantity');

//save from delete scope
Object.preventExtensions(app);
Object.seal(app);
Object.freeze(app);

var saveApp = app;
setTimeout(function observe() {
    if (!app.elm) {
        app = saveApp;
    }
    setTimeout(observe, 17);
}, 17);