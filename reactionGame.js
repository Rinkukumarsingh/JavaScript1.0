let startTime;
let endTime;
let gameState = "idle"; // idle, waiting, ready


const box = document.getElementById('box');

box.addEventListener('click', function(){
    if(gameState === "idle"){
        gameState = "waiting";
        box.textContent =  "wait for color change";
        box.classList.add('waiting');
        box.classList.remove('ready');

        let delay = Math.random() * 5000 + 2000; // Random delay between 2 to 7 seconds
        setTimeout(function(){
            gameState = "ready";
            startTime = Date.now();
            box.style.background = "green";
            box.classList.remove('waiting');
            box.classList.add('ready');
            box.textContent = "Tap as soon as possible to check reaction!";
        }, delay);
    }
    else if(gameState === 'waiting'){
        const result = document.getElementById('result');
        result.textContent = "Too Soon! Click to try again.";
        result.classList.add('error');
        result.classList.remove('success');
        gameState = "idle";
        box.classList.remove('waiting', 'ready');
        box.style.background = "red";
        box.textContent = "click to start!";
        }

    else if(gameState === "ready"){
        endTime = Date.now();
        const reactionTime = endTime - startTime;
        const result = document.getElementById('result');
        result.textContent = `Your reaction time is ${reactionTime} ms.`;
        result.classList.add('success');
        result.classList.remove('error');
        box.textContent = "click to start!";
        box.style.background = "red";
        box.classList.remove('waiting', 'ready');
        gameState = "idle";
        endTime = 0;
        startTime = 0;
    }
});

