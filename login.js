// Bejelentkezés ellenőrzése
function checkLogin() {
    const username = localStorage.getItem("username");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!username || isLoggedIn !== "true") {


      window.location.href = "index.html";
    
  }
    
    
  }
  
  // Oldal betöltése után bejelentkezés ellenőrzése

  