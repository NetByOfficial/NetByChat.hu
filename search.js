document.addEventListener("DOMContentLoaded", function() {
  var searchButton = document.getElementById("search-button");
  var searchInput = document.getElementById("search-input");

  searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var searchTerm = searchInput.value;
    
    // Itt hajtsd végre a keresést a megadott searchTerm alapján
    console.log("Keresés: " + searchTerm);
    
    // További keresési logika...
  });
});