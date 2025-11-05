// == SELECTING ELEMENTS ==
const scoreElement = document.querySelector('#score');
const healthElement = document.querySelector('#health');
const battleLog = document.querySelector('#battle-log');
const attackBtn = document.querySelector('#attack-btn');
const healBtn = document.querySelector('#heal-btn');
const resetBtn = document.querySelector('#reset-btn');
const playerNameInput = document.querySelector('#player-name');
const classSelect = document.querySelector('#character-class');

// == INITIAL STATE ==
let score = 0;
let health = 100;
let player = playerNameInput.value;
let characterClass = classSelect.value;

// == DISPLAY FUNCTIONS ==

function updateDisplay() {
    scoreElement.textContent = score;
    healthElement.textContent = health;
}

// == EVENT HANDLERS ==

function attackEnemy() {
    score += 15;
    health -= 5;
    addBattleMessage(`⚔️ ${player} the ${characterClass} attacked the enemy! +15 score, -5 health`, '#ff6b6b');
    updateDisplay();
}

function usePotion() {
    health += 30;
    
    if (health > 100) {
        health = 100;
    }
    
    addBattleMessage(`🧪 ${player} the ${characterClass} drank a potion! Health restored to ${health}`, '#4CAF50');
    updateDisplay();
}

function resetGame() {
    score = 0;
    health = 100;
    
    // Clear the battle log
    battleLog.innerHTML = '';
    
    addBattleMessage(`🔄 Game reset! ${player} the ${characterClass} rises again!`, '#FFD700');
    updateDisplay();
}

function updatePlayerName() {
    player = playerNameInput.value;
    
    if (player === '') {
        player = 'The Nameless One';
    }
    
    console.log('Player name changed to:', player);
}

// == BATTLE LOG FUNCTIONS ==

function addBattleMessage(message, color = '#fff') {
    // Create a new div for this message
    const messageDiv = document.createElement('div');
    
    // Set its content
    messageDiv.textContent = message;
    
    // Set its style
    messageDiv.style.color = color;
    messageDiv.style.padding = '8px';
    messageDiv.style.borderBottom = '1px solid #333';
    messageDiv.style.marginBottom = '5px';
    
    // Add it to the battle log
    battleLog.appendChild(messageDiv);
    
    // Auto-scroll to bottom to see newest message
    battleLog.parentElement.scrollTop = battleLog.parentElement.scrollHeight;
}

// == CONNECT BUTTONS TO FUNCTIONS ==

attackBtn.addEventListener('click', attackEnemy);
healBtn.addEventListener('click', usePotion);
resetBtn.addEventListener('click', resetGame);
playerNameInput.addEventListener('input', updatePlayerName);

// Character class change event
classSelect.addEventListener('change', () => {
    characterClass = classSelect.value;
    addBattleMessage(`${player} is now a ${characterClass}!`, '#9C27B0');
});

// == INITIALIZATION ==

updateDisplay();
addBattleMessage(`Welcome, ${player} the ${characterClass}! Your adventure begins...`, '#4CAF50');