// Dados dos animais da fauna brasileira - Versão otimizada
const animalsData = {
    'onca-pintada': {
        nameEn: 'Jaguar',
        namePt: 'Onça-pintada',
        descriptionEn: 'Largest cat in the Americas, apex predator essential for ecological balance. Bite force of 1,500 PSI, capable of breaking turtle shells.',
        descriptionPt: 'Maior felino das Américas, predador apex essencial para o equilíbrio ecológico. Força de mordida de 1.500 PSI, capaz de quebrar cascos de tartaruga.',
        status: 'Quase Ameaçada',
        statusColor: '#ff9500',
        actionsEn: [
            'Ecological corridor protection',
            'GPS and camera monitoring',
            'Rural community education',
            'Combat illegal hunting'
        ],
        actionsPt: [
            'Proteção de corredores ecológicos',
            'Monitoramento por GPS e câmeras',
            'Educação de comunidades rurais',
            'Combate à caça ilegal'
        ],
        impact: 75,
        impactTextEn: 'Stable populations in protected areas',
        impactTextPt: 'Populações estáveis em áreas protegidas',
        image: 'onca-pintada.jpg'
    },
    'capivara': {
        nameEn: 'Capybara',
        namePt: 'Capivara',
        descriptionEn: 'World\'s largest rodent, semi-aquatic and highly social. Lives in groups up to 20 individuals, essential for aquatic seed dispersal.',
        descriptionPt: 'Maior roedor do mundo, semi-aquático e altamente social. Vive em grupos de até 20 indivíduos, sendo fundamental para a dispersão de sementes aquáticas.',
        status: 'Pouco Preocupante',
        statusColor: '#00ff88',
        actionsEn: [
            'Wetland preservation',
            'Riparian corridor creation',
            'Sustainable tourism management',
            'Aquatic pollution control'
        ],
        actionsPt: [
            'Preservação de áreas úmidas',
            'Criação de corredores ripários',
            'Manejo sustentável do turismo',
            'Controle da poluição aquática'
        ],
        impact: 85,
        impactTextEn: 'Stable and growing populations',
        impactTextPt: 'Populações estáveis e crescentes',
        image: 'capivara.jpg'
    },
    'tucano': {
        nameEn: 'Toucan',
        namePt: 'Tucano',
        descriptionEn: 'Atlantic Forest symbol bird, essential seed disperser. Thermoregulatory beak can represent up to 1/3 of body length.',
        descriptionPt: 'Ave símbolo da Mata Atlântica, dispersor de sementes essencial. Bico termorregulador pode representar até 1/3 do comprimento corporal.',
        status: 'Vulnerável',
        statusColor: '#ffaa00',
        actionsEn: [
            'Native forest reforestation',
            'Private reserve creation',
            'Combat animal trafficking',
            'Genetic conservation research'
        ],
        actionsPt: [
            'Reflorestamento de mata nativa',
            'Criação de RPPNs',
            'Combate ao tráfico de animais',
            'Pesquisa genética para conservação'
        ],
        impact: 60,
        impactTextEn: 'Slow but steady recovery',
        impactTextPt: 'Recuperação lenta mas constante',
        image: 'tucano.jpg'
    },
    'boto-cor-de-rosa': {
        nameEn: 'Pink River Dolphin',
        namePt: 'Boto-cor-de-rosa',
        descriptionEn: 'Amazon endemic freshwater dolphin, highly intelligent. Advanced echolocation allows navigation in murky waters.',
        descriptionPt: 'Golfinho de água doce endêmico da Amazônia, altamente inteligente. Ecolocalização avançada permite navegação em águas turvas.',
        status: 'Em Perigo',
        statusColor: '#ff4444',
        actionsEn: [
            'River acoustic monitoring',
            'Mercury pollution reduction',
            'Fishing regulation',
            'Riverside education'
        ],
        actionsPt: [
            'Monitoramento acústico dos rios',
            'Redução da poluição por mercúrio',
            'Regulamentação da pesca',
            'Educação ribeirinha'
        ],
        impact: 40,
        impactTextEn: 'Concerning population decline',
        impactTextPt: 'Declínio populacional preocupante',
        image: 'boto-cor-de-rosa.jpg'
    },
    'lobo-guara': {
        nameEn: 'Maned Wolf',
        namePt: 'Lobo-guará',
        descriptionEn: 'Largest South American canid, Cerrado symbol. Long legs adapted for tall grasslands, crucial lobeira fruit disperser.',
        descriptionPt: 'Maior canídeo sul-americano, símbolo do Cerrado. Pernas longas adaptadas para campos altos, dispersor crucial da lobeira.',
        status: 'Quase Ameaçado',
        statusColor: '#ff9500',
        actionsEn: [
            'Cerrado preservation',
            'Ecological corridors',
            'Disease vaccination',
            'Behavioral research'
        ],
        actionsPt: [
            'Preservação do Cerrado',
            'Corredores ecológicos',
            'Vacinação contra doenças',
            'Pesquisa comportamental'
        ],
        impact: 55,
        impactTextEn: 'Stabilization in protected areas',
        impactTextPt: 'Estabilização em áreas protegidas',
        image: 'lobo-guara.jpg'
    },
    'arara-azul': {
        nameEn: 'Hyacinth Macaw',
        namePt: 'Arara-azul',
        descriptionEn: 'World\'s largest flying parrot, Pantanal symbol. Powerful beak cracks palm nuts, essential for forest regeneration.',
        descriptionPt: 'Maior papagaio voador do mundo, símbolo do Pantanal. Bico poderoso quebra cocos de palmeira, essencial para regeneração florestal.',
        status: 'Vulnerável',
        statusColor: '#ffaa00',
        actionsEn: [
            'Artificial nest installation',
            'Palm tree cultivation',
            'Anti-trafficking monitoring',
            'Community engagement'
        ],
        actionsPt: [
            'Instalação de ninhos artificiais',
            'Cultivo de palmeiras',
            'Monitoramento anti-tráfico',
            'Engajamento comunitário'
        ],
        impact: 70,
        impactTextEn: 'Population recovery in progress',
        impactTextPt: 'Recuperação populacional em progresso',
        image: 'arara-azul.jpg'
    },
    'tatu-bola': {
        nameEn: 'Three-banded Armadillo',
        namePt: 'Tatu-bola',
        descriptionEn: 'Only armadillo that can roll into a complete ball. Caatinga endemic, controls insect populations effectively.',
        descriptionPt: 'Único tatu que consegue se enrolar numa bola completa. Endêmico da Caatinga, controla populações de insetos efetivamente.',
        status: 'Vulnerável',
        statusColor: '#ffaa00',
        actionsEn: [
            'Caatinga habitat protection',
            'Road crossing structures',
            'Fire prevention programs',
            'Population monitoring'
        ],
        actionsPt: [
            'Proteção do habitat da Caatinga',
            'Estruturas de travessia rodoviária',
            'Programas de prevenção de incêndios',
            'Monitoramento populacional'
        ],
        impact: 45,
        impactTextEn: 'Habitat fragmentation concern',
        impactTextPt: 'Preocupação com fragmentação do habitat',
        image: 'tatu-bola.jpg'
    },
    'peixe-boi': {
        nameEn: 'Amazonian Manatee',
        namePt: 'Peixe-boi-da-amazônia',
        descriptionEn: 'Largest aquatic mammal in South America. Gentle herbivore maintains aquatic ecosystem balance through vegetation control.',
        descriptionPt: 'Maior mamífero aquático da América do Sul. Herbívoro gentil mantém equilíbrio do ecossistema aquático através do controle da vegetação.',
        status: 'Vulnerável',
        statusColor: '#ffaa00',
        actionsEn: [
            'River pollution reduction',
            'Fishing net regulation',
            'Rescue and rehabilitation',
            'Habitat restoration'
        ],
        actionsPt: [
            'Redução da poluição dos rios',
            'Regulamentação de redes de pesca',
            'Resgate e reabilitação',
            'Restauração do habitat'
        ],
        impact: 50,
        impactTextEn: 'Slow recovery with protection',
        impactTextPt: 'Recuperação lenta com proteção',
        image: 'peixe-boi.jpg'
    },
    'mico-leao-dourado': {
        nameEn: 'Golden Lion Tamarin',
        namePt: 'Mico-leão-dourado',
        descriptionEn: 'Atlantic Forest endemic primate with golden mane. Seed disperser crucial for forest regeneration and biodiversity.',
        descriptionPt: 'Primata endêmico da Mata Atlântica com juba dourada. Dispersor de sementes crucial para regeneração florestal e biodiversidade.',
        status: 'Em Perigo',
        statusColor: '#ff4444',
        actionsEn: [
            'Forest corridor creation',
            'Captive breeding programs',
            'Habitat restoration',
            'Genetic diversity monitoring'
        ],
        actionsPt: [
            'Criação de corredores florestais',
            'Programas de reprodução em cativeiro',
            'Restauração do habitat',
            'Monitoramento da diversidade genética'
        ],
        impact: 65,
        impactTextEn: 'Conservation success story',
        impactTextPt: 'História de sucesso da conservação',
        image: 'mico-leao-dourado.jpg'
    }
};

// Configurações dos níveis de dificuldade
const levelConfig = {
    1: { pairs: 2, moves: 15, animals: ['onca-pintada', 'capivara'] },
    2: { pairs: 3, moves: 18, animals: ['onca-pintada', 'capivara', 'tucano'] },
    3: { pairs: 4, moves: 22, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa'] },
    4: { pairs: 5, moves: 25, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara'] },
    5: { pairs: 6, moves: 28, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara', 'arara-azul'] },
    6: { pairs: 7, moves: 30, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara', 'arara-azul', 'tatu-bola'] },
    7: { pairs: 8, moves: 32, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara', 'arara-azul', 'tatu-bola', 'peixe-boi'] },
    8: { pairs: 9, moves: 34, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara', 'arara-azul', 'tatu-bola', 'peixe-boi', 'mico-leao-dourado'] },
    9: { pairs: 9, moves: 30, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara', 'arara-azul', 'tatu-bola', 'peixe-boi', 'mico-leao-dourado'] },
    10: { pairs: 9, moves: 25, animals: ['onca-pintada', 'capivara', 'tucano', 'boto-cor-de-rosa', 'lobo-guara', 'arara-azul', 'tatu-bola', 'peixe-boi', 'mico-leao-dourado'] }
};

// Estado do jogo
let gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    maxMoves: 15,
    gameStarted: false,
    gameEnded: false,
    currentLevel: 1,
    score: 0,
    timeBonus: 0,
    startTime: null,
    shownAnimals: new Set() // Controla quais animais já tiveram suas descrições mostradas
};

// Elementos DOM
const startScreen = document.getElementById('start-screen');
const gameBoard = document.getElementById('game-board');
const startBtn = document.getElementById('start-btn');
const newSessionBtn = document.getElementById('new-session-btn');
const movesCount = document.getElementById('moves-count');
const movesRemaining = document.getElementById('moves-remaining');
const pairsFound = document.getElementById('pairs-found');
const scoreDisplay = document.getElementById('score');
const animalsDiscoveredDisplay = document.getElementById('animals-discovered');
const currentLevelDisplay = document.getElementById('current-level');
const levelInfo = document.getElementById('level-info');
const levelUpBtn = document.getElementById('level-up');
const levelDownBtn = document.getElementById('level-down');
const previewLevel = document.getElementById('preview-level');
const previewDescription = document.getElementById('preview-description');
const difficultyFill = document.getElementById('difficulty-fill');
const animalModal = document.getElementById('animal-modal');
const gameOverModal = document.getElementById('game-over-modal');
const modalClose = document.getElementById('modal-close');
const restartBtn = document.getElementById('restart-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const menuBtn = document.getElementById('menu-btn');

// Função para iniciar nova sessão completa (limpa todos os animais mostrados)
function startNewSession() {
    gameState.shownAnimals = new Set();
    gameState.currentLevel = 1;
    gameState.score = 0;
    resetGameState();
    updateUI();
    updateLevelPreview();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    attachEventListeners();
    createParticles();
    loadProgress();
});

function initializeGame() {
    resetGameState();
    updateUI();
    updateLevelPreview();
}

function resetGameState() {
    const config = levelConfig[gameState.currentLevel];
    const currentLevel = gameState.currentLevel || 1;
    const currentScore = gameState.score || 0;
    const shownAnimals = gameState.shownAnimals || new Set();
    
    gameState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        moves: 0,
        maxMoves: config.moves,
        gameStarted: false,
        gameEnded: false,
        currentLevel: currentLevel,
        score: currentScore,
        timeBonus: 0,
        startTime: null,
        shownAnimals: shownAnimals // Preserva os animais já mostrados durante toda a sessão
    };
}

function attachEventListeners() {
    startBtn.addEventListener('click', startGame);
    newSessionBtn.addEventListener('click', startNewSession);
    modalClose.addEventListener('click', closeModal);
    restartBtn.addEventListener('click', restartGame);
    nextLevelBtn.addEventListener('click', goToNextLevel);
    menuBtn.addEventListener('click', goToMenu);
    levelUpBtn.addEventListener('click', () => changeLevel(1));
    levelDownBtn.addEventListener('click', () => changeLevel(-1));
    
    // Fechar modal clicando fora
    animalModal.addEventListener('click', function(e) {
        if (e.target === animalModal) {
            closeModal();
        }
    });
    
    // Remover as funções de pausa do timer para simplificar
    
    gameOverModal.addEventListener('click', function(e) {
        if (e.target === gameOverModal) {
            closeModal();
        }
    });
}

function changeLevel(direction) {
    const newLevel = gameState.currentLevel + direction;
    if (newLevel >= 1 && newLevel <= 10) {
        gameState.currentLevel = newLevel;
        
        // NÃO limpar animais mostrados ao mudar de nível - preservar durante toda a sessão
        
        resetGameState();
        updateUI();
        updateLevelPreview();
        
        // Se o jogo estava ativo, reiniciar com o novo nível
        if (gameState.gameStarted) {
            startGame();
        }
    }
}

function updateLevelPreview() {
    const config = levelConfig[gameState.currentLevel];
    previewLevel.textContent = gameState.currentLevel;
    previewDescription.textContent = `${config.pairs} pares de animais • ${config.moves} movimentos`;
    
    // Atualizar barra de dificuldade
    const difficulty = (gameState.currentLevel / 10) * 100;
    difficultyFill.style.width = difficulty + '%';
    
    // Cores da barra baseadas na dificuldade
    if (gameState.currentLevel <= 3) {
        difficultyFill.style.background = 'linear-gradient(90deg, #00ff88, #00d4ff)';
    } else if (gameState.currentLevel <= 6) {
        difficultyFill.style.background = 'linear-gradient(90deg, #ffaa00, #ff9500)';
    } else {
        difficultyFill.style.background = 'linear-gradient(90deg, #ff4444, #e94560)';
    }
}

function startGame() {
    // Garantir que o estado seja resetado antes de iniciar
    resetGameState();
    
    gameState.gameStarted = true;
    gameState.startTime = Date.now();
    startScreen.style.display = 'none';
    gameBoard.classList.add('active');
    
    createCards();
    shuffleCards();
    renderCards();
    updateUI();
    
    // Efeito de início
    gameBoard.style.animation = 'boardSlideIn 0.6s ease';
}

function createCards() {
    const config = levelConfig[gameState.currentLevel];
    const animals = config.animals;
    gameState.cards = [];
    
    // Criar pares de cartas baseados no nível
    animals.forEach(animal => {
        // Primeira carta do par
        gameState.cards.push({
            id: `${animal}-1`,
            animal: animal,
            type: 'card1',
            image: animalsData[animal].image,
            matched: false
        });
        
        // Segunda carta do par (mesma imagem)
        gameState.cards.push({
            id: `${animal}-2`,
            animal: animal,
            type: 'card2',
            image: animalsData[animal].image,
            matched: false
        });
    });
}

function shuffleCards() {
    for (let i = gameState.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameState.cards[i], gameState.cards[j]] = [gameState.cards[j], gameState.cards[i]];
    }
}

function renderCards() {
    gameBoard.innerHTML = '';
    
    gameState.cards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        gameBoard.appendChild(cardElement);
    });
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.index = index;
    cardDiv.dataset.animal = card.animal;
    cardDiv.dataset.type = card.type;
    
    const animalData = animalsData[card.animal];
    
    // Criar o elemento de imagem com fallback
    const fallbackSvg = `data:image/svg+xml;base64,${btoa(`
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#f4f4f4"/>
            <text x="50%" y="40%" font-family="Arial" font-size="12" fill="#999" text-anchor="middle" dy=".3em">${animalData.nameEn}</text>
            <text x="50%" y="60%" font-family="Arial" font-size="10" fill="#666" text-anchor="middle" dy=".3em">${animalData.namePt}</text>
        </svg>
    `)}`;
    
    cardDiv.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">
            <img src="${card.image}" alt="${animalData.nameEn} - ${animalData.namePt}" onerror="this.src='${fallbackSvg}'">
            <div class="card-names">
                <div class="name-en">${animalData.nameEn}</div>
                <div class="name-pt">${animalData.namePt}</div>
            </div>
        </div>
    `;
    
    cardDiv.addEventListener('click', () => handleCardClick(index));
    
    return cardDiv;
}

function handleCardClick(index) {
    if (!gameState.gameStarted || gameState.gameEnded) return;
    
    const card = gameState.cards[index];
    const cardElement = document.querySelector(`[data-index="${index}"]`);
    
    // Não permitir clicar em cartas já viradas ou correspondidas
    if (cardElement.classList.contains('flipped') || card.matched) return;
    
    // Não permitir mais de 2 cartas viradas
    if (gameState.flippedCards.length >= 2) return;
    
    // Virar a carta
    flipCard(cardElement, index);
    
    // Verificar se formou um par
    if (gameState.flippedCards.length === 2) {
        gameState.moves++;
        updateUI();
        
        setTimeout(() => {
            checkForMatch();
        }, 1000);
    }
}

function flipCard(cardElement, index) {
    cardElement.classList.add('flipped');
    gameState.flippedCards.push(index);
}

function checkForMatch() {
    const [index1, index2] = gameState.flippedCards;
    const card1 = gameState.cards[index1];
    const card2 = gameState.cards[index2];
    
    const cardElement1 = document.querySelector(`[data-index="${index1}"]`);
    const cardElement2 = document.querySelector(`[data-index="${index2}"]`);
    
    if (card1.animal === card2.animal) {
        // Par encontrado!
        handleMatch(card1, card2, cardElement1, cardElement2);
    } else {
        // Não é um par
        handleMismatch(cardElement1, cardElement2);
    }
    
    gameState.flippedCards = [];
}

function handleMatch(card1, card2, cardElement1, cardElement2) {
    card1.matched = true;
    card2.matched = true;
    gameState.matchedPairs++;
    
    cardElement1.classList.add('matched');
    cardElement2.classList.add('matched');
    
    // Mostrar informações do animal apenas se ainda não foi mostrado
    if (!gameState.shownAnimals.has(card1.animal)) {
        setTimeout(() => {
            showAnimalInfo(card1.animal);
            gameState.shownAnimals.add(card1.animal);
            updateUI(); // Atualizar contador de animais descobertos
            saveProgress(); // Salvar progresso
        }, 500);
    }
    
    updateUI();
    
    // Verificar se o jogo terminou
    setTimeout(() => {
        checkGameEnd();
    }, 1500);
}

function handleMismatch(cardElement1, cardElement2) {
    // Adicionar efeito de erro
    cardElement1.classList.add('shake');
    cardElement2.classList.add('shake');
    
    setTimeout(() => {
        cardElement1.classList.remove('flipped', 'shake');
        cardElement2.classList.remove('flipped', 'shake');
    }, 600);
    
    // Verificar se acabaram os movimentos
    setTimeout(() => {
        checkGameEnd();
    }, 800);
}

let modalAutoCloseTimer = null;
let timerCountdownInterval = null;
let autoAdvanceTimer = null;
let autoAdvanceInterval = null;

function showAnimalInfo(animal) {
    const data = animalsData[animal];
    
    document.getElementById('modal-animal-image').src = data.image;
    document.getElementById('modal-name-en').textContent = data.nameEn;
    document.getElementById('modal-name-pt').textContent = data.namePt;
    
    // Descrição bilíngue
    document.getElementById('modal-description').innerHTML = `
        <div class="description-en"><strong>EN:</strong> ${data.descriptionEn}</div>
        <div class="description-pt"><strong>PT:</strong> ${data.descriptionPt}</div>
    `;
    
    // Status badge
    const statusBadge = document.getElementById('modal-status');
    statusBadge.textContent = data.status;
    statusBadge.style.backgroundColor = data.statusColor;
    
    // Ações de preservação bilíngues
    const actionsList = document.getElementById('modal-actions');
    let actionsHTML = '<div class="actions-en"><strong>Conservation Actions (EN):</strong>';
    data.actionsEn.forEach(action => {
        actionsHTML += `<div class="action-item">⚡ ${action}</div>`;
    });
    actionsHTML += '</div><div class="actions-pt"><strong>Ações de Preservação (PT):</strong>';
    data.actionsPt.forEach(action => {
        actionsHTML += `<div class="action-item">⚡ ${action}</div>`;
    });
    actionsHTML += '</div>';
    actionsList.innerHTML = actionsHTML;
    
    // Medidor de impacto bilíngue
    const impactFill = document.getElementById('modal-impact');
    const impactText = document.getElementById('modal-impact-text');
    impactFill.style.width = data.impact + '%';
    impactFill.style.backgroundColor = data.impact > 70 ? '#00ff88' : 
                                      data.impact > 50 ? '#ffaa00' : '#ff4444';
    impactText.innerHTML = `
        <div><strong>EN:</strong> ${data.impactTextEn}</div>
        <div><strong>PT:</strong> ${data.impactTextPt}</div>
    `;
    
    animalModal.classList.add('active');
    
    // Adicionar pontos por descobrir animal
    gameState.score += 50;
    updateUI();
    
    // Iniciar contador visual
    startAutoCloseTimer();
}

function startAutoCloseTimer() {
    const timerSeconds = document.getElementById('timer-seconds');
    const timerBar = document.getElementById('timer-bar');
    
    // Resetar a animação da barra
    timerBar.style.animation = 'none';
    timerBar.offsetHeight; // Trigger reflow
    timerBar.style.animation = 'timerCountdown 10s linear forwards';
    
    let secondsLeft = 10;
    timerSeconds.textContent = secondsLeft;
    
    // Limpar timers anteriores
    clearTimeout(modalAutoCloseTimer);
    clearInterval(timerCountdownInterval);
    
    // Contador de segundos
    timerCountdownInterval = setInterval(() => {
        secondsLeft--;
        timerSeconds.textContent = secondsLeft;
        
        if (secondsLeft <= 0) {
            clearInterval(timerCountdownInterval);
        }
    }, 1000);
    
    // Auto-fechar após 10 segundos
    modalAutoCloseTimer = setTimeout(() => {
        closeModal();
    }, 10000);
}

function startAutoAdvanceTimer() {
    const autoAdvanceTimerElement = document.getElementById('auto-advance-timer');
    const advanceSecondsElement = document.getElementById('advance-seconds');
    const advanceTimerFill = document.getElementById('advance-timer-fill');
    
    // Mostrar o timer
    autoAdvanceTimerElement.style.display = 'block';
    
    // Resetar a animação
    advanceTimerFill.style.animation = 'none';
    advanceTimerFill.offsetHeight; // Trigger reflow
    advanceTimerFill.style.animation = 'advanceCountdown 3s linear forwards';
    
    let secondsLeft = 3;
    advanceSecondsElement.textContent = secondsLeft;
    
    // Limpar timers anteriores
    clearTimeout(autoAdvanceTimer);
    clearInterval(autoAdvanceInterval);
    
    // Contador de segundos
    autoAdvanceInterval = setInterval(() => {
        secondsLeft--;
        advanceSecondsElement.textContent = secondsLeft;
        
        if (secondsLeft <= 0) {
            clearInterval(autoAdvanceInterval);
        }
    }, 1000);
    
    // Auto-avançar após 3 segundos
    autoAdvanceTimer = setTimeout(() => {
        // Garantir que sempre avance para o próximo nível
        if (gameState.currentLevel < 10) {
            gameState.currentLevel++;
            resetGameState();
            updateUI();
            updateLevelPreview();
            
            // Fechar modal de game over e iniciar próxima fase automaticamente
            setTimeout(() => {
                closeModal();
                startGame();
            }, 500);
        }
    }, 3000);
}

function closeModal() {
    animalModal.classList.remove('active');
    gameOverModal.classList.remove('active');
    
    // Esconder timer de avanço automático
    const autoAdvanceTimerElement = document.getElementById('auto-advance-timer');
    if (autoAdvanceTimerElement) {
        autoAdvanceTimerElement.style.display = 'none';
    }
    
    // Limpar todos os timers
    if (modalAutoCloseTimer) {
        clearTimeout(modalAutoCloseTimer);
        modalAutoCloseTimer = null;
    }
    
    if (timerCountdownInterval) {
        clearInterval(timerCountdownInterval);
        timerCountdownInterval = null;
    }
    
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
    
    if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
    }
}

function checkGameEnd() {
    const config = levelConfig[gameState.currentLevel];
    if (gameState.matchedPairs === config.pairs) {
        // Vitória!
        calculateScore();
        endGame(true);
    } else if (gameState.moves >= gameState.maxMoves) {
        // Derrota - movimentos esgotados
        endGame(false);
    }
}

function calculateScore() {
    const config = levelConfig[gameState.currentLevel];
    const timeElapsed = (Date.now() - gameState.startTime) / 1000;
    const movesBonus = Math.max(0, (config.moves - gameState.moves) * 10);
    const timeBonus = Math.max(0, Math.floor((120 - timeElapsed) * 2));
    const levelMultiplier = gameState.currentLevel;
    
    gameState.timeBonus = timeBonus;
    gameState.score += (movesBonus + timeBonus) * levelMultiplier;
}

function endGame(victory) {
    gameState.gameEnded = true;
    
    const gameOverIcon = document.getElementById('game-over-icon');
    const gameOverTitle = document.getElementById('game-over-title');
    const gameOverMessage = document.getElementById('game-over-message');
    const finalMoves = document.getElementById('final-moves');
    const finalPairs = document.getElementById('final-pairs');
    
    if (victory) {
        markLevelComplete();
        const isNewRecord = saveHighScore();
        
        gameOverIcon.textContent = '🌟';
        gameOverIcon.style.color = '#00ff88';
        gameOverTitle.textContent = `Nível ${gameState.currentLevel} Concluído!`;
        gameOverTitle.style.color = '#00ff88';
        
        let message = `Missão cumprida! Você salvou ${levelConfig[gameState.currentLevel].pairs} espécies da fauna brasileira!`;
        if (isNewRecord) {
            message += ' 🏆 NOVO RECORDE!';
        }
        if (gameState.currentLevel < 10) {
            message += ` Próximo nível desbloqueado!`;
            // Mostrar botão de próxima fase
            nextLevelBtn.style.display = 'inline-flex';
        } else {
            message += ' 🎉 Você completou todos os níveis!';
            nextLevelBtn.style.display = 'none';
        }
        
        gameOverMessage.textContent = message;
        
        // Efeito de confete
        createConfetti();
        
        // Auto-avançar para próximo nível se não for o último
        if (gameState.currentLevel < 10) {
            startAutoAdvanceTimer();
        } else {
            // Se é o último nível, não mostrar timer de avanço
            const autoAdvanceTimerElement = document.getElementById('auto-advance-timer');
            if (autoAdvanceTimerElement) {
                autoAdvanceTimerElement.style.display = 'none';
            }
        }
    } else {
        gameOverIcon.textContent = '🔄';
        gameOverIcon.style.color = '#ffaa00';
        gameOverTitle.textContent = 'Missão Incompleta';
        gameOverTitle.style.color = '#ffaa00';
        gameOverMessage.textContent = 'Os animais ainda precisam da sua ajuda! Tente novamente e complete a missão de preservação.';
        
        // Esconder botão de próxima fase
        nextLevelBtn.style.display = 'none';
    }
    
    finalMoves.textContent = gameState.moves;
    finalPairs.textContent = gameState.matchedPairs;
    
    saveProgress();
    
    setTimeout(() => {
        gameOverModal.classList.add('active');
    }, 1000);
}

function createConfetti() {
    const colors = ['#00ff88', '#00d4ff', '#e94560', '#ff6b35'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
}

function restartGame() {
    closeModal();
    
    // Manter os animais mostrados mesmo ao reiniciar - só limpar em nova sessão completa
    const currentLevel = gameState.currentLevel;
    const shownAnimals = gameState.shownAnimals;
    const currentScore = gameState.score;
    
    resetGameState();
    gameState.currentLevel = currentLevel;
    gameState.shownAnimals = shownAnimals;
    gameState.score = currentScore;
    
    // Iniciar o jogo diretamente no nível atual
    setTimeout(() => {
        startGame();
    }, 300);
}

function goToNextLevel() {
    if (gameState.currentLevel < 10) {
        // Cancelar timer automático
        if (autoAdvanceTimer) {
            clearTimeout(autoAdvanceTimer);
            autoAdvanceTimer = null;
        }
        if (autoAdvanceInterval) {
            clearInterval(autoAdvanceInterval);
            autoAdvanceInterval = null;
        }
        
        closeModal();
        gameState.currentLevel++;
        resetGameState();
        updateUI();
        updateLevelPreview();
        
        // Sempre iniciar o jogo automaticamente
        setTimeout(() => {
            startGame();
        }, 300);
    }
}

function goToMenu() {
    closeModal();
    
    // Resetar estado do jogo mas manter nível atual e animais descobertos
    const currentLevel = gameState.currentLevel;
    const shownAnimals = gameState.shownAnimals;
    const currentScore = gameState.score;
    
    resetGameState();
    gameState.currentLevel = currentLevel;
    gameState.shownAnimals = shownAnimals;
    gameState.score = currentScore;
    
    startScreen.style.display = 'flex';
    gameBoard.classList.remove('active');
    gameBoard.innerHTML = '';
    updateUI();
    updateLevelPreview();
}

function updateUI() {
    const config = levelConfig[gameState.currentLevel];
    const totalAnimals = Object.keys(animalsData).length;
    
    movesCount.textContent = gameState.moves;
    movesRemaining.textContent = gameState.maxMoves - gameState.moves;
    pairsFound.textContent = `${gameState.matchedPairs}/${config.pairs}`;
    scoreDisplay.textContent = gameState.score.toLocaleString();
    animalsDiscoveredDisplay.textContent = `${gameState.shownAnimals.size}/${totalAnimals}`;
    currentLevelDisplay.textContent = gameState.currentLevel;
    levelInfo.textContent = `${config.pairs} pares • ${config.moves} movimentos`;
    
    // Atualizar cores baseadas no progresso
    const movesRemainingElement = document.getElementById('moves-remaining');
    const remaining = gameState.maxMoves - gameState.moves;
    const percentage = remaining / gameState.maxMoves;
    
    if (percentage <= 0.25) {
        movesRemainingElement.style.color = '#ff4444';
        movesRemainingElement.classList.add('pulse');
    } else if (percentage <= 0.5) {
        movesRemainingElement.style.color = '#ffaa00';
        movesRemainingElement.classList.remove('pulse');
    } else {
        movesRemainingElement.style.color = '#00d4ff';
        movesRemainingElement.classList.remove('pulse');
    }
    
    // Atualizar controles de nível - permitir navegação livre
    levelDownBtn.disabled = gameState.currentLevel <= 1;
    levelUpBtn.disabled = gameState.currentLevel >= 10;
}

// Função para expandir o jogo com múltiplas fases (preparação para futuras expansões)
function initializePhase(phaseNumber) {
    switch(phaseNumber) {
        case 1:
            gameState.maxMoves = 20;
            // Usar todos os 5 animais
            break;
        case 2:
            gameState.maxMoves = 18;
            // Adicionar mais animais ou reduzir movimentos
            break;
        case 3:
            gameState.maxMoves = 15;
            // Fase mais desafiadora
            break;
        default:
            gameState.maxMoves = 20;
    }
}

// Sistema de partículas de fundo
function createParticles() {
    const particlesContainer = document.getElementById('particles-bg');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Função para salvar progresso
function saveProgress() {
    const progress = {
        currentLevel: gameState.currentLevel,
        totalScore: gameState.score,
        shownAnimals: Array.from(gameState.shownAnimals),
        completedLevels: JSON.parse(localStorage.getItem('ecoMemoryCompleted') || '[]'),
        bestScores: JSON.parse(localStorage.getItem('ecoMemoryBestScores') || '{}')
    };
    
    localStorage.setItem('ecoMemoryProgress', JSON.stringify(progress));
}

// Função para carregar progresso
function loadProgress() {
    const saved = localStorage.getItem('ecoMemoryProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        gameState.currentLevel = progress.currentLevel || 1;
        gameState.score = progress.totalScore || 0;
        gameState.shownAnimals = new Set(progress.shownAnimals || []);
    }
}

// Função para registrar recorde
function saveHighScore() {
    const bestScores = JSON.parse(localStorage.getItem('ecoMemoryBestScores') || '{}');
    const levelKey = `level${gameState.currentLevel}`;
    
    if (!bestScores[levelKey] || gameState.score > bestScores[levelKey]) {
        bestScores[levelKey] = gameState.score;
        localStorage.setItem('ecoMemoryBestScores', JSON.stringify(bestScores));
        return true; // Novo recorde
    }
    return false;
}

// Função para marcar nível como completo
function markLevelComplete() {
    const completed = JSON.parse(localStorage.getItem('ecoMemoryCompleted') || '[]');
    if (!completed.includes(gameState.currentLevel)) {
        completed.push(gameState.currentLevel);
        localStorage.setItem('ecoMemoryCompleted', JSON.stringify(completed));
    }
}

// Adicionar suporte a teclado para acessibilidade
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    
    if (e.key === 'Enter' || e.key === ' ') {
        if (startScreen.style.display !== 'none') {
            startGame();
        }
    }
});

// Adicionar suporte a touch para dispositivos móveis
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Reset valores
    touchStartX = 0;
    touchStartY = 0;
});

// Preload das imagens para melhor performance
function preloadImages() {
    console.log('Preloading images...');
    Object.values(animalsData).forEach(animal => {
        const img = new Image();
        img.onload = () => console.log(`✅ Imagem carregada: ${animal.image}`);
        img.onerror = () => console.error(`❌ Erro ao carregar: ${animal.image}`);
        img.src = animal.image;
    });
}

// Inicializar preload quando a página carregar
window.addEventListener('load', preloadImages);

