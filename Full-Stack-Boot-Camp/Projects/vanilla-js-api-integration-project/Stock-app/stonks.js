const lookupForm = document.getElementById("stock-lookup");
const lookupInput = document.getElementById("lookup-input");
const lookupQuickSection = document.getElementById("quick-lookup-section");
const apiKeyInput = document.getElementById('api-key');

const portfolioCards = document.getElementById("portfolio-cards");

function quickLookup(event) {
  const target = event.target
  if (target.classList.contains('quick')){
    const text = target.textContent;
    lookupInput.value = text;
  }
  callAPI()
}

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
            close: stockObject.close,
            high: stockObject.high,
            low: stockObject.low,
            name: stockObject.name,
            open: stockObject.open,
            date: today,
          })
        );
      }

      throw new Error(`Response status: ${response.status}`);
    } catch (error) {
      console.error(error.message);
    }
  } else { console.log(`already have ${symbol} for today`) }
  // return {close: result.close, high: result.high, low: result.low, name: result.name, open: result.open}
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
