//BITSTAMP_SPOT_BTC_USD
// now must get user input and think
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

    // var price_close = response["0"].price_close;
    // var time = response["0"].time_close;
    // var data = response;

    //! this is our array...It's empty now
    var ourData = [];
    var ourLabels = [];

    //! This will build the array of numbers
    function buildData(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        ourData.push(data[i].price_close);
        ourLabels.push(data[i].time_period_end);
        // console.log(data[i].price_close);
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
    // console.log(newData);

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

// my ajax call...build settings returns object
getData(buildSettings(coin));

// var ctx = document.getElementById("myChart");
//
// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//     datasets: [{
//       data: [10000000000, 100, 18483, 24003, 23489, 24092, 12034],
//       lineTension: 0,
//       backgroundColor: 'transparent',
//       borderColor: '#007bff',
//       borderWidth: 4,
//       pointBackgroundColor: '#007bff'
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: false
//         }
//       }]
//     },
//     legend: {
//       display: false,
//     }
//   }
// });

// this is our click event...we get the input from the user and then make the ajax call to the api
// $("#coin_input").on('click',function(event) {
//   event.preventDefault();
//   var coin = $("#coin_val_text").val().toUpperCase();
//   getData(coin,settings);
// });
//
//
// function putPrice(){
// }

// coin is initialy set to empty string so we don't get a reference error
//this is the setting object that the ajax call will use in the function getData
// On the line below... using template literals: `${}`
// The value of coin:${coin} comes from a user input with the id of... #coin_val_text
// currently coin is = an empty string ""

//========================need this
// var ourData = [];
//  .price_close
//  data.forEach(function(val, index, array) {
//    ourData.push(val.price_close);
//    console.log(val.price_close);
//    return val.price_close;
//
// });

//     var ar = [1,2,3,4,5];
//
// var ourData = [];
//
//
// ar.forEach(function(curVal,index,array){
//   ourData.push(curVal);
// });
//
// console.log(ourData)

///this is out con log statment!!!!!!!!!!!@@@@@@@
// console.log(closing);
//.time_close

// var data = response.rates[3];

// console.log(response.rates[3]);
//rates is an array
//  console.log(response, " the total data structure")
//  console.log(response["0"].time_close, "the first thing in the collection of data");
// console.log(time, "this is time ");

// console.log(price_close," this is price close!!!!!", time, " this is the time!!!!!!");

//whole data ==========================
// console.log(response, "whole data");
// console.log(time, "this is time ");
// var num = price_close;

