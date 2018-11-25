    var clicks = true;
    function upClick() {
        click.setState(prevState => ({check: !prevState.check}));
        document.getElementById("clicks").innerHTML = clicks;
    };