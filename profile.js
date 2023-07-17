// JavaScript kód a státusz kezeléséhez
const statusIndicator = document.getElementById('status-indicator');

// Állapot változtatása
function changeStatus(status) {
    // Állapot alapján szín kiválasztása
    let color;
    switch (status) {
      case 'active':
        color = '#4caf50';
        break;
      case 'offline':
        color = '#9e9e9e';
        break;
      case 'online':
        color = '#2196f3';
        break;
      case 'away':
        color = '#ff9800';
        break;
      default:
        color = '#000000';
        break;
    }
  
    // Státusz jelzés színének beállítása
    statusIndicator.style.backgroundColor = color;
  
    // Státusz mentése a LocalStorage-ba
    localStorage.setItem('status', status);
  }
  
  // Oldal betöltésekor ellenőrizze a LocalStorage-ban tárolt státuszt
  document.addEventListener('DOMContentLoaded', () => {
    const savedStatus = localStorage.getItem('status');
    if (savedStatus) {
      changeStatus(savedStatus);
    }
  });
  
  // Állapot változtatása gomb eseménykezelő
  const statusButtons = document.querySelectorAll('.status-button');
  statusButtons.forEach(button => {
    button.addEventListener('click', () => {
      const status = button.dataset.status;
      changeStatus(status);
    });
  });

  // profile.js
document.addEventListener("DOMContentLoaded", function() {
  // Adatok inicializálása
  var username = localStorage.getItem("username");
  var followers = 0;
  var following = 0;
  var posts = 0;
  var likes = 0;
  var status = "active";

  // Elemek kiválasztása
  var usernameElement = document.getElementById("username");
  var followersElement = document.getElementById("followers");
  var followingElement = document.getElementById("following");
  var postsElement = document.getElementById("posts");
  var likesElement = document.getElementById("likes");
  var statusIndicator = document.getElementById("status-indicator");
  var statusButtons = document.getElementsByClassName("status-button");
  var createPostButton = document.getElementById("create-post-btn");

  // Adatok beállítása
  usernameElement.textContent = username;
  followersElement.textContent = followers;
  followingElement.textContent = following;
  postsElement.textContent = posts;
  likesElement.textContent = likes;
  setStatus(status);

  // Státusz gombok eseménykezelője
  for (var i = 0; i < statusButtons.length; i++) {
    statusButtons[i].addEventListener("click", function() {
      var newStatus = this.getAttribute("data-status");
      setStatus(newStatus);
    });
  }

  // Státusz beállítása
  function setStatus(newStatus) {
    status = newStatus;
    updateStatusIndicator();

    // Lokális tárolás
    localStorage.setItem("status", status);
  }

  // Státuszjelző frissítése
  function updateStatusIndicator() {
    statusIndicator.className = "status-indicator " + status;
  }

  // Post létrehozás eseménykezelője
  createPostButton.addEventListener("click", function() {
    var newPost = {
      id: Date.now(),
      content: "Új bejegyzés",
      date: new Date().toLocaleString()
    };

    // Lokális tárolás
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    // Bejegyzések számlálójának frissítése
    postsElement.textContent = posts.length;
  });
});

  
