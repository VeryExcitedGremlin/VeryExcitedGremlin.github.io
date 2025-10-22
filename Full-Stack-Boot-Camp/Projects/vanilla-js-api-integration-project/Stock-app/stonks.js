const lookupForm = document.getElementById("stock-lookup");
const lookupInput = document.getElementById("lookup-input");
const lookupQuickSection = document.getElementById("quick-lookup-section");
const apiKeyInput = document.getElementById('api-key');
const showStock = document.getElementById('show-stock');

const portfolioCards = document.getElementById("portfolio-cards");

async function callAPI(event) {
  if (event) {
    event.preventDefault();
  };
  const access_key = apiKeyInput.value;
  const symbol = lookupInput.value;
  const today = getToday();
  if (!Object.keys(localStorage).includes(symbol) || JSON.parse(localStorage.getItem(symbol)).date !== today) {
    const url = `https://api.marketstack.com/v2/eod?access_key=${access_key}&symbols=${symbol}&date_from=${today}`;
    // return url
    try {
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        // console.log(result)
        const stockObject = result.data[0];
        localStorage.setItem(
          symbol,
          JSON.stringify({
            open: stockObject.open,
            high: stockObject.high,
            low: stockObject.low,
            close: stockObject.close,
            name: stockObject.name,
            volume: stockObject.volume,
            date: today,
          })
        );
      }

      throw new Error(`Response status: ${response.status}`);
    } catch (error) {
      console.error(error.message);
    }
  } else { console.log(`already have ${symbol} for today`) }
  
  if (localStorage.getItem(symbol)) {
    displayStock(symbol);
  }
}

function displayStock(symbol) {
  showStock.classList.add('outer-section');

  // let stockCard = createElement("div");

  const data = JSON.parse(localStorage.getItem(symbol));

  let userData
  if (Object.keys(localStorage).includes(`${symbol}-user`)) {
    userData = JSON.parse(localStorage.getItem(`${symbol}-user`));
  }

  let inner = `
    <div id="stock-banner" class="row justify-content-around align-items-center">
        <div class="col">
            <div class="row justify-content-center justify-content-sm-start">
                <h2 class="col-auto">${data.name}</h2>
                    <div id='stock-symbol' class="dis-val col-auto mb-2">${symbol}</div>
            </div>
        </div>
        <div class="col-12 col-sm-auto">
            <button><i class="fa-solid fa-thumbtack"></i>Add to Watchlist</button>
        </div>
    </div>
    <div id="stock-info" class="row align-items-center justify-content-around">
        
        <div class="col-auto mb-3">
            <h1 id='close'>${data.close}</h1>
            <span id="change" class="">${data.close - data.open}</span>
        </div>
        
        <div class="col-auto col-md-8 col-lg-6">
            <div class="row justify-content-between">
  `;

  const info = ['open', 'high', 'low', 'volume'];
  info.forEach( (item) => {
    inner += `
              <div class="col-6">
                  <div class="row justify-content-sm-between stock-data m-1 p-1">
                      <strong class="col-12 col-sm-auto">${capitalizeFirstLetter(item)}:</strong>
                      <span class="col-12 col-sm-auto">${item == 'volume' ? data[item] : ('$'+data[item])}</span>
                  </div>
              </div>
    `;
  });

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
                      userData ? userData.holdings * data.close : "0.00"
                    }</span>
                </div>
            </div>
            
          </div>

      </div>
  `;

  showStock.innerHTML = inner;
  document.getElementById('adjust-holdings').addEventListener('click', adjustHoldings);
}

function adjustHoldings(event) {
  const content = event.target.textContent;
  const symbol = document.getElementById('stock-symbol').textContent
  const stock = JSON.parse(localStorage.getItem(symbol))
  let userData = {}
  if (Object.keys(localStorage).includes(`${symbol}-user`)) {
    userData = JSON.parse(localStorage.getItem(`${symbol}-user`))
  }
  if (!userData.holdings) { userData.holdings = 0 }
  if (!userData.value) { userData.value = 0 }

  if (content == '+') {
    userData.holdings += 1;
  } else if (content == '-') { userData.holdings == 0 ? userData.holdings = 0 : userData.holdings -= 1 }

  userData.value = userData.holdings * stock.close
  document.getElementById('holdings-value').textContent = `$${userData.value}`
  document.getElementById("holdings-display").textContent = userData.holdings;

  localStorage.setItem(`${symbol}-user`, JSON.stringify(userData));
  // console.log(symbol);
}

// Helpers

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
  if (month.length < 2) { month = `0${month}`}
  if (day.length < 2) {
    day = `0${day}`;
  }

  const today = `${year}-${month}-${day}`
  // console.log(today);
  return today
}

function capitalizeFirstLetter(str) {
  const first = str.charAt(0);
  const rest = str.substring(1);
  const firstCap = first.toUpperCase();

  return firstCap + rest
}
//Build page
const quickLookupList = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN"];
const cardObjects = [
  {
    id: "totalValue",
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
            <div class="col-12 col-md-6 col-xl-3">
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

buildQuickLookup();
buildCards();

//listeners
lookupForm.addEventListener("submit", callAPI);
lookupQuickSection.addEventListener("click", quickLookup);
