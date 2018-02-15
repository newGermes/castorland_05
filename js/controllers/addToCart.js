'use strict';
app.addToCart = (function() {
    var _getPice = function(element) {
        console.log(element.close)
    };
    var _parser = function(element) {
        var name = element.dataset.name;
        var id = element.dataset.id;
        var quantity = 0;   
        var url = '';
        var price = 0;

        return {
            id: id,
            url: url,
            name: name,
            quantity: quantity,
            price: price
        }
    };
    var delegation = function(parent, child) {
        if (parent && child) {
            var reg = new RegExp(child.className, 'i');
            parent.onclick = function(e) {
                e.preventDefault();
                var elm = e.target;

                if (!reg.test(elm.className)) return;

                console.log(_parser(elm));
            };
        }
    };
    
    return {
        delegation: delegation
    };
}());