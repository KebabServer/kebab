const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const ranksBackwards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const suits = ["c", "d", "h", "s"];
const suitsColors = { 's': 'black', 'c': 'green', 'h': 'red', 'd': 'blue', };
const suitsSymbols = { 's': '♠', 'c': '♣', 'h': '♥', 'd': '♦', };
const cardOrder = [];
const cardOrderX = [];
const cardOrderY = [];
const heightsMax = [];

ranksBackwards.forEach((r1, i1) => {
    heightsMax[i1] = []; // Initialize the row
    suits.forEach((s1, j1) => {
        ranksBackwards.forEach((r2, i2) => {
            heightsMax[i1][i2] = (i1 === i2) ? 6 : (i1 > i2 ? 12 : 4);
            suits.forEach((s2, j2) => {
                if (i2 < i1 || (i1 === i2 && j2 < j1)) {
                    cardOrder.push(`${r1}${s1}${r2}${s2}`);
                    [cardOrderX, cardOrderY].forEach((arr, idx) => arr.push(12 - ((j1 === j2) === (idx === 0) ? i1 : i2)));
                }
            });
        });
    });
});

const labelPositions = [
    { x: 284, y: 60, chipx: 0, chipy: 90 },
    { x: 490, y: 90, chipx: -40, chipy: 80 },
    { x: 490, y: 370, chipx: 10, chipy: -75 },
    { x: 284, y: 420, chipx: -90, chipy: -50 },
    { x: 75, y: 370, chipx: -10, chipy: -75 },
    { x: 75, y: 90, chipx: 40, chipy: 80 }
];

const chipValues = [
    { color: 'Black', value: 100, width: 30, height: 10 },
    { color: 'Green', value: 25, width: 28, height: 10 },
    { color: 'Yellow', value: 10, width: 26, height: 10 },
    { color: 'Blue', value: 5, width: 24, height: 10 },
    { color: 'Red', value: 1, width: 22, height: 10 },
    { color: 'White', value: 0.5, width: 20, height: 10 }
];
const boardPosition = { x: 200, y: 180, width: 50, height: 70, fontSize: 40 };
const VIEWS = {
    TABLE: 'table',
    CURRENT: 'current',
    LAST: 'last'
};

const UI_CONFIG = {
    popup: {
        width: 80,
        height: 40,
        margin: 14,
        bg: '#222',
        stroke: '#FFFFFF',
        font: 'bold 18px Arial'
    },
    table: {
        fill: '#146C43',
        stroke: '#FFFFFF'
    }
};



const getActionColor = (action) => {
    const colors = { 'Call': 'green', 'Check': 'green', 'Fold': 'blue', 'All In': '#5c0707' };
    return colors[action] || 'red'; // Default to red for bets/raises
};

const canvas = document.getElementById('pokerTable');
const ctx = canvas.getContext('2d');
const feedback = document.getElementById('feedback');
const buttonsDiv = document.getElementById('buttons');
const quizQuestionDiv = document.getElementById('quiz_question');

const currentHandRangeBtn = document.getElementById('current_hand_range_button');
const lastHandRangeBtn = document.getElementById('last_hand_range_button');

document.addEventListener('DOMContentLoaded', () => {
    let rows;
    let headers;

    let question;
    let popupLastHand = {};
    let popupCurrentHand = {};
    let tableSetup = {};
    let RNGvalue = 0;

    function updateDisplay(view) {
        currentHandRangeBtn.textContent = "Show Current Range";
        lastHandRangeBtn.textContent = "Show Last Range";

        if (view === VIEWS.CURRENT) {
            currentHandRangeBtn.textContent = "Hide Current Range";
            renderRangeMatrix(popupCurrentHand.ranges, popupCurrentHand.actions);
        }
        else if (view === VIEWS.LAST) {
            lastHandRangeBtn.textContent = "Hide Last Range";
            renderRangeMatrix(popupLastHand.ranges, popupLastHand.actions);
        }
        else {
            renderTable();
        }
    }

    currentHandRangeBtn.addEventListener('click', () => {
        updateDisplay(currentHandRangeBtn.textContent.includes("Hide") ? VIEWS.TABLE : VIEWS.CURRENT);
    });

    lastHandRangeBtn.addEventListener('click', () => {
        updateDisplay(lastHandRangeBtn.textContent.includes("Hide") ? VIEWS.TABLE : VIEWS.LAST);
    });


    const RFI_Checkbox = document.getElementById("RFI_Checkbox");
    const BBDEF_Checkbox = document.getElementById("BBDEF_Checkbox");
    const SBDEF_Checkbox = document.getElementById("SBDEF_Checkbox");
    const IP3BET_Checkbox = document.getElementById("IP3BET_Checkbox");
    const VS3BET_Checkbox = document.getElementById("VS3BET_Checkbox");
    const SRP_Checkbox = document.getElementById("SRP_Checkbox");

    //Load TSV file
    (async () => {
        const url = `https://kebabserver.github.io/kebab/RangeTrainer/Preflop.tsv?ts=${Date.now()}`;

        try {
            const response = await fetch(url);
            if (!response.ok) return printText('No connection.');

            const data = await response.text();

            // Process data
            rows = data.split('\n').map(row => row.split('\t'));
            headers = rows[0];

            printText('Ranges loaded successfully.');
            loadNewQuiz();
        } catch (e) {
            console.error('Fetch error:', e);
        }
    })();

    /** * Helper to get data from a row by header name  */
    const getRowData = (row, key) => row[headers.indexOf(key)];

    //Print text to console
    function printText(text) {
        feedback.textContent = text;
    }



    function renderTable() {
        // 1. Setup & Background
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const drawRect = (x, y, w, h, fill, stroke = 'black', lWidth = 2) => {
            ctx.beginPath();
            ctx.rect(x, y, w, h);
            ctx.fillStyle = fill;
            ctx.fill();
            ctx.strokeStyle = stroke;
            ctx.lineWidth = lWidth;
            ctx.stroke();
            ctx.closePath();
        };

        // 2. Draw Main Table
        ctx.beginPath();
        ctx.ellipse(284, 230, 280, 180, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#146C43';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 5;
        ctx.stroke();

        // 3. Draw Board & Community Cards ***NOT TESTED***
        if (tableSetup.board !== "PRE") {
            [0, boardPosition.width, boardPosition.width * 2].forEach((dx, i) => {
                const boardPart = tableSetup.board.slice(0 + 2 * i, 2 + 2 * i);
                if (!boardPart) return;

                drawRect(boardPosition.x + dx, boardPosition.y, boardPosition.width - 4, boardPosition.height, '#FFFFFF', '#000000');
                const rank = boardPart.slice(0, -1);
                const suit = boardPart.slice(-1);

                ctx.fillStyle = suitsColors[suit];
                ctx.font = 'bold ' + boardPosition.fontSize + 'px Arial';
                ctx.fillText(rank, boardPosition.x + dx + boardPosition.width / 2 - 2, boardPosition.y + boardPosition.height / 3);
                ctx.fillText(suitsSymbols[suit], boardPosition.x + dx + boardPosition.width / 2 - 2, boardPosition.y + boardPosition.height * 3 / 4);
            });
        }

        // 4. Draw Players & Positions
        tableSetup.positions.forEach((posLabel, i) => {
            const lp = labelPositions[i];

            // Player Cards (Small indicators)
            if (tableSetup.holdingCards.includes(posLabel)) {
                drawRect(lp.x - 38, lp.y - 60, 36, 50, 'red', 'black');
                drawRect(lp.x + 2, lp.y - 60, 36, 50, 'red', 'black');
            }

            // Position Badge
            drawRect(lp.x - 45, lp.y - 25, 90, 50, '#333333', 'white');
            ctx.fillStyle = 'white';
            ctx.font = 'bold 24px Arial';
            ctx.fillText(posLabel, lp.x, lp.y);

            ctx.strokeStyle = 'black';
            // Dealer Button
            if (posLabel === "BTN") {
                ctx.beginPath();
                ctx.arc(lp.x + 60, lp.y, 15, 0, Math.PI * 2);
                ctx.fillStyle = 'yellow';
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = 'black';
                ctx.stroke();
                ctx.font = 'bold 16px Arial';
                ctx.fillText('D', lp.x + 60, lp.y);
            }

            // Chips
            let amt = tableSetup.invested[i];
            if (amt > 0) {
                let cx = lp.x + lp.chipx, cy = lp.y + lp.chipy;
                let tempAmt = amt;
                let stack = [];
                chipValues.forEach(v => {
                    let count = Math.floor(tempAmt / v.value);
                    tempAmt -= count * v.value;
                    for (let j = 0; j < count; j++) stack.push(v);
                });
                stack.forEach((chip, index) => {
                    ctx.beginPath();
                    ctx.ellipse(cx, cy - index * 10, chip.width, chip.height, 0, 0, Math.PI * 2);
                    ctx.fillStyle = chip.color;
                    ctx.fill();
                    ctx.stroke();
                });
                ctx.fillStyle = 'black';
                ctx.font = 'bold 22px Arial';
                ctx.fillText(`${amt} BB`, cx, cy - stack.length * 10 - 11);
            }
        });

        // 5. Draw Hero Hand (Large interactive cards)
        [0, 60].forEach((dx, i) => {
            const handPart = i === 0 ? tableSetup.heroHand.slice(0, 2) : tableSetup.heroHand.slice(2);
            if (!handPart) return;

            drawRect(228 + dx, 310, 56, 80, '#FFFFFF', '#000000');
            const rank = handPart.slice(0, -1);
            const suit = handPart.slice(-1);

            ctx.fillStyle = suitsColors[suit];
            ctx.font = 'bold 48px Arial';
            ctx.fillText(rank, 238 + dx + 18, 338);
            ctx.fillText(suitsSymbols[suit], 238 + dx + 18, 370);
        });

        // 6. Random Number Pop-up (Bottom Left)
        drawRect(UI_CONFIG.popup.margin, canvas.height - UI_CONFIG.popup.height - UI_CONFIG.popup.margin, UI_CONFIG.popup.width, UI_CONFIG.popup.height, 'white', '#000000', 2);
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 24px Arial';
        ctx.fillText(RNGvalue, UI_CONFIG.popup.margin + (UI_CONFIG.popup.width / 2) - 10, canvas.height - UI_CONFIG.popup.height - UI_CONFIG.popup.margin + (UI_CONFIG.popup.height / 2));
        let suit;
        if (RNGvalue <= 25) suit = 'd';
        else if (RNGvalue <= 50) suit = 'h';
        else if (RNGvalue <= 75) suit = 'c';
        else suit = 's';
        ctx.fillStyle = suitsColors[suit];
        ctx.font = 'bold 48px Arial';
        ctx.fillText(suitsSymbols[suit], UI_CONFIG.popup.margin + (UI_CONFIG.popup.width / 2) + 20, canvas.height - UI_CONFIG.popup.height - UI_CONFIG.popup.margin + (UI_CONFIG.popup.height / 2));

    }
    //Draw Range Matrix
    function renderRangeMatrix(ranges, actions) {
        ctx.fillStyle = "#1e1e1e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (!ranges) return;

        const colorsf_multi = Array.from({ length: 13 }, () =>
            Array.from({ length: 13 }, () =>
                Array(actions.length).fill(0)
            )
        );
        for (let i = 0; i < 1326; i++) {
            for (let j = 0; j < ranges.length; j++) {
                colorsf_multi[cardOrderX[i]][cardOrderY[i]][j] += parseFloat(ranges[j][i]);
            }
        }

        const size = 34;
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 13; j++) {
                const x = j * size;
                const y = i * size;
                let tempX = 0;
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1; // Set border thickness
                ctx.strokeRect(j * size, i * size, size, size);
                for (let k = 0; k < actions.length; k++) {
                    const tempWidth = colorsf_multi[i][j][k] / heightsMax[i][j];
                    ctx.fillStyle = getActionColor(actions[k]);
                    ctx.fillRect(x + 1 + Math.ceil(tempX * (size - 2)), y + 1, Math.ceil((size - 2) * tempWidth), (size - 2));
                    tempX += tempWidth;
                }

                // Logic for Rank Labels (AA, AKs, AKo)
                let label = (j > i) ? ranks[i] + ranks[j] + 's' : (i === j) ? ranks[i] + ranks[j] : ranks[j] + ranks[i] + 'o';
                ctx.fillStyle = 'white';
                ctx.font = '14px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(label, x + size / 2, y + size / 2);
            }
        }

        for (let i = 0; i < ranges.length; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(446, i * 30 + 7, 118, 26);
            ctx.strokeStyle = 'gray';
            ctx.lineWidth = 2; // Set border thickness
            ctx.strokeRect(446, i * 30 + 7, 118, 26);
            ctx.fillStyle = getActionColor(actions[i]);
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(actions[i], 500, i * 30 + 22);
        }
    }


    function loadNewQuiz() {
        if (!rows) return printText('Error loading ranges.');

        // 1. Get Selected Quiz Types
        const quizCheckboxes = [
            { id: 'RFI', el: RFI_Checkbox },
            { id: 'BBDEF', el: BBDEF_Checkbox },
            { id: 'SBDEF', el: SBDEF_Checkbox },
            { id: 'IP3BET', el: IP3BET_Checkbox },
            { id: 'VS3BET', el: VS3BET_Checkbox },
            { id: 'SRP', el: SRP_Checkbox }

        ];

        const validQuizTypes = quizCheckboxes
            .filter(cb => cb.el.checked)
            .map(cb => cb.id);

        if (validQuizTypes.length === 0) return;

        // 2. Filter rows and pick a random one
        const eligibleRows = rows.filter(row => validQuizTypes.includes(getRowData(row, "QuizType")));
        if (eligibleRows.length === 0) return;

        const randomRow = eligibleRows[Math.floor(Math.random() * eligibleRows.length)];

        // 3. Pick a random hand from the range
        const quizRangeArr = getRowData(randomRow, "QuizRange").split(" ");
        const validHandIndices = quizRangeArr
            .map((val, idx) => val != 0 ? idx : null)
            .filter(idx => idx !== null);

        const randomHandIndex = validHandIndices[Math.floor(Math.random() * validHandIndices.length)];

        // 4. Process Actions & Frequencies
        let actions = [], handFreqs = [], globalCombos = [], popupRanges = [];

        for (let i = 1; i <= 10; i++) { // Assuming max 10 actions
            const actionName = getRowData(randomRow, `Action${i}`);
            const rangeStr = getRowData(randomRow, `Range${i}`);

            if (!actionName || !rangeStr) break;

            const range = rangeStr.split(" ");
            const totalCombos = range.reduce((sum, val) => sum + parseFloat(val), 0);

            actions.push(actionName);
            handFreqs.push(parseFloat(range[randomHandIndex]) * 100.0);
            globalCombos.push(Math.round(totalCombos * 10) / 10);
            popupRanges.push(range);
        }

        // 5. Update State
        popupLastHand = structuredClone(popupCurrentHand);
        popupCurrentHand.ranges = popupRanges;
        popupCurrentHand.actions = actions;

        question = {
            rangeName: getRowData(randomRow, 'RangeName'),
            quizText: getRowData(randomRow, 'QuizText'),
            handFreqs,
            actions,
            globalCombos
        };

        // 6. Table Setup (Rotates positions so Hero is at index 3)
        const positions = ["UTG", "HJ", "CO", "BTN", "SB", "BB"];
        const invested = getRowData(randomRow, "Invested").split(" ");
        const heroPos = getRowData(randomRow, "Position");

        const shiftAmount = (positions.indexOf(heroPos) - 3 + 6) % 6;
        for (let i = 0; i < shiftAmount; i++) {
            positions.push(positions.shift());
            invested.push(invested.shift());
        }

        Object.assign(tableSetup, {
            heroPos,
            invested,
            positions,
            holdingCards: getRowData(randomRow, "HoldingCards"),
            board: getRowData(randomRow, "Board"),
            heroHand: cardOrder[randomHandIndex]
        });

        loadNextQuestion();
        renderTable();

    }

    function loadNextQuestion() {
        if (!question || !question.handFreqs?.length) {
            loadNewQuiz();
            return;
        }

        RNGvalue = Math.floor(Math.random() * 100) + 1;
        quizQuestionDiv.textContent = `${question.rangeName} - ${question.quizText}`;
        buttonsDiv.replaceChildren(); // Faster than innerHTML = ""

        let currentThreshold = 100;
        let foundCorrectAction = false;

        // Create Action Buttons
        question.actions.forEach((action, index) => {
            const freq = question.handFreqs[index];
            const btn = document.createElement('button');

            // Logic: Is RNG within this specific slice?
            const isCorrect = (RNGvalue > (currentThreshold - freq) && RNGvalue <= currentThreshold);
            if (isCorrect) foundCorrectAction = true;

            btn.textContent = action;
            btn.dataset.isCorrect = isCorrect;


            Object.assign(btn.style, { backgroundColor: getActionColor(action), fontWeight: 'bold', fontSize: '20px' });
            btn.onclick = () => checkIfCorrectAction(btn);

            buttonsDiv.appendChild(btn);
            currentThreshold -= freq;
        });

        // Add the "Default" button (Fold or Not in Range)
        const extraBtn = document.createElement('button');
        const hasFold = question.actions.includes('Fold');

        extraBtn.textContent = hasFold ? "Not in range" : "Fold";
        extraBtn.dataset.isCorrect = !foundCorrectAction; // It's correct if nothing else was
        extraBtn.style.backgroundColor = hasFold ? 'gray' : 'blue';
        extraBtn.style.fontWeight = 'bolder';
        extraBtn.onclick = () => checkIfCorrectAction(extraBtn);

        buttonsDiv.appendChild(extraBtn);
    }

    function checkIfCorrectAction2(clickedButton) {
        let htmlString = '';

        question.handFreqs.forEach((number, index) => {
            let color = 'red';
            if (question.actions[index] == "Call" || question.actions[index] == "Check") { color = 'green'; }
            else if (question.actions[index] == "Fold") { color = 'blue'; }
            else if (typeof question.actions[index] === 'undefined' || question.actions[index] == null) {
                color = 'gray';
            }
            htmlString += `<span style="padding: 4px 4px; background-color: ${color}; color: black; font-weight: bolder; width: 100px;  display: inline-block;  border: 1px solid black;"> ${Math.round(number * 100) / 100} </span> `;
        });

        if (clickedButton.dataset.isCorrect === "true") {
            feedback.innerHTML = '<span style="color: green;">Correct!</span> ' + htmlString + '(RNG: ' + RNGvalue + ") <br>";
            loadNewQuiz();
        } else {
            feedback.innerHTML = '<span style="color: Red;">Wrong!</span> ' + htmlString + '(RNG: ' + RNGvalue + ") <br>";

        }
    }
    function checkIfCorrectAction(clickedButton) {
        const isCorrect = clickedButton.dataset.isCorrect === "true";

        const freqDisplay = question.handFreqs.map((freq, i) => {
            const color = getActionColor(question.actions[i]);
            return `<span style="padding: 4px; background-color: ${color};color: black; border: 1px solid #000; display: inline-block; width: 60px; text-align: center;">${Math.round(freq)}%</span>`;
        }).join(' ');

        feedback.innerHTML = `
        <b style="color: ${isCorrect ? 'green' : 'red'}">${isCorrect ? 'Correct!' : 'Wrong!'}</b> 
        ${freqDisplay} (RNG: ${RNGvalue})
    `;

        if (isCorrect) loadNewQuiz();
    }
});
