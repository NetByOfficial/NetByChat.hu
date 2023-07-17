// Notification.js

// Fiktív értesítések a demonstrációhoz
const notifications = [
    {
      id: 1,
      content: "Új üzenet érkezett",
      timestamp: "2023-07-17 10:30",
    },
    {
      id: 2,
      content: "NetBy Bekövetett",
      timestamp: "2023-07-18 14:45",
    },
    // További értesítések...
  ];
  
  // Értesítések lekérése
  function getNotifications() {
    return notifications;
  }
  
  // Értesítések megjelenítése
  function displayNotifications() {
    const notificationList = document.getElementById("notification-list");
  
    const notifications = getNotifications();
    notifications.forEach((notification) => {
      const listItem = document.createElement("li");
      listItem.classList.add("notification-item");
  
      const content = document.createElement("p");
      content.classList.add("notification-content");
      content.textContent = notification.content;
  
      const timestamp = document.createElement("span");
      timestamp.classList.add("notification-timestamp");
      timestamp.textContent = notification.timestamp;
  
      listItem.appendChild(content);
      listItem.appendChild(timestamp);
  
      notificationList.appendChild(listItem);
    });
  }
  
  // Oldal betöltése után értesítések megjelenítése
  document.addEventListener("DOMContentLoaded", displayNotifications);
  