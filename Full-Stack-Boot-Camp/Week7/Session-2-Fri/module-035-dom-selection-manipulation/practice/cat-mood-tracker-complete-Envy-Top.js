// DOM Selection and Manipulation Practice - Cat Mood Tracker (Complete Version)

// Cat names for generating new cats
const catNames = [
  "Whiskers",
  "Mr. Fluffington",
  "Princess Mittens",
  "Sir Pounce-a-lot",
  "Captain Whiskers",
  "Lady Furbottom",
  "Professor Meowington",
  "Duchess Fuzzybutt",
];

// DOM Selection Methods Practice
// Select important elements using querySelector() and querySelectorAll()
const catGrid = document.querySelector('.cat-grid');
const addCatBtn = document.querySelector('#add-cat-btn');
const prependCatBtn = document.querySelector('#prepend-cat-btn');
const removeLastCatBtn = document.querySelector('#remove-last-cat-btn');
const makeAllHappyBtn = document.querySelector('#make-all-happy-btn');
const makeAllGrumpyBtn = document.querySelector('#make-all-grumpy-btn');
const randomMoodsBtn = document.querySelector('#random-moods-btn');

// Stats elements
const happyCountDisplay = document.querySelector('#happy-count');
const grumpyCountDisplay = document.querySelector('#grumpy-count');
const sleepyCountDisplay = document.querySelector('#sleepy-count');

// Element Content Manipulation
function changeCatMood(button, newMood) {
  // Find the parent cat card
  const catCard = button.closest('.cat-card');

  // Find elements within the cat card to update
  const catFace = catCard.querySelector('.cat-face');
  const catMoodText = catCard.querySelector('.cat-mood');

  // Update the cat face emoji using textContent
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
  catFace.textContent = moodEmojis[newMood];

  // Update the mood text using textContent
  catMoodText.textContent = capitalizeFirstLetter(newMood);

  // Update the card's data attribute using setAttribute()
  catCard.setAttribute('data-mood', newMood);

  // Update the card's CSS class using classList
  catCard.classList.remove('mood-happy', 'mood-grumpy', 'mood-sleepy');
  catCard.classList.add(`mood-${newMood}`);

  // Update statistics after mood change
  updateMoodStatistics();
}

// DOM Structure Manipulation
function addNewCat() {
  // Create a new cat card element using createElement()
  const newCatCard = document.createElement('div');

  // Generate random cat data
  const moods = ["happy", "grumpy", "sleepy"];
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
  const randomName = getRandomItem(catNames);
  const randomMood = getRandomItem(moods);
  const moodText = capitalizeFirstLetter(randomMood);

  // Set up the new cat card
  newCatCard.classList.add('cat-card');
  newCatCard.setAttribute('data-mood', randomMood);
  
  // Set innerHTML with cat content
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
  
  newCatCard.innerHTML = cardHTML;
  
  // Append to catGrid using appendChild()
  catGrid.appendChild(newCatCard);

  // Update statistics
  updateMoodStatistics();
}

// Add cat to the beginning of the list
function addCatToStart() {
  // Create a new cat card element using createElement()
  const newCatCard = document.createElement('div');

  // Generate random cat data
  const moods = ["happy", "grumpy", "sleepy"];
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
  const randomName = getRandomItem(catNames);
  const randomMood = getRandomItem(moods);
  const moodText = capitalizeFirstLetter(randomMood);

  // Set up the new cat card
  newCatCard.classList.add('cat-card');
  newCatCard.setAttribute('data-mood', randomMood);
  
  // Set innerHTML with cat content
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
  
  newCatCard.innerHTML = cardHTML;
  
  // Use prepend() to add the cat to the beginning of catGrid
  catGrid.prepend(newCatCard);

  // Update statistics
  updateMoodStatistics();
}

// Remove the last cat from the list
function removeLastCat() {
  // Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll('.cat-card');

  // Check if there are any cats to remove
  if (allCats.length > 0) {
    // Get the last cat card
    const lastCat = allCats[allCats.length - 1];
    // Remove it from the DOM using remove()
    lastCat.remove();
  }

  // Update statistics
  updateMoodStatistics();
}

// Remove individual cat (called from onclick in HTML)
function removeCat(button) {
  // Find the parent cat card using closest()
  const catCard = button.closest('.cat-card');

  // Remove the cat card from the DOM
  catCard.remove();

  // Update statistics
  updateMoodStatistics();
}

// Attribute and Style Manipulation
function makeAllCatsHappy() {
  // Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll('.cat-card');

  // Use forEach() to iterate through NodeList
  allCats.forEach(catCard => {
    // Update face emoji
    const catFace = catCard.querySelector('.cat-face');
    catFace.textContent = '😸';
    
    // Update mood text
    const catMoodText = catCard.querySelector('.cat-mood');
    catMoodText.textContent = 'Happy';
    
    // Update data attribute
    catCard.setAttribute('data-mood', 'happy');
    
    // Update CSS classes
    catCard.classList.remove('mood-happy', 'mood-grumpy', 'mood-sleepy');
    catCard.classList.add('mood-happy');
  });

  // Update statistics
  updateMoodStatistics();
}

function makeAllCatsGrumpy() {
  // Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll('.cat-card');

  // Use forEach() to iterate through NodeList
  allCats.forEach(catCard => {
    // Update face emoji
    const catFace = catCard.querySelector('.cat-face');
    catFace.textContent = '😾';
    
    // Update mood text
    const catMoodText = catCard.querySelector('.cat-mood');
    catMoodText.textContent = 'Grumpy';
    
    // Update data attribute
    catCard.setAttribute('data-mood', 'grumpy');
    
    // Update CSS classes
    catCard.classList.remove('mood-happy', 'mood-grumpy', 'mood-sleepy');
    catCard.classList.add('mood-grumpy');
  });

  // Update statistics
  updateMoodStatistics();
}

function randomizeCatMoods() {
  // Get all cat cards
  const allCats = document.querySelectorAll('.cat-card');
  const moods = ["happy", "grumpy", "sleepy"];
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };

  // Loop through and assign random moods
  allCats.forEach(catCard => {
    const randomMood = getRandomItem(moods);
    
    // Update each cat's display
    const catFace = catCard.querySelector('.cat-face');
    const catMoodText = catCard.querySelector('.cat-mood');
    
    catFace.textContent = moodEmojis[randomMood];
    catMoodText.textContent = capitalizeFirstLetter(randomMood);
    catCard.setAttribute('data-mood', randomMood);
    
    catCard.classList.remove('mood-happy', 'mood-grumpy', 'mood-sleepy');
    catCard.classList.add(`mood-${randomMood}`);
  });

  // Update statistics
  updateMoodStatistics();
}

// Practical DOM Applications
function updateMoodStatistics() {
  // Count cats by mood using querySelectorAll()
  const happyCats = document.querySelectorAll('[data-mood="happy"]');
  const grumpyCats = document.querySelectorAll('[data-mood="grumpy"]');
  const sleepyCats = document.querySelectorAll('[data-mood="sleepy"]');

  // Update the stat displays using textContent
  happyCountDisplay.textContent = happyCats.length;
  grumpyCountDisplay.textContent = grumpyCats.length;
  sleepyCountDisplay.textContent = sleepyCats.length;
}

// Helper Functions
function init() {
  setupEventListeners();
  updateMoodStatistics();
}

init();

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function capitalizeFirstLetter(inputString) {
  if (!inputString || typeof inputString !== "string") {
    return "";
  }

  const firstCharacter = inputString.charAt(0);
  const uppercaseFirstCharacter = firstCharacter.toUpperCase();
  const restOfString = inputString.slice(1);
  const capitalizedString = uppercaseFirstCharacter + restOfString;

  return capitalizedString;
}

// Event Listeners - Completed
function setupEventListeners() {
  // Add click event listeners to control buttons
  if (addCatBtn) addCatBtn.addEventListener('click', addNewCat);
  if (prependCatBtn) prependCatBtn.addEventListener('click', addCatToStart);
  if (removeLastCatBtn) removeLastCatBtn.addEventListener('click', removeLastCat);
  if (makeAllHappyBtn) makeAllHappyBtn.addEventListener('click', makeAllCatsHappy);
  if (makeAllGrumpyBtn) makeAllGrumpyBtn.addEventListener('click', makeAllCatsGrumpy);
  if (randomMoodsBtn) randomMoodsBtn.addEventListener('click', randomizeCatMoods);

  console.log("Event listeners set up successfully!");
}