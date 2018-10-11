// (function () {

// })();


let worker;
// let searchCountry = "israel";
let countries = [{ cid: "israel", pop: 6 }, { cid: "usa", pop: 300 }, { cid: "france", pop: 30 }]


if (window.Worker) {
    console.log("the browser supports workers");

    worker = new Worker("worker.js");

    worker.addEventListener("message", function (event) {
        console.log(event.data)
    })

}





function search() {

    const search = document.getElementById("search").value;
    const data = { search, countries };
    worker.postMessage(data);
    data.search = "israel";
    worker.postMessage(data);
    data.search = "france";
    worker.postMessage(data);

}