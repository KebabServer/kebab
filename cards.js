function convertToSvgCard(element) {
    var rank = element.getAttribute('rank');
    var suit = element.getAttribute('suit');
    var color;
    if(suit == "s"){
        color = "#000000";
        suit = "&spades;";
    } else if(suit == "c"){
        color = "#00ff00";
        suit = "&clubs;";
    }else if(suit == "h"){
        color = "#ff0000";
        suit = "&hearts;";
    }else if(suit == "d"){
        color = "#0000ff";
        suit = "&diams;";
    }
   
    
    // Construct SVG markup
    var svgMarkup = `
      <svg width="40" height="60">
        <rect x="0" y="0" width="40" height="60" fill="#ffffff" stroke="#444444" stroke-width="4" />
        <text x="25" y="17" fill="${color}" font-size="20" font-family="Lucida Console">${suit}</text>
        <text x="11" y="40" fill="${color}" font-size="33" font-family="Lucida Console">${rank}</text>
        <text x="15" y="42" fill="${color}" font-size="20" font-family="Lucida Console" transform="rotate(180, 15, 42)">${suit}</text>
      </svg>
      `;
        
    // Set SVG content
    element.innerHTML = svgMarkup;
  }

  function drawSVGCard(element, x,y, rank, suit) {
    var color;
    if(suit == "s"){
        color = "#000000";
        suit = "&spades;";
    } else if(suit == "c"){
        color = "#007700";
        suit = "&clubs;";
    }else if(suit == "h"){
        color = "#ff0000";
        suit = "&hearts;";
    }else if(suit == "d"){
        color = "#0000ff";
        suit = "&diams;";
    } if(suit=='?'){
      var svgMarkup = `     
      <rect x="${x}" y="${y}" width="40" height="60" fill="#ffffff" stroke="#444444" stroke-width="4" />
      <text x="${parseInt(x)+11}" y="${parseInt(y)+40}" fill="${color}" font-size="33" font-family="Lucida Console">${rank}</text>
    `;
      element.innerHTML += svgMarkup;
      return;
    }

    
    // Construct SVG markup
    var svgMarkup = `     
        <rect x="${x}" y="${y}" width="40" height="60" fill="#ffffff" stroke="#444444" stroke-width="4" />
        <text class="cardTextSuit" x="${parseInt(x) +25}" y="${parseInt(y)+17}" fill="${color}" >${suit}</text>
        <text class="cardText" x="${parseInt(x)+11}" y="${parseInt(y)+40}" fill="${color}">${rank}</text>
        <text class="cardTextSuit" x="${parseInt(x)+15}" y="${parseInt(y)+42}" fill="${color}"  transform="rotate(180, ${parseInt(x)+15}, ${parseInt(y)+42})">${suit}</text>
      `;
        
    // Set SVG content
    element.innerHTML += svgMarkup;
  }
  function drawBetSize(element, x,y, size) {
    var color, colorborder;
    if(size == "F"){
        color = "#9AB6EA";
        colorborder = "#6B8AC3";
    } else if(size == "C"){
        color = "#B5DE99";
        colorborder = "#6CA251";
    } else if(size == "X"){
        color = "#B5DE99";
        colorborder = "#6CA251";
    } else if(size == "B33"){
        color = "#ff6F05";
        colorborder = "#D45C00";
    } else if(size == "B50"){
        color = "#0000ff";
        colorborder = "#000080";
    } else if(size == "B75"){
        color = "#F03131";
        colorborder = " #A82424";
    } else if(size == "B150"){
        color = "#7937AB";
        colorborder = "#4B2357";
    }else {
      color = "#777777";
      colorborder = "#444444";
  }

    
    // Construct SVG markup
    var svgMarkup = `     
        <rect x="${x}" y="${y}" width="50" height="20" fill="${color}" stroke="${colorborder}" stroke-width="2" />
        <text x="${parseInt(x)+25}" y="${parseInt(y)+12}" fill="#000000"  dominant-baseline="middle" text-anchor="middle" font-size="18" font-weight="bold">${size}</text>
      `;
        
    // Set SVG content
    element.innerHTML += svgMarkup;
  }
const svgCards = document.querySelectorAll('.svg_card');
svgCards.forEach(function(element) {
    convertToSvgCard(element);
});
const svgHands = document.querySelectorAll('.svg_hand');
svgHands.forEach(function(element) {
 
  if(element.getAttribute('card-array') != null){
    var card_array = element.getAttribute('card-array').split(',');
    for (var i = 0; i < card_array.length; i += 4) {
      drawSVGCard(element, card_array[i],card_array[i+1],card_array[i+2],card_array[i+3]);
    }
  }
  if(element.getAttribute('betsize-array') == null){
    return;
  }
  var betsize_array = element.getAttribute('betsize-array').split(',');
  for (var i = 0; i < betsize_array.length; i += 3) {
    drawBetSize(element, betsize_array[i],betsize_array[i+1],betsize_array[i+2]);
  }
});

document.querySelectorAll('.inline-card').forEach(card => {
  const cardText = card.getAttribute('data-card');
  const rank = cardText.slice(0, -1);
  const suitChar = cardText.slice(-1);
  let suitSymbol;

  switch (suitChar) {
      case 'c':
          suitSymbol = '♣';
          break;
      case 'd':
          suitSymbol = '♦';
          break;
      case 'h':
          suitSymbol = '♥';
          break;
      case 's':
          suitSymbol = '♠';
          break;
      case 'x':
          suitSymbol = 'x';
          break;
      default:
          suitSymbol = '';
  }

  card.setAttribute('data-rank', rank);
  card.setAttribute('data-suit', suitSymbol);
});
