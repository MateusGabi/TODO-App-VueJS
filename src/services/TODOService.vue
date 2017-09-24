<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAkww8x2nbDwsB9MjUltMn43Erft3LVYCE',
  authDomain: 'todo-app-b2a7b.firebaseapp.com',
  databaseURL: 'https://todo-app-b2a7b.firebaseio.com',
  projectId: 'todo-app-b2a7b',
  storageBucket: 'todo-app-b2a7b.appspot.com',
  messagingSenderId: '551448276957'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let todosRef = db.ref('todos')

export default {
  getRef: () => {
    return todosRef
  }
}
</script>