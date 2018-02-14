(function() {
    var src = {
        'scripts': [
            {'src': 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'async': false},
            {'src': './js/controllers/cart.js', 'async': false},
            
            {'src': './js/main.js', 'async': false}
        ]
    };

    var addScript = function(src) {
        if (toString.call(src) !== "[object Array]") return fasle;

        for (var i = 0; i < src.length; i++) {
            var script = document.createElement("script"), 
                item = src[i];

            script.src = item.src;
            script.async = item.async;
            document.body.appendChild(script);
        }
        return true;
    };

    window.addEventListener('load', function() {
        addScript(src.scripts);
    });
} ());