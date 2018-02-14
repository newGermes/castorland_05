'use strict';
var Item = (function() {
    var render = function(data) {
        return '<h1>' + data.h1 + '</h1>';
    };

    return {
        render: render
    };
}());