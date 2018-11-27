    var clicks = true;
    function click() {
        clicks.setState(prevState => ({check: !prevState.check}));
        document.getElementById("clicks").innerHTML = clicks;
    };