// Initialize Firebase
var config = {
    apiKey: "AIzaSyDq0vYu4vIIAb8vIE-lxTJigPSKisSP70o",
    authDomain: "crypto-stocks.firebaseapp.com",
    databaseURL: "https://crypto-stocks.firebaseio.com",
    projectId: "crypto-stocks",
    storageBucket: "crypto-stocks.appspot.com",
    messagingSenderId: "219215471488"
};
firebase.initializeApp(config);

// Create an instance of Firebase database
var cryptoData = firebase.database();

// Create variables to reference the database
var coinName = "";
var coinSymbol = "";
var priceUSD;
var marketCap;
var totalVolume;

// Add submit button
$("#crypto-btn").on("click", function (event) {

    // Don't refresh the page
    event.preventDefault();

    coinName = $("#coin-input").val().trim();
    coinSymbol = $("#symbol-input").val().trim();
    priceUSD = $("#price-input").val().trim();
    marketCap = $("#marketCap-input").val().trim();
    totalVolume = $("#totalVol-input").val().trim();

    // Grab data and push to Firebase database
    // "ref" referencing Firebase database
    // "push" data to Firebase database
    cryptoData.ref().push({
        coinName: coinName,
        coinSymbol: coinSymbol,
        priceUSD: priceUSD,
        marketCap: marketCap,
        totalVolume: totalVolume
    })

    // Clear data fields
    $("#coin-input").val("");

    $("#symbol-input").val("");

    $("#price-input").val("");

    $("#marketCap-input").val("");

    $("#totalVol-input").val("");

})

// When "childSnapshot" is called this will populate table
cryptoData.ref().on("child_added", function (childSnapshot) {

    $("#cryptoTable").append(
        "<tr><td>" + childSnapshot.val().coinName + "</td><td>" + childSnapshot.val().coinSymbol
        + "</td><td>" + childSnapshot.val().priceUSD + "</td><td>" + childSnapshot.val().marketCap +
        "</td><td>" + childSnapshot.val().totalVolume + "</td></tr>"
    )
})


