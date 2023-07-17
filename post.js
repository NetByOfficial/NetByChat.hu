// Bejegyzés létrehozása
function createPost() {
    const postSubject = document.getElementById('post-subject').value;
    const postContent = document.getElementById('post-content').value;
    const postImage = document.getElementById('post-image').value;
    const pollOptions = getPollOptions();
  
    // Új bejegyzés objektum létrehozása
    const newPost = {
      subject: postSubject,
      content: postContent,
      image: postImage,
      poll: pollOptions,
      timestamp: new Date().toLocaleString()
    };
  
    // Mentés a LocalStorage-ba
    let posts = localStorage.getItem('posts');
    if (posts) {
      posts = JSON.parse(posts);
      posts.push(newPost);
    } else {
      posts = [newPost];
    }
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Bejegyzés hozzáadása az oldalhoz
    addPostToDOM(newPost);
  
    // Bejegyzés mezők ürítése
    document.getElementById('post-subject').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
    clearPollOptions();
  }
  
  // Szavazás opcióinak lekérdezése
  function getPollOptions() {
    const pollOptions = [];
    const optionInputs = document.querySelectorAll('.poll-option-input');
    optionInputs.forEach(input => {
      const optionValue = input.value.trim();
      if (optionValue !== '') {
        pollOptions.push(optionValue);
      }
    });
    return pollOptions;
  }
  
  // Szavazás opciók törlése
  function clearPollOptions() {
    const optionInputs = document.querySelectorAll('.poll-option-input');
    optionInputs.forEach(input => {
      input.value = '';
    });
  }
  
  // Új szavazás opció hozzáadása gomb eseménykezelő
  const addPollOptionBtn = document.getElementById('add-poll-option');
  addPollOptionBtn.addEventListener('click', () => {
    const pollOptionsContainer = document.querySelector('.poll-options-container');
    const newOptionInput = document.createElement('input');
    newOptionInput.type = 'text';
    newOptionInput.classList.add('poll-option-input');
    newOptionInput.placeholder = 'Opció';
    pollOptionsContainer.appendChild(newOptionInput);
  });
  
  // Bejegyzések betöltése a LocalStorage-ból
  function loadPosts() {
    let posts = localStorage.getItem('posts');
    if (posts) {
      posts = JSON.parse(posts);
      posts.forEach(post => {
        addPostToDOM(post);
      });
    }
  }
  
  // Bejegyzés hozzáadása a DOM-hoz
  function addPostToDOM(post) {
    const postsContainer = document.getElementById('posts-container');
  
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    const subjectElement = document.createElement('h3');
    subjectElement.textContent = post.subject;
  
    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;
  
    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = 'Bejegyzés kép';
  
    const pollElement = document.createElement('div');
    if (post.poll && post.poll.length > 0) {
      const pollTitle = document.createElement('h4');
      pollTitle.textContent = 'Szavazás (poll):';
  
      const pollOptionsList = document.createElement('ul');
      post.poll.forEach(option => {
        const optionItem = document.createElement('li');
        optionItem.textContent = option;
        pollOptionsList.appendChild(optionItem);
      });
  
      pollElement.appendChild(pollTitle);
      pollElement.appendChild(pollOptionsList);
    }
  
    const timestampElement = document.createElement('p');
    timestampElement.textContent = post.timestamp;
  
    postElement.appendChild(subjectElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(pollElement);
    postElement.appendChild(timestampElement);
  
    postsContainer.appendChild(postElement);
  }
  
  // Bejegyzések betöltése az oldal betöltésekor
  document.addEventListener('DOMContentLoaded', loadPosts);
  