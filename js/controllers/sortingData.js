'use stirct';
// import store from store

var sortingData = (function() {
    var setDataFrom = function(element, name) {
        if (element) {
            element.addEventListener('change', function() {
                var value = this.options[this.selectedIndex].value;
                store.setCookie(name, value);
            });
        }
    };

    return {
        setDataFrom: setDataFrom
    };
} ());