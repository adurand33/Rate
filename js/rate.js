// tables

const listOfCountries = [];
const listOfCurrencies = [];
const listOfRates = [];

let lastIndex = -1;

// controls

let myInit = document.getElementById("myinit");
let myExchange = document.getElementById("myexchange");
let myReset = document.getElementById("myreset");
let myOnline = document.getElementById("myonline");
let myCountries = document.getElementById("mycountries");
let myCurrencies = document.getElementById("mycurrencies");
let myTurnover = document.getElementById("myturnover");

myInit.style.color = "green";

// create countries

function createCountries() {

  if (listOfCountries.length) return;

  let obj = null;

  obj = {world: "AU", /* AUD , 01 */ name: "Australia", nameFr: "Australie"}; listOfCountries.push(obj); // code = 36
  obj = {world: "AT", /* EUR , 06 */ name: "Austria", nameFr: "Autriche"}; listOfCountries.push(obj); // code = 40
  obj = {world: "BE", /* EUR , 06 */ name: "Belgium", nameFr: "Belgique"}; listOfCountries.push(obj); // code = 56
  obj = {world: "BR", /* BRL , 02 */ name: "Brasil", nameFr: "Brésil"}; listOfCountries.push(obj); // code = 76
  obj = {world: "CA", /* CAD , 03 */ name: "Canada", nameFr: "Canada"}; listOfCountries.push(obj); // code = 124
  obj = {world: "CN", /* CNY , 04 */ name: "China", nameFr: "Chine"}; listOfCountries.push(obj); // code = 156
  obj = {world: "DK", /* DKK , 05 */ name: "Denmark", nameFr: "Danemark"}; listOfCountries.push(obj); // code = 208
  obj = {world: "EE", /* EUR , 06 */ name: "Estonia", nameFr: "Estonie"}; listOfCountries.push(obj); // code = 233
  obj = {world: "FI", /* EUR , 06 */ name: "Finland", nameFr: "Finlande"}; listOfCountries.push(obj); // code = 246
  obj = {world: "FR", /* EUR , 06 */ name: "France", nameFr: "France"}; listOfCountries.push(obj); // code = 250
  obj = {world: "DE", /* EUR , 06 */ name: "Germany", nameFr: "Allemagne"}; listOfCountries.push(obj); // code = 276
  obj = {world: "GR", /* EUR , 06 */ name: "Greece", nameFr: "Grèce"}; listOfCountries.push(obj); // code = 300
  obj = {world: "HK", /* HKD , 08 */ name: "Hong Kong", nameFr: "Hong Kong"}; listOfCountries.push(obj); // code = 344
  obj = {world: "IN", /* INR , 09 */ name: "India", nameFr: "Inde"}; listOfCountries.push(obj); // code = 356
  obj = {world: "IE", /* EUR , 06 */ name: "Ireland", nameFr: "Irelande"}; listOfCountries.push(obj); // code = 372
  obj = {world: "IT", /* EUR , 06 */ name: "Italy", nameFr: "Italie"}; listOfCountries.push(obj); // code = 380
  obj = {world: "KR", /* KRW , 10 */ name: "Korea", nameFr: "Corée"}; listOfCountries.push(obj); // code = 410
  obj = {world: "LT", /* EUR , 06 */ name: "Lithuania", nameFr: "Lituanie"}; listOfCountries.push(obj); // code = 440
  obj = {world: "MX", /* MXN , 11 */ name: "Mexico", nameFr: "Mexique"}; listOfCountries.push(obj); // code = 484
  obj = {world: "NO", /* NOK , 12 */ name: "Norway", nameFr: "Norvège"}; listOfCountries.push(obj); // code = 578
  obj = {world: "PL", /* PLN , 13 */ name: "Poland", nameFr: "Pologne"}; listOfCountries.push(obj); // code = 616
  obj = {world: "PT", /* EUR , 06 */ name: "Portugal", nameFr: "Portugal"}; listOfCountries.push(obj); // code = 620
  obj = {world: "RO", /* RON , 14 */ name: "Romania", nameFr: "Roumanie"}; listOfCountries.push(obj); // code = 642
  obj = {world: "RU", /* RUB , 15 */ name: "Russia", nameFr: "Russie"}; listOfCountries.push(obj); // code = 643
  obj = {world: "ZA", /* ZAR , 21 */ name: "South Africa", nameFr: "Afrique du Sud"}; listOfCountries.push(obj); // code = 710
  obj = {world: "ES", /* EUR , 06 */ name: "Spain", nameFr: "Espagne"}; listOfCountries.push(obj); // code = 624
  obj = {world: "SE", /* SEK , 16 */ name: "Sweden", nameFr: "Suède"}; listOfCountries.push(obj); // code = 752
  obj = {world: "TW", /* TWD , 19 */ name: "Taiwan", nameFr: "Taiwan"}; listOfCountries.push(obj); // code = 158
  obj = {world: "TN", /* TND , 17 */ name: "Tunisia", nameFr: "Tunisie"}; listOfCountries.push(obj); // code = 788
  obj = {world: "TR", /* TRY , 18 */ name: "Turkey", nameFr: "Turquie"}; listOfCountries.push(obj); // code = 792
  obj = {world: "GB", /* GBP , 07 */ name: "United Kingdom", nameFr: "Royaume-Uni"}; listOfCountries.push(obj); // code = 826
  obj = {world: "US", /* USD , 20 */ name: "United States", nameFr: "États-Unis"}; listOfCountries.push(obj); // code = 840

  // fill countries

  for (let i = 0; i < listOfCountries.length; i++) {

    let country = listOfCountries[i];
    let name = country["name"];
    let option = document.createElement("OPTION");

    option.innerHTML = name;
    option.value = i;

    myCountries.options.add(option);
  }
}

// create currencies

function createCurrencies() {

  if (listOfCurrencies.length) return;

  let obj = null;

  obj = {world: "AU", iso: "AUD"}; listOfCurrencies.push(obj); // australia
  obj = {world: "BR", iso: "BRL"}; listOfCurrencies.push(obj); // brasil
  obj = {world: "CA", iso: "CAD"}; listOfCurrencies.push(obj); // canada
  obj = {world: "CN", iso: "CNY"}; listOfCurrencies.push(obj); // china
  obj = {world: "DK", iso: "DKK"}; listOfCurrencies.push(obj); // denmark
  obj = {world: "EU", iso: "EUR"}; listOfCurrencies.push(obj); // europe
  obj = {world: "GB", iso: "GBP"}; listOfCurrencies.push(obj); // united kingdom
  obj = {world: "HK", iso: "HKD"}; listOfCurrencies.push(obj); // hong kong
  obj = {world: "IN", iso: "INR"}; listOfCurrencies.push(obj); // india
  obj = {world: "KR", iso: "KRW"}; listOfCurrencies.push(obj); // korea
  obj = {world: "MX", iso: "MXN"}; listOfCurrencies.push(obj); // mexico
  obj = {world: "NO", iso: "NOK"}; listOfCurrencies.push(obj); // norway
  obj = {world: "PL", iso: "PLN"}; listOfCurrencies.push(obj); // poland
  obj = {world: "RO", iso: "RON"}; listOfCurrencies.push(obj); // romania
  obj = {world: "RU", iso: "RUB"}; listOfCurrencies.push(obj); // russia
  obj = {world: "SE", iso: "SEK"}; listOfCurrencies.push(obj); // sweden
  obj = {world: "TN", iso: "TND"}; listOfCurrencies.push(obj); // tunisia
  obj = {world: "TR", iso: "TRY"}; listOfCurrencies.push(obj); // turkey
  obj = {world: "TW", iso: "TWD"}; listOfCurrencies.push(obj); // taiwan
  obj = {world: "US", iso: "USD"}; listOfCurrencies.push(obj); // united states
  obj = {world: "ZA", iso: "ZAR"}; listOfCurrencies.push(obj); // south afrika

  // fill currencies

  for (let i = 0; i < listOfCurrencies.length; i++) {

    let currency = listOfCurrencies[i];
    let iso = currency["iso"];
    let option = document.createElement("OPTION");

    option.innerHTML = iso;
    option.value = i;

    myCurrencies.options.add(option);
  }
}

// update rates

function updateRates() {

  if (listOfRates.length) return;

  let obj = null;

  obj = {iso: "AUD", ratio: 0.64247838000}; listOfRates.push(obj); // australia : AUD
  obj = {iso: "BRL", ratio: 0.15396000000}; listOfRates.push(obj); // brazil : BRL
  obj = {iso: "CAD", ratio: 0.69523196000}; listOfRates.push(obj); // canada : CAD
  obj = {iso: "CNY", ratio: 0.13468294000}; listOfRates.push(obj); // china : CNY
  obj = {iso: "DKK", ratio: 0.13438843000}; listOfRates.push(obj); // denmark : DKK
  obj = {iso: "EUR", ratio: 1.00000000000}; listOfRates.push(obj); // europe : EUR
  obj = {iso: "GBP", ratio: 1.18552710000}; listOfRates.push(obj); // uk : GBP
  obj = {iso: "HKD", ratio: 0.11055882000}; listOfRates.push(obj); // hong kong : HKD
  obj = {iso: "INR", ratio: 0.01144403400}; listOfRates.push(obj); // india : INR
  obj = {iso: "KRW", ratio: 0.00073113584}; listOfRates.push(obj); // korea : KRW
  obj = {iso: "MXN", ratio: 0.04247241500}; listOfRates.push(obj); // mexico : MXN
  obj = {iso: "NOK", ratio: 0.10272410000}; listOfRates.push(obj); // norway : NOK
  obj = {iso: "PLN", ratio: 0.21825445000}; listOfRates.push(obj); // poland : PLN
  obj = {iso: "RON", ratio: 0.20207414000}; listOfRates.push(obj); // romania : RON
  obj = {iso: "RUB", ratio: 0.01212469600}; listOfRates.push(obj); // russia : RUB
  obj = {iso: "SEK", ratio: 0.09969539000}; listOfRates.push(obj); // sweden : SEK
  obj = {iso: "TND", ratio: 0.30491729000}; listOfRates.push(obj); // tunisia : TND
  obj = {iso: "TRY", ratio: 0.09241074200}; listOfRates.push(obj); // turkey : TRY
  obj = {iso: "TWD", ratio: 0.03084599100}; listOfRates.push(obj); // taiwan : TWD
  obj = {iso: "USD", ratio: 0.85960255000}; listOfRates.push(obj); // usa : USD
  obj = {iso: "ZAR", ratio: 0.05918486000}; listOfRates.push(obj); // south africa : ZAR

  // fetch rates

  fetchRates(listOfRates);
}

// init click

myInit.addEventListener("click", function() {

  // compute

  createCountries();
  createCurrencies();
  updateRates();

  // controls

  myInit.style.color = "red";
  myInit.disabled = true;

  myExchange.disabled = true;

  myCurrencies.style.color = "#ababab";
  myCurrencies.disabled = true;

  myCountries.disabled = false;
  myTurnover.disabled = false;
}
)

// exchange click

myExchange.addEventListener("click", function() {

  myExchange.style.color = "green";
  myExchange.disabled = true;

  myCurrencies.style.color = "green";
  myCurrencies.disabled = false;

  lastIndex = myCurrencies.value;
}
)

// reset click

myReset.addEventListener("click", function() {

  myCountries.selectedIndex = 0;
  myCurrencies.selectedIndex = 0;

  myExchange.style.color = "#ababab";
  myExchange.disabled = true;

  myCurrencies.style.color = "#ababab";
  myCurrencies.disabled = true;

  myTurnover.value = "";

  lastIndex = 0;
}
)

// country change

myCountries.addEventListener("change", function() {

  let count = listOfCurrencies.length;
  let index = myCountries.value;
  let country = listOfCountries.at(index);

  let i = 0;

  index = -1; // EU

  for (i = 0; i < count; i++) {

    let currency = listOfCurrencies[i];

    var world = currency["world"];
    let tempworld = country["world"];

    if (world == "EU") index = i;

    if (world == tempworld) {

      myCurrencies.selectedIndex = i;
      break;
    }
  }

  if (i >= count && index >= 0) myCurrencies.selectedIndex = index;
}
)

// turnover change

myTurnover.addEventListener("change", function() {

  let text = myTurnover.value;

  if (text === "") return;

  let turnover = Number.parseInt(text);

  if (Number.isNaN(turnover)) return;

  myExchange.style.color = "black";
  myExchange.disabled = false;

  text = numberize(turnover);

  myTurnover.value = text;
}
)

// currency change

myCurrencies.addEventListener("change", function() {

  let index = myCurrencies.value;
  let ratio = 1.0;

  // value

  let text = myTurnover.value;

  text = unspacize(text);

  if (text == "") return;

  let turnover = Number.parseInt(text);

  // from last to EU

  currency = listOfCurrencies.at(lastIndex);

  ratio = getRatio(currency);

  turnover *= ratio;

  // from EU to next

  currency = listOfCurrencies.at(index);

  ratio = getRatio(currency);

  turnover /= ratio;

  // round

  turnover = Math.round(turnover);

  text = numberize(turnover);

  myTurnover.value = text;

  // store

  lastIndex = index;

  myExchange.style.color = "black";
  myExchange.disabled = false;

  myCurrencies.style.color = "#ababab";
  myCurrencies.disabled = true;
}
)

// fetch rates

const fetchRates = async (listOfRates) => {

  let count = listOfRates.length;
  let isos = "";

  for (let i = 0; i < count; i++) {

    let rate = listOfRates[i];
    let iso = rate["iso"];

    isos += iso + (i < count - 1 ? "," : "");
  }

  // 250 free api callS a month on fixer.io
  // 250 free api calls a month on exchangeratesapi.io

  let url = `http://api.exchangeratesapi.io/latest?access_key=fa8d434d93d06d101919250e40a3ea1d&symbols=${isos}`;

  let res = await fetch(url);
  let data = await res.json();
  let online = "OFF";

  if (data.success) {

    let timestamp = data.timestamp;

    date = new Date(timestamp * 1000);

    for (let i = 0; i < count; i++) {

      let rate = listOfRates[i];
      let iso = rate["iso"];

      ratio = 1. / data.rates[iso];
      rate["ratio"] = ratio;
    }

    online = date.toLocaleString();
  }

  myOnline.textContent = "Online rate: " + online;
};

// get ratio

function getRatio(currency) {

  let count = listOfRates.length;
  let ratio = 1.0;

  for (let i = 0; i < count; i++) {

    let rate = listOfRates[i];

    let iso = rate["iso"];
    let tempiso = currency["iso"];

    if (iso == tempiso) {

      ratio = rate["ratio"];
      break;
    }
  }

  return ratio;
}

// interspace number

function numberize(val) {

    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// unspace number

function unspacize(val) {

    return val.replace(/\s/g, "");
}
