//this line is running when wrker is created and script ended
self.addEventListener("message", function (event) {
    const countries = event.data.countries;
    const search = event.data.search;

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         // Typical action to be performed when the document is ready:
    //         console.log(xhttp.responseText);
    //     }
    // };
    // xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
    // xhttp.send();   


    for (let index = 0; index < countries.length; index++) {

        if (countries[index].cid == search) {
            self.postMessage(countries[index].pop);
        }
    }

})
//this line is running when wrker is created and script ended
//this line is running when wrker is created and script ended
//this line is running when wrker is created and script ended
//this line is running when wrker is created and script ended




