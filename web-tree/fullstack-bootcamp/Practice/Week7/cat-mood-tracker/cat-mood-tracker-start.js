// DOM Selection and Manipulation Practice - Cat Mood Tracker (Simple & Funny!)
// TODO: Complete the following DOM manipulation tasks

// Cat names for generating new cats
const catNames = [
  "Whiskers",
  "Mr. Fluffington",
  "Princess Mittens",
  "Sir Pounce-a-lot",
  "Captain Whiskers",
  "Lady Furriton",
  "Professor Meowington",
  "Duchess Fuzzycoat",
];
  
const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
const moods = ["happy", "grumpy", "sleepy"];
// const updateMood = { 'happy': 'Happy', 'grumpy': 'Grumpy', 'sleepy': 'Sleepy'};

// TODO: DOM Selection Methods Practice
// Select important elements using querySelector() and querySelectorAll()

const catGrid = document.querySelector('.cat-grid'); // TODO: Select the cat grid container
const addCatBtn = document.querySelector('#add-cat-btn'); // TODO: Select the "Add New Cat" button
// addCatBtn.style.color = 'red';
const prependCatBtn = document.querySelector("#prepend-cat-btn"); // TODO: Select the "Add Cat to Start" button
const removeLastCatBtn = document.querySelector("#remove-last-cat-btn"); // TODO: Select the "Remove Last Cat" button
const makeAllHappyBtn = document.querySelector("#make-all-happy-btn"); // TODO: Select "Make All Happy" button
const makeAllGrumpyBtn = document.querySelector("#make-all-grumpy-btn"); // TODO: Select "Make All Grumpy" button
const makeAllSleepyBtn = document.querySelector("#make-all-sleepy-btn"); // TODO: Select "Make All Sleepy" button
const randomMoodsBtn = document.querySelector("#random-moods-btn"); // TODO: Select "Random Moods" button

// Stats elements
const happyCountDisplay = document.querySelector("#happy-count"); // TODO: Select happy count display
const grumpyCountDisplay = document.querySelector("#grumpy-count"); // TODO: Select grumpy count display
const sleepyCountDisplay = document.querySelector("#sleepy-count"); // TODO: Select sleepy count display

// Demo elements
// const demoOutput = null; // TODO: Select demo output area
// const demoElementBtn = null; // TODO: Select element demo button
// const demoNodeListBtn = null; // TODO: Select NodeList demo button
// const demoHtmlCollectionBtn = null; // TODO: Select HTMLCollection demo button

// TODO: Element Content Manipulation
function changeCatMood(button, newMood) {
  // console.log(button);
  // console.log(newMood);
  // TODO: Find the parent cat card
  const catCard = button.closest('.cat-card'); // TODO: Use closest() or parentElement to find cat card
  // console.log(catCard);
  // TODO: Find elements within the cat card to update
  const catFace = catCard.querySelector('.cat-face'); // TODO: Find the cat face element
  const catMoodText = catCard.querySelector('.cat-mood'); // TODO: Find the cat mood text element
  // console.log(catFace);
  // console.log(catMoodText);
  // TODO: Update the cat face emoji using textContent
  // Happy: 😸, Grumpy: 😾, Sleepy: 😴
  catFace.textContent = moodEmojis[newMood];
  // TODO: Update the mood text using textContent
  // Capitalize first letter: 'happy' -> 'Happy'
  catMoodText.textContent = capitalizeFirstLetter(newMood);
  
  // TODO: Update the card's data attribute using setAttribute() - i.e. data-mood
  catCard.setAttribute('data-mood', newMood);
  // TODO: Update the card's CSS class using classList
  // Remove old mood classes, add new mood class

  // TODO: Update statistics after mood change
  updateMoodStatistics();
}

function createNewCat() {
  // TODO: Create a new cat card element using createElement()
  const newCatCard = document.createElement("div"); // TODO: Create div element

  // TODO: Generate random cat data
  const randomName = getRandomItem(catNames);
  const randomMood = getRandomItem(moods);

  const moodText = capitalizeFirstLetter(randomMood);

  // TODO: Set up the new cat card
  // Add CSS class using classList.add()
  // Set data attribute using setAttribute()
  // Set innerHTML with cat content
  newCatCard.classList.add('cat-card');
  newCatCard.setAttribute('data-mood', randomMood);

  // Example of using template literals
  // to create html structure (much faster than)
  // doing it with createElement etc
    const cardHTML = `
          <div class="cat-face">${moodEmojis[randomMood]}</div>
          <h3 class="cat-name">${randomName}</h3>
          <p class="cat-mood">${moodText}</p>
          <div class="mood-buttons">
            <button onclick="changeCatMood(this, 'happy')">😸 Happy</button>
            <button onclick="changeCatMood(this, 'grumpy')">😾 Grumpy</button>
            <button onclick="changeCatMood(this, 'sleepy')">😴 Sleepy</button>
            <button onclick="removeCat(this)" class="remove-btn">🗑️ Remove</button>
          </div>
      `;

  // TODO: Set innerHTML and append to catGrid using appendChild()
  newCatCard.innerHTML = cardHTML;
  return newCatCard;
}

// TODO: DOM Structure Manipulation
function addNewCat() {
  catGrid.appendChild(createNewCat());
  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Add cat to the beginning of the list
function addCatToStart() {
  // TODO: Use prepend() to add the cat to the beginning of catGrid
  catGrid.prepend(createNewCat());
  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Remove the last cat from the list
function removeLastCat() {
  // TODO: Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll('.cat-card');
  Length = allCats.length;
  // TODO: Check if there are any cats to remove
  if (Length > 0) {
    // TODO: Get the last cat card
    // TODO: Remove it from the DOM using remove()
    // console.log(allCats[Length - 1]);
    allCats[Length - 1].remove();
  }

  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Remove individual cat (called from onclick in HTML)
function removeCat(button) {
  // TODO: Find the parent cat card using closest()
  const catCard = button.closest('.cat-card'); // TODO: Use closest('.cat-card') to find parent
  // console.log(catCard);
  // TODO: Remove the cat card from the DOM
  catCard.remove();

  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Attribute and Style Manipulation
function makeAllCats(newMood) {
  // TODO: Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll('.cat-card');
  // console.log(allCats);
  // TODO: Loop through each cat card
  // TODO: Use forEach() to iterate through NodeList
  allCats.forEach((card) => {

  // Update face emoji, mood text, data attribute, and CSS classes
    card.querySelector(".cat-face").textContent = moodEmojis[newMood];
    card.querySelector('.cat-mood').textContent = capitalizeFirstLetter(newMood);
    card.setAttribute('data-mood', newMood);
  });
  // TODO: Update statistics
  updateMoodStatistics();
}

function makeAllCatsHappy() {
  makeAllCats('happy');
}

function makeAllCatsGrumpy() {
  makeAllCats("grumpy");
}

function makeAllCatsSleepy() {
  makeAllCats("sleepy");
}

function randomizeCatMoods() {
  // TODO: Get all cat cards
  const allCats = document.querySelectorAll(".cat-card");
  // TODO: Loop through and assign random moods
  allCats.forEach((card) => {
    // TODO: Update each cat's display
    const randomMood = getRandomItem(moods);

    card.querySelector(".cat-face").textContent = moodEmojis[randomMood];
    card.querySelector(".cat-mood").textContent = capitalizeFirstLetter(randomMood);
    card.setAttribute("data-mood", randomMood);
  });
  // TODO: Update statistics

  updateMoodStatistics();
}

// TODO: Practical DOM Applications
function updateMoodStatistics() {
  // TODO: Count cats by mood using querySelectorAll()
  const happyCats = document.querySelectorAll('[data-mood="happy"]'); // TODO: Count cats with data-mood="happy"
  const grumpyCats = document.querySelectorAll('[data-mood="grumpy"]'); // TODO: Count cats with data-mood="grumpy"
  const sleepyCats = document.querySelectorAll('[data-mood="sleepy"]'); // TODO: Count cats with data-mood="sleepy"
  
  // console.log(sleepyCats);
  // console.log(sleepyCountDisplay);
  
  // TODO: Update the stat displays using textContent
  happyCountDisplay.textContent = happyCats.length;
  grumpyCountDisplay.textContent = grumpyCats.length;
  sleepyCountDisplay.textContent = sleepyCats.length;
}

//Helper Functions - Do not edit

function init() {
  setupEventListeners();
  updateMoodStatistics();
}

init();

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function capitalizeFirstLetter(inputString) {
  // just return empty string if we get garbage input
  if (!inputString || typeof inputString !== "string") {
    return "";
  }

  // grab the first letter and uppercase it
  const firstCharacter = inputString.charAt(0);
  const uppercaseFirstCharacter = firstCharacter.toUpperCase();

  // get everything else after the first letter
  const restOfString = inputString.slice(1);

  // stick them back together
  const capitalizedString = uppercaseFirstCharacter + restOfString;

  return capitalizedString;
}

// Event Listeners
function setupEventListeners() {
  // Add click event listeners to control buttons
  if (addCatBtn) addCatBtn.addEventListener("click", addNewCat);
  if (prependCatBtn) prependCatBtn.addEventListener("click", addCatToStart);
  if (removeLastCatBtn)
    removeLastCatBtn.addEventListener("click", removeLastCat);
  if (makeAllHappyBtn)
    makeAllHappyBtn.addEventListener("click", makeAllCatsHappy);
  if (makeAllGrumpyBtn)
    makeAllGrumpyBtn.addEventListener("click", makeAllCatsGrumpy);
  if (makeAllSleepyBtn)
    makeAllSleepyBtn.addEventListener("click", makeAllCatsSleepy);
  if (randomMoodsBtn)
    randomMoodsBtn.addEventListener("click", randomizeCatMoods);

  console.log("Event listeners set up successfully!");
}
