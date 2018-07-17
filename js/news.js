var newsTable = document.getElementById('latest_news');

var settings = {
    async: true,
    crossDomain: true,
    // url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=c36e98a313a343dc90bf3bd0a9f30af1`,
    url: `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=c36e98a313a343dc90bf3bd0a9f30af1`,
    method: "GET"
}

function getNews(response) {
}

function getData() {

    $.ajax(settings).then(function (response) {


        for (var i = 0; i < response.articles.length; i++) {

            $("#news").append(
                "<p> Heading :" +
                response.articles[i].title +
                " <a href='" + response.articles[i].url + "'>" + response.articles[i].url + "</a>" + "<br>" +

                "<span> Description :" + response.articles[i].description + "</span>"
                + "<hr>" +

                "</p>"
            );
        }

        console.log(response);
        console.log(response.articles[0].title);
        getNews(response);

    });

}

getData();
