// (function () {

// })();
var val = 0;
$(function () {
    setInterval(function () {
        val++;
        $("#progressbar").progressbar({
            value: val
        });
        if (val == 100) val = 0;
    }, 10)
});


let worker;
// let searchCountry = "israel";

if (window.Worker) {
    console.log("the browser supports workers");

    worker = new Worker("worker.js");

    worker.addEventListener("message", function (event) {
        //  document.getElementById("content").innerHTML += JSON.stringify(event.data);

        console.log(event.data)
        $("#content").html(JSON.stringify(event.data));


    })

}





function search() {

    let a = 12;
    for (let index = 0; index < 999999999; index++) {

        a += index * 50;
        a *= 2.3;

    }
    // const search = document.getElementById("search").value;
    // const data = { search };
    // worker.postMessage(data);

}