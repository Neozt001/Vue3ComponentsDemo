// solution
app.component('book-details', {
  props: {
    bookList: {
      type: Array,
      required: true,

    }
  },
  template:
  /*html*/
  `
  <h2>Books</h2>
      <div>       
        <ul>
          <li v-for="book in bookList" :key="book.id">
            {{ book.title }} by {{ book.author }} ({{ book.published }})
          </li>
        </ul> 
      </div>
  `
})
// solution