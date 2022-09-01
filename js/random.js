const loadUsers=()=>{
    fetch('https://randomuser.me/api/?results=5000')
    .then(res=> res.json())
    .then(data=>displayUsers(data.results))
}

const displayUsers=(data)=>{
    const userContainer=document.getElementById('user-container')
    for(const user of data) {
        const userDiv=document.createElement('div');
        userDiv.classList.add('user-div')
        userDiv.innerHTML= `
        <h1> Country: ${user.location.country}</h1>
        <h3> User Name:${user.name.title} ${' '} ${user.name.first} ${' '} ${user.name.last}</h3>
        <h3>User Info: ${user.location.street.name} & House No: ${user.location.street.number} </h3>

        `
        userContainer.appendChild(userDiv)
    }
   
}

