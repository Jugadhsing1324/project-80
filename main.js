array = ["jugadh"];



function submit() {
    for (var j = 1; j <= 4; j++) {
        var GuestName = document.getElementById("name1" + j).value;
        console.log(GuestName);
        array.push("GuestName");
    }

    function show() {
        document.getElementById("h4").innerHTML = array;
    }
