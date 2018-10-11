//this line is running when wrker is created and script ended
self.addEventListener("message", function (event) {
    console.log("worker start");
    const search = event.data.search;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            let countries = JSON.parse(xhttp.responseText);
            let result = [];

            for (let index = 0; index < countries.length; index++) {
                if (countries[index].name.includes(search)) {
                    result.push(countries[index]);
                }
            }
            console.log("worker end");
            self.postMessage(result);

        }
    };
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
    xhttp.send();




})
//this line is running when wrker is created and script ended
//this line is running when wrker is created and script ended
//this line is running when wrker is created and script ended
//this line is running when wrker is created and script ended




