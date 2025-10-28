// const { createElement } = require("react");

const apiKeyInput = document.getElementById("api-key");
const enterKey = document.getElementById("enter-key");

// const lookupForm = document.getElementById("stock-lookup");
const lookupInput = document.getElementById("lookup-input");
const lookupQuickSection = document.getElementById("quick-lookup-section");
const showStock = document.getElementById("show-stock");
const lookupWarning = document.getElementById("lookup-warning");

const portfolioCards = document.getElementById("portfolio-cards");

async function callAPI(event) {
  // const apiKeyInput = document.getElementById("api-key");
  // if (apiKeyInput) {
  // apiKeyInput.classList.remove("border-danger-subtle");
  // }
  lookupInput.classList.remove("border-danger-subtle");
  lookupWarning.textContent = "";
  if (event) {
    event.preventDefault();
  }
  const access_key = JSON.parse(localStorage.getItem('API'));
  const symbol = lookupInput.value;
  const today = getToday();

  if (!access_key && !symbol.length) {
    apiKeyInput.classList.add("border-danger-subtle");
    lookupInput.classList.add("border-danger-subtle");
    lookupWarning.textContent = "Check stock symbol and API key";
  } else if (!access_key) {
    apiKeyInput.classList.add("border-danger-subtle");
    lookupWarning.textContent = "Check API key";
  } else if (!symbol.length) {
    lookupInput.classList.add("border-danger-subtle");
    lookupWarning.textContent = "Check stock symbol";
  } else if (
    !Object.keys(localStorage).includes(symbol) ||
    JSON.parse(localStorage.getItem(symbol)).date !== today
  ) {
    const url = `https://api.marketstack.com/v2/eod?access_key=${access_key}&symbols=${symbol}&date_from=${today}`;
    try {
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        const stockObject = result.data[0];
        console.log(stockObject);
        const change = (stockObject.close - stockObject.open).toFixed(2);
        const percent = (change / stockObject.open).toFixed(2);

        localStorage.setItem(
          symbol,
          JSON.stringify({
            open: stockObject.open.toFixed(2),
            high: stockObject.high.toFixed(2),
            low: stockObject.low.toFixed(2),
            close: stockObject.close.toFixed(2),
            name: stockObject.name,
            volume: stockObject.volume,
            date: today,
            change: change,
            percent: percent,
          })
        );
      }

      throw new Error(`Response status: ${response.status}`);
    } catch (error) {
      console.error(error.message);

      enterKey.innerHTML = `
          <input class="col-6 mb-2 border-danger-subtle" type="text" id="api-key" placeholder="Enter API key" />
          <button id='api-submit' class="col-4 col-md-3 mb-2" onclick="keySubmit(event)">Submit</button>
        `;
      document.getElementById("api-key").value = access_key;
      lookupInput.classList.add("border-danger-subtle");
      lookupWarning.textContent = "Check stock symbol, API key, or internet connection";
      showStock.innerHTML = "";
      }
  } else {
    console.log(`already have ${symbol} for today`);
  }
  if (localStorage.getItem(symbol)) {
    displayStock(symbol);
  } 
}

function displayStock(symbol) {
  showStock.classList.add("outer-section");

  const data = JSON.parse(localStorage.getItem(symbol));
  let old = false;
  if (data.date != getToday()) {
    const access_key = JSON.parse(localStorage.getItem("API"));
    enterKey.innerHTML = `
      <input class="col-6 mb-2 border-danger-subtle" type="text" id="api-key" placeholder="Enter API key" />
      <button id='api-submit' class="col-4 col-md-3 mb-2" onclick="keySubmit(event)">Submit</button>
    `;
    document.getElementById("api-key").value = access_key;
    lookupInput.classList.add("border-danger-subtle");
    lookupWarning.textContent =
      "Check API key or internet connection; showing saved data";
    old = true;
  }

  let userData;
  if (Object.keys(localStorage).includes(`${symbol}-user`)) {
    userData = JSON.parse(localStorage.getItem(`${symbol}-user`));
  }

  let inner = `
    <div id="stock-banner" class="row justify-content-center justify-content-sm-between align-items-center">
        <div class="col-auto">
            <div class="row justify-content-center justify-content-sm-start">
                <h2 class="col-auto mt-2">${data.name}</h2>
                <div id='stock-symbol' class="dis-val col-auto mb-2 mt-lg-2">${symbol}</div>
            </div>
            <div class="row justify-content-center justify-content-sm-start">
                <h3 class='${old ? "text-danger-emphasis" : ""} col-auto'>
                  ${data.date}
                </h3>
            </div>
        </div>
        <div class="col-12 col-sm-auto">
            <button><i class="fa-solid fa-thumbtack"></i>Add to Watchlist</button>
        </div>
    </div>
    <div id="stock-info" class="row align-items-center justify-content-around">
        
        <div class="col-auto mb-3">
          <h1>Close</h1>
          <h4 id='close'>$${data.close}</h4>
          <span id="change" class="${
            data.change < 0 ? "text-danger-emphasis" : "text-success-emphasis"
          }">$${data.change}(${data.percent}%)</span>
        </div>
        
        <div class="col-auto col-md-8 col-lg-6">
            <div class="row justify-content-between">
  `;

  const info = ["open", "high", "low", "volume"];
  info.forEach((item) => {
    inner += `
              <div class="col-6">
                  <div class="row justify-content-sm-between stock-data m-1 p-1">
                      <strong class="col-12 col-sm-auto">${capitalizeFirstLetter(
                        item
                      )}:</strong>
                      <span class="col-12 col-sm-auto p-0">${
                        item == "volume" ? data[item] : "$" + data[item]
                      }</span>
                  </div>
              </div>
    `;
  });
  userData
    ? (userData.value = (userData.holdings * data.close).toFixed(2))
    : "";
  inner += `
            </div>
        </div>
    </div>
    <div id="portfolio-management" class="row justify-content-center justify-content-sm-start">
        <h3 class="col-auto">Portfolio Management</h3>

        <div class="row justify-content-around">

            <div class="col-11 col-sm-5 dis-val">
                <strong class="col-12 col-md-auto">Current Holdings:</strong>
                <div id='adjust-holdings' class="row justify-content-around">
                    <span id="less" class="adjust col-2 col-lg-2 ms-3">-</span>
                    <span id='holdings-display' class="col-3 col-lg-3 dis-val-inner">${
                      userData ? userData.holdings : 0
                    }</span>
                    <span id="more" class="adjust col-2 col-lg-2 me-3">+</span>
                </div>
            </div>

            <div class="col-11 col-sm-5">
                <div class="row justify-content-center dis-val">
                    <strong class="col-12">Position Value:</strong>
                    <span id='holdings-value' class="col-auto dis-val-inner">$${
                      userData ? userData.value : "0.00"
                    }</span>
                </div>
            </div>
            
          </div>

      </div>
  `;

  showStock.innerHTML = inner;
  document
    .getElementById("adjust-holdings")
    .addEventListener("click", adjustHoldings);
}

function adjustHoldings(event) {
  const holdingsDisplay = document.getElementById("holdings-display");
  const content = event.target.textContent;
  // console.log(Number.isNaN(parseFloat(content)))
  const symbol = document.getElementById("stock-symbol").textContent;
  const stock = JSON.parse(localStorage.getItem(symbol));
  let userData = {};
  if (Object.keys(localStorage).includes(`${symbol}-user`)) {
    userData = JSON.parse(localStorage.getItem(`${symbol}-user`));
  }
  if (!userData.holdings) {
    userData.holdings = 0;
  }
  if (!userData.value) {
    userData.value = 0;
  }

  if (content == "+") {
    userData.holdings += 1;
  } else if (content == "-") {
    userData.holdings == 0 ? (userData.holdings = 0) : (userData.holdings -= 1);
  } 
  // else if (!Number.isNaN(parseFloat(content))) {
  //   // console.log('inside')
  //   const updateHoldings = document.createElement('input');
  //   updateHoldings.setAttribute('type', 'number');
  //   updateHoldings.setAttribute("placeholder", content);
  //   holdingsDisplay.value = updateHoldings;
  // }
    userData.value = (userData.holdings * stock.close).toFixed(2);
  document.getElementById("holdings-value").textContent = `$${userData.value}`;
  holdingsDisplay.textContent = userData.holdings;

  localStorage.setItem(`${symbol}-user`, JSON.stringify(userData));
  // console.log(symbol);
}

// Helpers

function calculatePosition() {
  const keys = Object.keys(localStorage).filter( (key) => key.includes('-user') )
  const showVal = document.querySelectorAll('.total-value');
  let total = 0
  keys.forEach( (key) => total += parseFloat(JSON.parse(localStorage.getItem(key)).value) )
  console.log(total);
}

function keySubmit(event) {
  event.preventDefault();
  const key = document.getElementById("api-key").value;
  localStorage.setItem("API", JSON.stringify(key));

  enterKey.innerHTML = `<span class='col-auto mb-2'>${key}</span>`;
}

function quickLookup(event) {
  const target = event.target;
  if (target.classList.contains("quick")) {
    const text = target.textContent;
    lookupInput.value = text;
  }
  callAPI();
}

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month.toString();
  let day = date.getDate() - 3;
  day = day.toString();
  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  const today = `${year}-${month}-${day}`;
  // console.log(today);
  return today;
}

function capitalizeFirstLetter(str) {
  const first = str.charAt(0);
  const rest = str.substring(1);
  const firstCap = first.toUpperCase();

  return firstCap + rest;
}

//Build page

const quickLookupList = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN"];
const cardObjects = [
  {
    id: "totalValue",
    class: 'total-value',
    title: "Total Portfolio Value",
    text: "$0.00",
  },
  {
    id: "positions",
    title: "Number of Positions",
    text: "0",
  },
  {
    id: "topStock",
    title: "Top Performing Stock",
    text: "-",
  },
  {
    id: "change",
    title: "Today's Change",
    text: "$0.00",
  },
];

function buildQuickLookup() {
  let inner =
    '<span class="col-auto mb-2 mb-sm-0">Quick Search:</span><div class="col-auto"><div class="row justify-content-center">';
  quickLookupList.forEach((quickLink) => {
    inner += `
            <div class='quick col-auto m-1'>${quickLink}</div>
        `;
  });
  inner += "</div></div>";
  lookupQuickSection.innerHTML = inner;
}

function buildCards() {
  let cards = "";
  cardObjects.forEach((card) => {
    const cardText = `
            <div class="col-12 col-md-6 col-xl-3 ${card.class}">
                <div class="inner-section card" id='${card.id}'>
                    <div class="card-body">
                        <h6 class="card-title">${card.title}</h6>
                        <p class="card-text">${card.text}</p>
                    </div>
                </div>
            </div>
        `;
    cards += cardText;
  });
  portfolioCards.innerHTML = cards;
}

function showKeySubmit() {
  const key = JSON.parse(localStorage.getItem('API'));
  if (key) {
    enterKey.innerHTML = `<span class='col-auto mb-2'>${key}</span>`
  } else {
    enterKey.innerHTML = `
      <input class="col-6 mb-2" type="text" id="api-key" placeholder="Enter API key" />
      <button id='api-submit' class="col-4 col-md-3 mb-2" onclick="keySubmit(event)">Submit</button>
    `
  }
}

showKeySubmit();
buildQuickLookup();
buildCards();

//listeners
lookupQuickSection.addEventListener("click", quickLookup);
