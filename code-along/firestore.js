document.addEventListener('DOMContentLoaded', async function(event) {
  let db = firebase.firestore()
  
  
  // Step 1: Make the world's tiniest to-do app

  let form = document.querySelector('form')
  form.addEventListener('submit', async function(event) {
    event.preventDefault()
    //console.log('todo submitted')

    let todoText = document.querySelector('#todo').value
    console.log(todoText)

    if (todoText.length > 0) {
      let todoList = document.querySelector('.todos')
      todoList.insertAdjacentHTML('beforeend', `
      <div class="py-4 text-xl border-b-2 border-purple-500 w-full">${todoText}</div>
      `)

      // Step 3: Add code to Step 1 to add todo to Firestore
      let docRef = await db.collection('todos').add({
        text: todoText
      })

      let todoId = docRef.id
      console.log(`new todo created: ${todoId}`)
    }
    
    document.querySelector('#todo').value = ''

  })


  // Step 2: Read existing to-dos from Firestore
  let querySnapshot = await db.collection('todos').get()
  console.log(querySnapshot.size)

  let todos = querySnapshot.docs
  //console.log(todos)

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i]
    console.log(todo)

    let todoId = todo.id
    console.log(todoId)

    let todoData = todo.data()
    console.log(todoData)

    let todoText = todoData.text // .text gets something out of an object


    let todoList = document.querySelector('.todos')
    todoList.insertAdjacentHTML('beforeend', `
    
    `)

    if (todoText.length > 0) {
      let todoList = document.querySelector('.todos')
      todoList.insertAdjacentHTML('beforeend', `
      <div class="py-4 text-xl border-b-2 border-purple-500 w-full">${todoText}</div>
      `)
    }

  }

  
  // Step 4: Add code to allow completing todos
})