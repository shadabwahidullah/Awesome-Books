const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.btnAdd');
const list = document.querySelector('.booklist');

const books = [];

// function to add books
function addBook(title, author) {
  books.push({ title, author });
  return { title, author };
}

function createBook(title, author) {
  const divWrapper = document.createElement('div');
  const titleHeader = document.createElement('h3');
  const authorHeader = document.createElement('h3');

  titleHeader.innerText = title;
  authorHeader.innerText = author;

  divWrapper.append(titleHeader, authorHeader);
  list.appendChild(divWrapper);
}


// function to remove book
function removeBook(index) {

}



addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  createBook(title.value, author.value);
})
