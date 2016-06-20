// Example of an anonymous function
(function() {
    console.log("I am anonymous")
})();

// Example of closures
(function() {
    var message = "I'm in a closure";

    $('button').on('click', function(){
        alert(message);
    });
})();
