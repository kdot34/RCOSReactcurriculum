    var clicks = 0;
    function upClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    function downClick() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };