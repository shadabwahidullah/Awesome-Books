class Booklist {// eslint-disable-line no-unused-vars
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author, id) {
    this.books.push({ title, author, id });
    localStorage.setItem('books', JSON.stringify(this.books));
    return { title, author, id };
  }

  removeBook(element, id, parent) {
    if (element.classList.contains('remove')) {
      const removeItem = element.parentElement;
      this.books = this.books.filter((book) => book.id !== id);
      removeItem.remove();
      localStorage.setItem('books', JSON.stringify(this.books));
    }
    parent.style.display = this.books.length === 0 ? 'none' : 'block';
  }
}
