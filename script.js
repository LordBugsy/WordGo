// one of those words will have to be guessed by the player
const words = [
    "which", "there", "their", "about", "would", "these", "other", "words", "could", "write", "first", "water",
    "after", "where", "right", "think", "three", "years", "place", "sound", "great", "again", "still", "every",
    "small", "found", "those", "never", "under", "might", "while", "house", "world", "below", "asked", "going",
    "large", "until", "along", "shall", "being", "often", "earth", "began", "since", "study", "night", "light",
    "above", "paper", "parts", "young", "story", "point", "times", "heard", "whole", "white", "given", "means",
    "music", "miles", "thing", "today", "later", "using", "money", "lines", "order", "group", "among", "learn",
    "known", "space", "table", "early", "trees", "short", "hands", "state", "black", "shown", "stood", "front",
    "voice", "kinds", "makes", "comes", "close", "power", "lived", "vowel", "taken", "built", "heart", "ready",
    "quite", "class", "bring", "round", "horse", "shows", "piece", "green", "stand", "birds", "start", "river",
    "tried", "least", "field", "whose", "girls", "leave", "added", "color", "third", "hours", "moved", "plant",
    "doing", "names", "forms", "heavy", "ideas", "cried", "check", "floor", "begin", "woman", "alone", "plane",
    "spell", "watch", "carry", "wrote", "clear", "named", "books", "child", "glass", "human", "takes", "party",
    "build", "seems", "blood", "sides", "seven", "mouth", "solve", "north", "value", "death", "maybe", "happy",
    "tells", "gives", "looks", "shape", "lives", "steps", "areas", "sense", "speak", "force", "ocean", "speed",
    "women", "metal", "south", "grass", "scale", "cells", "lower", "sleep", "wrong", "pages", "ships", "needs",
    "rocks", "eight", "major", "level", "total", "ahead", "reach", "stars", "store", "sight", "terms", "catch",
    "works", "board", "cover", "songs", "equal", "stone", "waves", "guess", "dance", "spoke", "break", "cause",
    "radio", "weeks", "lands", "basic", "liked", "trade", "fresh", "final", "fight", "meant", "drive", "spent",
    "local", "waxes", "knows", "train", "bread", "homes", "teeth", "coast", "thick", "brown", "clean", "quiet",
    "sugar", "facts", "steel", "forth", "rules", "notes", "units", "peace", "month", "verbs", "seeds", "helps",
    "sharp", "visit", "woods", "chief", "walls", "cross", "wings", "grown", "cases", "foods", "crops", "fruit",
    "stick", "wants", "stage", "sheep", "nouns", "plain", "drink", "bones", "apart", "turns", "moves", "touch",
    "angle", "based", "range", "marks", "tired", "older", "farms", "spend", "shoes", "goods", "chair", "twice",
    "cents", "empty", "alike", "style", "broke", "pairs", "count", "enjoy", "score", "shore", "roots", "paint",
    "heads", "shook", "serve", "angry", "crowd", "wheel", "quick", "dress", "share", "alive", "noise", "solid",
    "cloth", "signs", "hills", "types", "drawn", "worth", "truck", "piano", "upper", "loved", "usual", "faces",
    "drove", "cabin", "boats", "towns", "proud", "court", "model", "prime", "fifty", "plans", "yards", "prove",
    "tools", "price", "sheet", "smell", "boxes", "raise", "match", "truth", "roads", "threw", "enemy", "lunch",
    "chart", "scene", "graph", "doubt", "guide", "winds", "block", "grain", "smoke", "mixed", "games", "wagon",
    "sweet", "topic", "extra", "plate", "title", "knife", "fence", "falls", "cloud", "wheat", "plays", "enter",
    "broad", "steam", "atoms", "press", "lying", "basis", "clock", "taste", "grows", "thank", "storm", "agree",
    "brain", "track", "smile", "funny", "beach", "stock", "hurry", "saved", "sorry", "giant", "trail", "offer",
    "ought", "rough", "daily", "avoid", "keeps", "throw", "allow", "cream", "laugh", "edges", "teach", "frame",
    "bells", "dream", "magic", "occur", "ended", "chord", "false", "skill", "holes", "dozen", "brave", "apple",
    "climb", "outer", "pitch", "ruler", "holds", "fixed", "costs", "calls", "blank", "staff", "labor", "eaten",
    "youth", "tones", "honor", "globe", "gases", "doors", "poles", "loose", "apply", "tears", "exact", "brush",
    "chest", "layer", "whale", "minor", "faith", "tests", "judge", "items", "worry", "waste", "hoped", "strip",
    "begun", "aside", "lakes", "bound", "depth", "candy", "event", "worse", "aware", "shell", "rooms", "ranch",
    "image", "snake", "aloud", "dried", "likes", "motor", "pound", "knees", "refer", "fully", "chain", "shirt",
    "flour", "drops", "spite", "orbit", "banks", "shoot", "curve", "tribe", "tight", "blind", "slept", "shade",
    "claim", "flies", "theme", "queen", "fifth", "union", "hence", "straw", "entry", "issue", "birth", "feels",
    "anger", "brief", "rhyme", "glory", "guard", "flows", "flesh", "owned", "trick", "yours", "sizes", "noted",
    "width", "burst", "route", "lungs", "uncle", "bears", "royal", "kings", "forty", "trial", "cards", "brass",
    "opera", "chose", "owner", "cesar", "vapor", "beats", "mouse", "tough", "wires", "meter", "tower", "finds",
    "stuck", "arrow", "poems", "label", "swing", "solar", "truly", "tense", "beans", "split", "rises", "weigh",
    "hotel", "stems", "pride", "swung", "grade", "digit", "badly", "boots", "pilot", "sales", "swept", "lucky",
    "prize", "stove", "tubes", "acres", "wound", "steep", "slide", "trunk", "error", "porch", "slave", "exist",
    "faced", "mines", "marry", "juice", "raced", "waved", "goose", "trust", "fewer", "favor", "mills", "views",
    "joint", "eager", "spots", "blend", "rings", "adult", "index", "nails", "horns", "balls", "flame", "rates",
    "drill", "trace", "skins", "waxed", "seats", "stuff", "ratio", "minds", "dirty", "silly", "coins", "hello",
    "trips", "leads", "rifle", "hopes", "inner", "curry", "sadly"];

let userAttempts = 0;
let win = false;
const secretWord = getWord();

function playWordle() {
    createElement();
    moveUI();
    initGame();
}

function moveUI() {
    const gameName = document.getElementById("header");
    gameName.style.animation = "none";
    gameName.style.animation = "fadeIn 1.4s ease-in-out both, translateUp 1.4s ease-in-out both";
    gameName.style.transform = "translateY(20px)";

    const gameDescription = document.getElementById("description");
    gameDescription.style.opacity = "1";
    gameDescription.style.animation = "none";
    gameDescription.style.animation = "disappear 1.4s ease-in-out both";

    const playButton = document.getElementById("playButton");
    playButton.style.opacity = 1;
    playButton.style.animation = "none";
    playButton.style.animation = "disappear 1.4s ease-in-out both";
}

function initGame() {
    const lives = document.getElementById("lives");
    let userInput = "";
    let wordIndex = 0;
    const inputArray = [document.getElementById("userInput1"), document.getElementById("userInput2"), document.getElementById("userInput3"), document.getElementById("userInput4"), document.getElementById("userInput5")];
    const game = document.getElementById("game");
    game.style.animation = "fadeIn 0.5s ease-in-out 1s both, translateGame 1.4s ease-in-out 0.8s both";

    function control(event) {
        if (/^[a-z]$/.test(event.key)) {
            if (userInput.length < 5) {
                userInput += event.key;
            } 
            
            else {
                userInput = userInput.slice(0, -1);
                userInput += event.key;
            }
            wordIndex = userInput.length - 1;
            inputArray[wordIndex].textContent = event.key.toUpperCase();
        } 
        
        else if (event.key == "Backspace") {
            inputArray[wordIndex].textContent = "";
            if (userInput.length > 0) userInput = userInput.slice(0, -1);
            wordIndex--;
            if (wordIndex < 0) wordIndex = 0;
        }
    
        if ((userInput.length == 5) && (event.key == "Enter")) {
            if ((userAttempts < 5) && (!compare(userInput, secretWord))) {
                if (!win) {
                    userAttempts++;
                    lives.textContent = `❤ x${6 - userAttempts}`;
                    lives.style.animation = "none";
                    lives.offsetHeight;
                    lives.style.animation = null;
                    lives.style.animation = "grow 0.2s ease-in-out both";
    
                    changeGameInfo(userInput, secretWord);
                }
            } 
            
            else if ((userAttempts >= 5) && (!compare(userInput, secretWord))) {
                if (!win) {
                    lives.textContent = "❤ x0";
                    lives.style.animation = "none";
                    lives.offsetHeight;
                    lives.style.animation = null;
                    lives.style.animation = "grow 0.2s ease-in-out both";
    
                    const gameInfo = document.getElementById("gameInfo");
                    gameInfo.style.animation = "none";
                    gameInfo.offsetHeight;
                    gameInfo.style.animation = null;
    
                    gameInfo.style.animation = "fadeOut 2s ease-in-out 2s both, redColour 0.5s ease-in-out both";
                    gameInfo.textContent = `Nice try! The word was ${secretWord.toUpperCase()}`;
                }
            } 
            
            else {
                if (!win && userAttempts < 5) {
                    changeGameInfo(userInput, secretWord);
                    win = true;
                }
            }
        }
    }
    
    // checks if a listener has already been added, this helps us keeping track on the user inputs
    if (!document.listenerAdded) {
        document.addEventListener("keydown", control);
        document.listenerAdded = true;
    }
}

function createElement() {
    const core = document.getElementById("wordleRemastered");
    const wordle = document.createElement("div");

    wordle.id = "game";
    wordle.style.display = "flex";
    wordle.style.alignItems = "center";
    wordle.style.justifyContent = "center";
    wordle.style.position = "absolute";

    core.appendChild(wordle);

    const game = document.getElementById("game");

    const userInput1 = document.createElement("div");
    userInput1.classList.add("userInput");
    userInput1.id = "userInput1";
    game.appendChild(userInput1);

    const input1 = document.createElement("div");
    input1.id = "input1";
    input1.textContent = "_";
    game.appendChild(input1);


    const userInput2 = document.createElement("div");
    userInput2.classList.add("userInput");
    userInput2.id = "userInput2";
    game.appendChild(userInput2);

    const input2 = document.createElement("div");
    input2.id = "input2";
    input2.textContent = "_";
    game.appendChild(input2);


    const userInput3 = document.createElement("div");
    userInput3.classList.add("userInput");
    userInput3.id = "userInput3";
    game.appendChild(userInput3);

    const input3 = document.createElement("div");
    input3.id = "input3";
    input3.textContent = "_";
    game.appendChild(input3);


    const userInput4 = document.createElement("div");
    userInput4.classList.add("userInput");
    userInput4.id = "userInput4";
    game.appendChild(userInput4);

    const input4 = document.createElement("div");
    input4.id = "input4";
    input4.textContent = "_";
    game.appendChild(input4);    

    const userInput5 = document.createElement("div");
    userInput5.classList.add("userInput");
    userInput5.id = "userInput5";
    game.appendChild(userInput5);

    const input5 = document.createElement("div");
    input5.id = "input5";
    input5.textContent = "_";
    game.appendChild(input5);

    const gameInfo = document.createElement("div");
    gameInfo.id = "gameInfo";
    gameInfo.textContent = "Type in your guess!";
    game.appendChild(gameInfo);

    const h3 = document.createElement("h3");
    h3.textContent = "Word";
    game.append(h3);

    const grid = document.createElement("div");
    grid.id = "grid";
    grid.classList.add("grid");
    game.append(grid);

    const array = [1,2,3,4,5];
    array.forEach((index) => {
        let input = document.createElement("div");
        input.textContent = "[]";
        input.id = `reveal${index}`;
        grid.appendChild(input);
    });

    const lives = document.createElement("div");
    lives.id = "lives";
    lives.textContent = "❤ x6";
    game.appendChild(lives);
}

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function compare(userInput, wordToGuess) {
    return userInput === wordToGuess;
}

function changeGameInfo(userInput, wordToGuess) {
    const gameInfo = document.getElementById("gameInfo");
    gameInfo.style.animation = "none";
    gameInfo.offsetHeight;
    gameInfo.style.animation = null;
    if (!compare(userInput, wordToGuess)) {
        let x = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (userInput[i] === wordToGuess[j]) {
                    gameInfo.style.animation = "fadeOut 2s ease-in-out 2s both, redColour 0.5s ease-in-out both";
                    gameInfo.textContent = "Wrong Word!";

                    const inputDisplay = document.getElementById(`reveal${j +1}`);
                    inputDisplay.textContent = userInput[i];
                }
            }
        }
    }

    else {
        gameInfo.style.animation = "fadeOut 2s ease-in-out 2s both, greenColour 0.5s ease-in-out both";
        gameInfo.textContent = `You successfuly guessed ${wordToGuess.toUpperCase()}!`;

        for (let i = 1; i < 6; i++) {
            const inputDisplay = document.getElementById(`reveal${i}`);
            inputDisplay.textContent = userInput[i -1];
        }
    }
}