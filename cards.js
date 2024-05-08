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
        <text x="25" y="17" fill="${color}" font-size="20" font-family="Arial">${suit}</text>
        <text x="11" y="40" fill="${color}" font-size="33" font-family="Arial">${rank}</text>
        <text x="15" y="42" fill="${color}" font-size="20" font-family="Arial" transform="rotate(180, 15, 42)">${suit}</text>
      </svg>
      `;
        
    // Set SVG content
    element.innerHTML = svgMarkup;
  }
const svgCards = document.querySelectorAll('.svg_card');
svgCards.forEach(function(element) {
    convertToSvgCard(element);
});