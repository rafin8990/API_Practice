/* 

const loadData2=()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>displayQoutes(data))
}

const displayQoutes=(qoutes)=>{
    console.log(qoutes)
    const qoutesField=document.getElementById('qoutes-container')
    const div=document.createElement('div')
    div.innerText=qoutes.quote
    qoutesField.appendChild(div)
    
}

loadData2() */