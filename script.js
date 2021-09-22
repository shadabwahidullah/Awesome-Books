const booksList = new Booklist();// eslint-disable-line no-undef

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.btnAdd');
const list = document.querySelector('.booklist');

function createBook({ title, author, id }) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('row');
  const titleHeader = document.createElement('h3');
  titleHeader.classList.add('col');
  const authorHeader = document.createElement('h3');
  authorHeader.classList.add('col');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('col');
  removeBtn.id = id;
  const hrLine = document.createElement('hr');

  titleHeader.innerHTML = `${title} by`;
  authorHeader.innerText = author;
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove');

  divWrapper.append(titleHeader, authorHeader, removeBtn, hrLine);
  list.appendChild(divWrapper);

  removeBtn.addEventListener('click', (e) => {
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
