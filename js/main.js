'use stirct';
// import addToCart from addToCart
// import sortingData from sortingData

(function() {
    var elm = {
        body: document.body,
        addToCart: document.querySelector('.add_to_cart'),
        sort: document.querySelector('#sort'),
        quantity: document.querySelector('#quantity')
    };

    // adding a listener to buttons in Category
    addToCart.delegation(elm.body, elm.addToCart);

    // get data attribute value
    sortingData.setDataFrom(elm.sort, 'sort');
    sortingData.setDataFrom(elm.quantity, 'quantity');
}());