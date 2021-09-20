const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.btnAdd');
const list = document.querySelector('.booklist');

const books = JSON.parse(localStorage.getItem('books')) || [];

// function to add books
function addBook(title, author) {
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author };
}

// function to remove book
function removeBook(element) {
  if (element.classList.contains('remove')) {
    const removeItem = element.parentElement;
    books.splice(removeItem, 1);
    removeItem.remove();
    localStorage.setItem('books', JSON.stringify(books));
  }
}

function createBook({ title, author }) {
  const divWrapper = document.createElement('div');
  const titleHeader = document.createElement('h3');
  const authorHeader = document.createElement('h3');
  const removebtn = document.createElement('button');
  const hrLine = document.createElement('hr');

  titleHeader.innerText = title;
  authorHeader.innerText = author;
  removebtn.textContent = 'Remove';
  removebtn.classList.add('remove');

  divWrapper.append(titleHeader, authorHeader, removebtn, hrLine);
  list.appendChild(divWrapper);

  removebtn.addEventListener('click', (e) => {
    const removeItem = e.target;
    removeBook(removeItem);
  });
}

books.forEach(createBook);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = addBook(title.value, author.value);
  createBook(newBook);
  title.value = '';
  author.value = '';
  title.focus();
});
