const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.btnAdd');
const list = document.querySelector('.booklist');

let books = JSON.parse(localStorage.getItem('books')) || [];

// function to add books
function addBook(title, author, date) {
  books.push({ title, author, date });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author, date };
}

// let modifiedBooks;
// function to remove book
function removeBook(element) {
  if (element.classList.contains('remove')) {
    const removeItem = element.parentElement;

    books = books.filter((book) => {
      if (book.date !== element.id) {
        return true;
      }
      return false;
    });
    removeItem.remove();
    localStorage.setItem('books', JSON.stringify(books));
  }
}

function createBook({ title, author, date }) {
  const divWrapper = document.createElement('div');
  const titleHeader = document.createElement('h3');
  const authorHeader = document.createElement('h3');
  const removebtn = document.createElement('button');
  removebtn.id = date;
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

  if (title.validity.valueMissing && author.validity.valueMissing) {
    title.setCustomValidity('Please enter title!');
    author.setCustomValidity("Please enter author's name");
  } else {
    const newBook = addBook(
      title.value,
      author.value,
      new Date().getTime().toString(),
    );

    createBook(newBook);
    title.value = '';
    author.value = '';
    title.focus();
  }
});
