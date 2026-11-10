// solution
app.component('book-add', {
  props: {
    headerText: {
      type: String,
      required: true
    }
  },
  template:
  /*html*/
  `
    <div>
      <h2>{{ headerText }}</h2>
      <input v-model="id" placeholder="Enter book name"></input>
      <br/>
      <input v-model="title" placeholder="Enter book title" />
      <br/>
      <input v-model="author" placeholder="Enter book author" />
      <br/>
      <input v-model="published" placeholder="Enter book published year" />
      <br/>
      <button @click="AddBook" >Add Book</button>
    </div>      
  `,
    data(){
        return {
            id:0,
            title:'',
            author:'',
            published:0
        }
    },
    methods: {
        AddBook(){
            const newBook = {
                id: this.id,
                title: this.title,
                author: this.author,
                published: this.published
            }

            this.$emit('add-book-event', newBook);
            this.id = 0;
            this.title = '';
            this.author = '';
            this.published = 0;
            console.log('Book added:', newBook);
        }
    }
})
// solution