$(document).ready(function () {

    start();

    function start() {
        $("#rules").show();
        $("#startButton").show();
        $("#number").hide();

        var time = 50;
        $("#questions").hide();
        $("#results").hide();
        $("#restart").hide();
        $("#submit").hide();




        $("#startButton").click(function () {
            alert("You Ready to Start?");
            begin();

        })
        function begin() {
            counter = setInterval(timer, 1000);
            $("#number").show();
            $("#submit").show();
            $("#startButton").hide();
            $("#rules").hide();
            $("#questions").show();
        }
        function timer() {
            time--;
            $("#number").html("<h1>" + time + "</h1>");
            if (time === 0) {
                alert("Times Up!");
                stop();
            }
        }
        $("#submit").click(function stop() {
            clearTimeout(counter);
            $("#results").show();
            $("#restart").show();
        })
        $("#restart").click(function () {
            start();
        })
    }
})