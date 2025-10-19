const lookupForm = document.getElementById("stock-lookup");
const lookupInput = document.getElementById("lookup-input");
const lookupQuick = document.getElementById('quick-lookup');

const portfolioCards = document.getElementById("portfolio-cards");

const quickLookup = ['APPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN'];
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
    let inner = '<span class="col-auto">Quick Search:</span><div class="col-auto">'
    quickLookup.forEach( (quickLink) => {
        inner += `
            <span class='quick col-auto'>${quickLink}</span>
        `
    });
    inner += '</div>'
    lookupQuick.innerHTML = inner;
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

function getData(event) {
    event.preventDefault();
}

async function callData(access_key, symbol) {
  const url = `http://api.marketstack.com/v2/eod?${access_key}=c37cf927e188929771585709f822c131&symbols=${symbol}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

buildQuickLookup();
buildCards();




//listeners
lookupForm.querySelector('button').addEventListener('submit', getData);
// lookupQuick.addEventListener('click', );