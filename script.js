const booksList = new Booklist(); // eslint-disable-line no-undef

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.btnAdd');
const list = document.querySelector('.booklist');
const theList = document.querySelector('.theList');
const theForm = document.querySelector('.theForm');
const theContact = document.querySelector('.theContact');
const listItem = document.getElementById('listItem');
const newForm  = document.getElementById('newForm');
const contactInfo = document.getElementById('contactInfo');


function createBook({ title, author, id }) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add(
    'row',
    'm-1',
    'justify-content-center',
    'custom-row',
  );
  const titleHeader = document.createElement('h3');
  titleHeader.classList.add('col-sm-9', 'text-start');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('col-sm-3');
  removeBtn.id = id;

  titleHeader.innerHTML = `"${title}" by ${author}`;
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove', 'btn-danger', 'rounded');

  divWrapper.append(titleHeader, removeBtn);
  list.appendChild(divWrapper);

  removeBtn.addEventListener('click', (e) => {
    const removeItem = e.target;
    booksList.removeBook(removeItem, removeItem.id, removeItem.parentElement.parentElement);
  });

  list.style.display = booksList.books.length === 0 ? 'none' : 'block';
}

list.style.display = booksList.books.length === 0 ? 'none' : 'block';

booksList.books.forEach(createBook);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (title.validity.valueMissing) {
    title.setCustomValidity('Please enter title!');
    title.reportValidity();
  } else if (author.validity.valueMissing) {
    author.setCustomValidity("Please enter author's name");
    author.reportValidity();
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

listItem.addEventListener('click', (e) => {
  e.preventDefault();
  theList.classList.remove('hidden');
  theForm.classList.add('hidden');
  theContact.classList.add('hidden');
})

newForm.addEventListener('click', (e) => {
  e.preventDefault();

  theList.classList.add('hidden');
  theForm.classList.remove('hidden');
  theContact.classList.add('hidden');
})

contactInfo.addEventListener('click', (e) => {
  e.preventDefault();

  theList.classList.add('hidden');
  theForm.classList.add('hidden');
  theContact.classList.remove('hidden');
})
