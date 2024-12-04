document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
const canvasHeight = 100;

const possibleHeaders = ['Fold', 'Call', 'Check', 'B33', 'B66', 'B130', 'R35', 'R55', 'R83', 'R120', 'R50', 'R100', 'R150', 'AI'];
const order = 'AKQJT98765432';
const setCards = ['A', 'K', 'Q', 'J', 'T', '9'];



function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const csvData = event.target.result;
        parseDataFromCSV(csvData, file.name);
    };

    reader.readAsText(file);
}


function parseDataFromCSV(csvData, fileName) {
    const parsedData = parseCSV(csvData, false);
    const parsedDataMiddleCardSort = parseCSV(csvData, true);
    drawCanvas(document.getElementById('csvCanvas'), parsedData, [], true, 1);
    drawCanvas(document.getElementById('csvCanvasRainbowDisconnected'), parsedData, ['nopair', 'rainbow', 'disconnected'], true, 6);
    drawCanvas(document.getElementById('csvCanvasRainbowConnected'), parsedData, ['nopair', 'rainbow', 'connected'], true, 6);
    drawCanvas(document.getElementById('csvCanvasTwotoneDisconnected'), parsedData, ['nopair', 'twotone', 'disconnected'], true, 2);
    drawCanvas(document.getElementById('csvCanvasTwotoneConnected'), parsedData, ['nopair', 'twotone', 'connected'], true, 2);
    drawCanvas(document.getElementById('csvCanvasMonotone'), parsedData, ['monotone'], true, 4);
    drawCanvas(document.getElementById('csvCanvasPairedRainbow'), parsedDataMiddleCardSort, ['paired', 'rainbow'], false, 5);
    drawCanvas(document.getElementById('csvCanvasPairedTwotone'), parsedDataMiddleCardSort, ['paired', 'twotone'], false, 5);
    drawCanvas(document.getElementById('csvCanvasPairedTrips'), parsedData, ['trips'], true, 10);

    //Sets tests
    drawCanvas(document.getElementById('csvCanvasNineSets'), parsedData, ['ninesets'], true, 10);
    drawCanvas(document.getElementById('csvCanvasSixSets'), parsedData, ['sixsets'], true, 10);
    drawCanvas(document.getElementById('csvCanvasThreeSets'), parsedData, ['threesets'], true, 10);
    drawCanvas(document.getElementById('csvCanvasZeroSets'), parsedData, ['zerosets'], true, 10);


    document.getElementById('fileNameDisplay').textContent = fileName.split('-')[1].replace('.csv', '');
}

function parseCSV(csv, sortByMiddleCard) {


    const rows = csv.split('\n').map(row => row.split(','));

    const headers = rows[0];

    // Get the indices for the columns you are interested in
    const flopIndex = Math.max(headers.indexOf('flop'), headers.indexOf('flop\r'));

    // Find indices dynamically
    const indices = {};
    possibleHeaders.forEach(header => {
        const index = headers.indexOf(header);
        if (index !== -1) {
            indices[header] = index;
        }
    });
    const data = rows.slice(1).map(row => {
        const theFlop = row[flopIndex].replace('\r', '');
        const dataObj = {};
        Object.keys(indices).forEach(header => {
            // dataObj[header] = parseFloat(row[indices[header]].replace('%', ''));
            dataObj[header] = row[indices[header]].includes('%') ? parseFloat(row[indices[header]].replace('%', '')) : parseFloat(row[indices[header]] * 100);

        });
        dataObj.flop = theFlop;
        dataObj.monotone = (theFlop[1] == theFlop[3] && theFlop[1] == theFlop[5]);
        dataObj.twotone = (theFlop[1] == theFlop[3] && theFlop[1] != theFlop[5]) || (theFlop[1] == theFlop[5] && theFlop[1] != theFlop[3]) || (theFlop[3] == theFlop[5] && theFlop[1] != theFlop[3]);
        dataObj.rainbow = (theFlop[1] != theFlop[3] && theFlop[1] != theFlop[5] & theFlop[3] != theFlop[5]);
        dataObj.trips = (theFlop[0] == theFlop[2] && theFlop[2] == theFlop[4]);
        dataObj.paired = (theFlop[0] == theFlop[2] && theFlop[0] != theFlop[4]) || (theFlop[0] == theFlop[4] && theFlop[0] != theFlop[2]) || (theFlop[2] == theFlop[4] && theFlop[0] != theFlop[2]);
        dataObj.nopair = (theFlop[0] != theFlop[2] && theFlop[2] != theFlop[4]);
        dataObj.connected = hasStraightPossibility(theFlop);
        dataObj.disconnected = !hasStraightPossibility(theFlop);
        // dataObj.ninesets = setCards.includes(theFlop[0]) && setCards.includes(theFlop[2]) && setCards.includes(theFlop[4]) && dataObj.nopair && !dataObj.monotone && dataObj.disconnected;
        // dataObj.sixsets = setCards.includes(theFlop[0]) && setCards.includes(theFlop[2]) && !setCards.includes(theFlop[4]) && dataObj.nopair && !dataObj.monotone && dataObj.disconnected;
        // dataObj.threesets = setCards.includes(theFlop[0]) && !setCards.includes(theFlop[2]) && !setCards.includes(theFlop[4]) && dataObj.nopair && !dataObj.monotone && dataObj.disconnected;
        // dataObj.zerosets = !setCards.includes(theFlop[0]) && !setCards.includes(theFlop[2]) && !setCards.includes(theFlop[4]) && dataObj.nopair && !dataObj.monotone && dataObj.disconnected;

        return dataObj;
    });
    // Sorting based on custom order for the first, third, and fourth letters of the "flop" column

    const orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }

    function getOrderIndex(char) {
        return orderMap[char] !== undefined ? orderMap[char] : -1;
    }

    function padIndex(index) {
        return index.toString().padStart(2, '0');  // Adjusted padding for 2 digits
    }


    if (sortByMiddleCard) {
        data.sort((a, b) => {
            const aKey = `${padIndex(getOrderIndex(a.flop[2]))}${padIndex(getOrderIndex(a.flop[0]))}${padIndex(getOrderIndex(a.flop[4]))}`;
            const bKey = `${padIndex(getOrderIndex(b.flop[2]))}${padIndex(getOrderIndex(b.flop[0]))}${padIndex(getOrderIndex(b.flop[4]))}`;
            return aKey.localeCompare(bKey);
        });
    } else {
        data.sort((a, b) => {
            const aKey = `${padIndex(getOrderIndex(a.flop[0]))}${padIndex(getOrderIndex(a.flop[2]))}${padIndex(getOrderIndex(a.flop[4]))}`;
            const bKey = `${padIndex(getOrderIndex(b.flop[0]))}${padIndex(getOrderIndex(b.flop[2]))}${padIndex(getOrderIndex(b.flop[4]))}`;
            return aKey.localeCompare(bKey);
        });
    }

    return data;
}

// Color configuration
const colorConfig = {
    Check: 'green',
    Fold: 'dodgerblue',
    Call: 'Green',
    B33: 'orange',
    B66: 'red',
    B130: 'purple',
    AI: 'blue',
    R35: 'rgb(255, 132, 132)',
    R55: 'rgb(252, 96, 96)',
    R83: 'rgb(252, 68, 68)',
    R120: 'rgb(255, 0, 0)',
    R50: 'rgb(252, 96, 96)',
    R100: 'rgb(252, 68, 68)',
    R150: 'rgb(255, 0, 0)',
};

function drawCanvas(canvas, data, properties, drawHighCard, colWidth) {
    const ctx = canvas.getContext('2d');
    canvas.tooltipData = [];

    let currentFirstLetter = '';
    let x = 0;
    data.forEach((row) => {
        let drawRow = true;
        properties.forEach(property => {
            if (!row[property]) {
                drawRow = false;
            }
        });
        if (drawRow) {
            // Draw the first letter of the "flop" column under the canvas
            const firstLetter = drawHighCard ? row.flop[0] : row.flop[2];
            if (firstLetter !== currentFirstLetter && currentFirstLetter != '') {
                ctx.fillStyle = 'white';
                ctx.font = '14px Arial';
                ctx.fillText(firstLetter, x, canvasHeight + 14);

                // // Draw a black pixel line
                ctx.fillRect(x, 0, 1, canvasHeight);
                ctx.fillStyle = 'white';
                canvas.tooltipData[x] = firstLetter + "-high boards";
                x++;
            }
            currentFirstLetter = firstLetter;
            //Setup tooltip




            let currentHeight = canvasHeight;
            let toolTipTextTemp = "<tr><td>Flop:</td><td>" + row.flop + "</td></tr>";
            for (let index = possibleHeaders.length - 1; 0 <= index; index--) {
                const header = possibleHeaders[index];
                if (typeof row[header] !== 'undefined') {
                    ctx.fillStyle = colorConfig[header];
                    const headerHeight = row[header] / 100 * canvasHeight;
                    currentHeight -= headerHeight;
                    ctx.fillRect(x, currentHeight, colWidth, headerHeight);
                    toolTipTextTemp += "<tr><td>" + header + "</td><td>" + row[header].toFixed(1) + "%</td></tr>";

                }
            }
            let nextX = x;
            while (nextX < x + colWidth) {
                canvas.tooltipData[nextX] = toolTipTextTemp;
                nextX++;
            }

            x += colWidth;
        }

    });
    ctx.fillStyle = 'black';
    ctx.font = '18px Arial';
    addHoverEffect(data, canvas);
    // ctx.fillText(x, 50, 60);
}

function addHoverEffect(data, canvas) {
    const tooltip = document.getElementById('tooltip');

    canvas.addEventListener('mousemove', function (event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const index = Math.floor(x);

        if (index >= 0 && index < data.length) {
            const row = data[index];
            tooltip.style.color = 'black';
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX + 10}px`;
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.innerHTML = `<table>${canvas.tooltipData[x]}</table>`;
        } else {
            tooltip.style.display = 'none';
        }
    });

    canvas.addEventListener('mouseout', function () {
        tooltip.style.display = 'none';
    });
}

function hasStraightPossibility(flop) {
    const ranks = flop.split('').filter((_, index) => index % 2 === 0); // Extract ranks (1st, 3rd, 5th characters)
    const rankValues = ranks.map(rank => {
        switch (rank) {
            case 'A': return 14;
            case 'K': return 13;
            case 'Q': return 12;
            case 'J': return 11;
            case 'T': return 10;
            default: return parseInt(rank);
        }
    });

    rankValues.sort((a, b) => a - b);

    // Check possible straights
    // A2345 or 23456 or 34567 etc. up to 9TJQK
    const possibleStraights = [
        [2, 3, 4, 5, 14],  // A2345
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7],
        [4, 5, 6, 7, 8],
        [5, 6, 7, 8, 9],
        [6, 7, 8, 9, 10],
        [7, 8, 9, 10, 11],  // 789TJ
        [8, 9, 10, 11, 12], // 89TJQ
        [9, 10, 11, 12, 13],// 9TJQK
        [10, 11, 12, 13, 14]// TJQKA
    ];

    for (const straight of possibleStraights) {
        const match = straight.filter(value => rankValues.includes(value)).length >= 3;
        if (match) return true;
    }

    return false;
}


//File selector

// Example data structure mapping selected buttons to file lists
const fileMap = {
    //Simple
    //3Bet IP
    'Simple_3Bet_CO_BU': ['NL500 Simple 2.5x 3b_GTO 3Bet IP - 3Bet CO vs BU.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B66.csv'],
    'Simple_3Bet_MP_BU': ['NL500 Simple 2.5x 3b_GTO 3Bet IP - 3Bet MP vs BU.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet MP vs BU vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B66.csv'],
    'Simple_3Bet_MP_CO': ['NL500 Simple 2.5x 3b_GTO 3Bet IP - 3Bet MP vs CO.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet MP vs CO vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B66.csv'],
    'Simple_3Bet_UTG_BU': ['NL500 Simple 2.5x 3b_GTO 3Bet IP - 3Bet UTG vs BU.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet UTG vs BU vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B66.csv'],
    'Simple_3Bet_UTG_CO': ['NL500 Simple 2.5x 3b_GTO 3Bet IP - 3Bet UTG vs CO.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet UTG vs CO vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B66.csv'],
    'Simple_3Bet_UTG_MP': ['NL500 Simple 2.5x 3b_GTO 3Bet IP - 3Bet UTG vs MP.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet UTG vs MP vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet IP vs Cbet - 3Bet CO vs BU vs B66.csv'],
    //3Bet OOP
    'Simple_3Bet_UTG_BB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP BB - 3Bet UTG vs BB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - UTG vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - UTG vs BB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - UTG vs BB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - UTG vs BB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - UTG vs BB vs X B66.csv'],
    'Simple_3Bet_MP_BB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP BB - 3Bet MP vs BB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - MP vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - MP vs BB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - MP vs BB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - MP vs BB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - MP vs BB vs X B66.csv'],
    'Simple_3Bet_CO_BB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP BB - 3Bet CO vs BB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - CO vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - CO vs BB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - CO vs BB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - CO vs BB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - CO vs BB vs X B66.csv'],
    'Simple_3Bet_BU_BB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP BB - 3Bet BU vs BB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - BU vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Cbet - BU vs BB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - BU vs BB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - BU vs BB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP BB vs Check - BU vs BB vs X B66.csv'],
    'Simple_3Bet_UTG_SB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP SB - 3Bet UTG vs SB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - UTG vs SB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - UTG vs SB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - UTG vs SB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - UTG vs SB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - UTG vs SB vs X B66.csv'],
    'Simple_3Bet_MP_SB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP SB - 3Bet MP vs SB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - MP vs SB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - MP vs SB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - MP vs SB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - MP vs SB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - MP vs SB vs X B66.csv'],
    'Simple_3Bet_CO_SB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP SB - 3Bet CO vs SB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - CO vs SB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - CO vs SB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - CO vs SB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - CO vs SB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - CO vs SB vs X B66.csv'],
    'Simple_3Bet_BU_SB': ['NL500 Simple 2.5x 3b_GTO 3Bet OOP SB - 3Bet BU vs SB.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - BU vs SB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Cbet - BU vs SB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - BU vs SB vs Check.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - BU vs SB vs X B33.csv', 'NL500 Simple 2.5x 3b_GTO 3Bet OOP SB vs Check - BU vs SB vs X B66.csv'],
    //3Bet BvB
    'Simple_3Bet_SB_BB': ['NL500 Simple 2.5x 3b_GTO BvB 3Bet - BvB 3Bet Cbet.csv', 'NL500 Simple 2.5x 3b_GTO BvB 3Bet - BvB 3Bet vs B33.csv', 'NL500 Simple 2.5x 3b_GTO BvB 3Bet - BvB 3Bet vs B66.csv'],
    //SRP IP
    'Simple_SRP_UTG_BB': ['NL500 Simple 2.5x 3b_GTO SRP - SRP UTG vs BB.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP UTG vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP UTG vs BB vs B66.csv'],
    'Simple_SRP_MP_BB': ['NL500 Simple 2.5x 3b_GTO SRP - SRP MP vs BB.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP MP vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP MP vs BB vs B66.csv'],
    'Simple_SRP_CO_BB': ['NL500 Simple 2.5x 3b_GTO SRP - SRP CO vs BB.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP CO vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP CO vs BB vs B66.csv'],
    'Simple_SRP_BU_BB': ['NL500 Simple 2.5x 3b_GTO SRP - SRP BU vs BB.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP BTN vs BB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO SRP vs CBet - SRP BTN vs BB vs B66.csv'],
    //SRP BvB
    'Simple_SRP_SB_BB': ['NL500 Simple 2.5x 3b_GTO BvB SRP - SRP BvB CBet.csv', 'NL500 Simple 2.5x 3b_GTO BvB SRP - SRP BvB vs X.csv', 'NL500 Simple 2.5x 3b_GTO BvB SRP - SRP BvB vs B33.csv', 'NL500 Simple 2.5x 3b_GTO BvB SRP - SRP BvB vs B66.csv', 'NL500 Simple 2.5x 3b_GTO BvB SRP - SRP BvB vs B130.csv'],


    // Add more mappings as needed
};

function selectButton(button) {
    const group = button.parentElement;
    const buttons = group.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    updateGroup5();
}

function updateGroup5() {
    const group5 = document.getElementById('group5');
    group5.innerHTML = '';

    const selectedButtons = document.querySelectorAll('.button-group button.selected');
    const selectedKeys = Array.from(selectedButtons).map(button => button.textContent).join('_');

    if (fileMap[selectedKeys]) {
        fileMap[selectedKeys].forEach(fileName => {
            const newButton = document.createElement('button');
            newButton.textContent = fileName;
            newButton.onclick = function () { fetchLocalCSVFile(fileName); };

            group5.appendChild(newButton);
        });
    } else {
        const newButton = document.createElement('button');
        newButton.textContent = 'No files';
        group5.appendChild(newButton);
    }
}

function fetchLocalCSVFile(fileName) {
    fetch('https://kebabserver.github.io/kebab/FlopReports/CSVs/' + fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Process the CSV data (e.g., parse into an array)
            parseDataFromCSV(data, fileName);
            // Add your custom functionality here
        })
        .catch(error => {
            console.error('Error fetching CSV file:', error);
        });
}

// Initial selection
document.getElementById('group1').querySelector('button').click();
document.getElementById('group2').querySelector('button').click();
document.getElementById('group3').querySelector('button').click();
document.getElementById('group4').querySelector('button').click();
document.getElementById('group5').querySelector('button').click();

