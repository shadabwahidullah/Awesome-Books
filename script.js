const booksList = new Booklist();// eslint-disable-line no-undef

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.btnAdd');
const list = document.querySelector('.booklist');

function createBook({ title, author, id }) {
  const divWrapper = document.createElement('div');
  const titleHeader = document.createElement('h3');
  const authorHeader = document.createElement('h3');
  const removebtn = document.createElement('button');
  removebtn.id = id;
  const hrLine = document.createElement('hr');

  titleHeader.innerText = title;
  authorHeader.innerText = author;
  removebtn.textContent = 'Remove';
  removebtn.classList.add('remove');

  divWrapper.append(titleHeader, authorHeader, removebtn, hrLine);
  list.appendChild(divWrapper);

  removebtn.addEventListener('click', (e) => {
    const removeItem = e.target;
    booksList.removeBook(removeItem, removeItem.id);
  });
}

booksList.books.forEach(createBook);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (title.validity.valueMissing && author.validity.valueMissing) {
    title.setCustomValidity('Please enter title!');
    author.setCustomValidity("Please enter author's name");
  } else {
    const newBook = booksList.addBook(
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
