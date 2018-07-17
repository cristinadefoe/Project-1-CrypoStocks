coin = "BTC";

function buildSettings(coin) {
  var settings = {
    "async": true,
    "crossDomain": true,
    url: `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${coin}_USD/history?period_id=1DAY&time_start=2017-01-01T00:00:00&time_end=2018-05-12T00:00:00&apikey=C4191423-C21B-48EF-811E-66BA67EDD086&limit=100000`,
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "582bb88d-1125-23da-6efe-ea041bf230e2"
    }
  };
  return settings;
}

// call to the API
function getData(settings) {
  $.ajax(settings).then(function (response) {

    var ourData = [];
    var ourLabels = [];

    // This will build the array of numbers
    function buildData(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        ourData.push(data[i].price_close);
        ourLabels.push(data[i].time_period_end);
      };
      console.log(data)
      return {
        ourData: ourData,
        ourLabels: ourLabels
      };
    }

    // newData is equal to the result of the buildData() on line 26
    // line 59 or so.... we say data = to newData
    var tmpnewData = buildData(response);
    var newData = tmpnewData.ourData;
    var newLabels = tmpnewData.ourLabels;

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: newLabels,

        datasets: [
          {
            data: newData,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: 'orange',
            borderWidth: 4,
            color: 'orange',
            fontStyle: 'bold',


            pointBackgroundColor: '#007bff'
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                fontStyle: 'bold',
                fontSize: '22',
                fontColor: '#473198'
              }
            }
          ],
          xAxes: [
            {
              display: false,
              ticks: {
                stepSize: 30,
                autoSkip: true,
                maxTicksLimit: 12,
                fontStyle: "bold"

              }
            }
          ]
        },
        legend: {
          display: false
        },
      }
    });
  });
}

getData(buildSettings(coin));

