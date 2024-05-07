document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class "header"
    var headers = document.querySelectorAll('.conceptHeader');
  
    // Loop through each header and add click event listener
    headers.forEach(function(header) {
      header.addEventListener('click', function() {
        // hideAllConceptDivs();
        // Get the content element which is the next sibling
        var content = this.nextElementSibling;
  
        // Toggle the display of the content
        if (content.style.display === 'none') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });

  function hideAllConceptDivs(){
    var contents = document.querySelectorAll('.conceptDiv');

    // Loop through each content element and hide it
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
  }