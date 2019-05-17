const axios = require("axios");

var moment = require("moment");

var getMeMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr Nobody";
    }

    var movieURL =
        "http://www.omdbapi.com/?s=" + movieName + "&plot=full&apikey=31bd1ea4";

    axios.get(movieURL).then(
        function (response) {
            var jsonData = response.data.Search;

            jsonData.forEach(element => {
                console.log("-------------")
                console.log(`${element.Title}`)
                console.log(`${element.Year}`)
            });
        }
    );
};

module.exports = {
    getMeMovie: getMeMovie
}