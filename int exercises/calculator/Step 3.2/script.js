    var x = 0;
    var y = 0;
    var z = 0;
    function upClickX() {
        x += 1;
        document.getElementById("x").innerHTML = x;
    };
    function downClickX() {
        x -= 1;
        document.getElementById("x").innerHTML = x;
    };
    function upClickY() {
        y += 1;
        document.getElementById("y").innerHTML = y;
    };
    function downClickY() {
        y -= 1;
        document.getElementById("y").innerHTML = y;
    };
    function sub(){
    	z = x - y;
    	document.getElementById("z").innerHTML = z;
    };