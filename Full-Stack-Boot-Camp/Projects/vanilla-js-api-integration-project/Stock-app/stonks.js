const portfolioCards = document.getElementById('portfolio-cards');

const cardObjects = [
    {
        id: 'totalValue',
        title: 'Total Portfolio Value',
        text: '$0.00'
    },
    {
        id: 'positions',
        title: 'Number of Positions',
        text: '0'
    },
    {
        id: 'topStock',
        title: 'Top Performing Stock',
        text: '-'
    },
    {
        id: 'change',
        title: "Today's Change",
        text: '$0.00'
    },
]

function showCards() {
    let cards = ''
    cardObjects.forEach( (card) => {
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

showCards();