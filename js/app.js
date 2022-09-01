/* function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => displayUser(data))
}


function  displayUser(users){
    const userList=document.getElementById('user-container')
  for(const user of users){
  const div=document.createElement('div')
  div.classList.add('list-Style')
  div.innerHTML=`
  <p>UserID: ${user.id} </p>
  <p>User Title: ${user.title}<P/>
  <p> User Discription: ${user.body}</p>

  `
  userList.appendChild(div)

    }
} */
