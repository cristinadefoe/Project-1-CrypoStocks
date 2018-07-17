

$("button").on("click", function() {
    var cryptoCoin = $(this).attr("data-value");
    var queryURL = "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_USD/history?period_id=1DAY&time_start=2017-01-01T00:00:00&time_end=2018-05-12T00:00:00" + cryptoCoin + "&api_key=C4191423-C21B-48EF-811E-66BA67EDD086";
   

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(queryURL);
        var results = response.data;
     

        for (var i = 0; i < results.length; i++) {
     
        
        }
      });
  });