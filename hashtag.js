// hashtag.js
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const hashtagList = document.getElementById('hashtag-ul');
  
    searchInput.addEventListener('keyup', function () {
      const searchTerm = searchInput.value.toLowerCase();
      const hashtags = hashtagList.getElementsByTagName('li');
  
      Array.from(hashtags).forEach(function (hashtag) {
        const text = hashtag.textContent.toLowerCase();
  
        if (text.includes(searchTerm)) {
          hashtag.classList.remove('hide');
        } else {
          hashtag.classList.add('hide');
        }
      });
    });
  });
  