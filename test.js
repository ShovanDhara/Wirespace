let xhr = new XMLHttpRequest();
let commentList = document.querySelectorAll(".comment-list")
//document.body.innetHTML+=`<div class'comment-list' data-count='10'></div>`
console.log(`Loading....`)
xhr.onload = function(e) {
console.log(`${xhr.response.length}`)
//document.body.innetHTML =``;
const data = JSON.parse(xhr.response)
//debugger
commentList.forEach((div)=>{
div.innerHTML = '';
})
for(let i = 0; i<data.length; i++){
//document.body.innetHTML +=`<div class'' data-count='0'>${data[i].login}</div>`
//document.querySelectorAll(".comment-list").innerHTML += `<div class='comment-item'>${data[i].login}</div>`
commentList.forEach((div)=>{
div.innerHTML += `<div class='comment-item'>${data[i].login}</div>`
})
console.log(`${data[i].login}`)
}
}

xhr.onprogress = function(event) {
 // console.log(`Received ${event.loaded} of ${event.total}`);
  //document.querySelectorAll(".comment-list").innerHTML += 'Loading....'
 // commentList.forEach((div)=>{
//div.innerHTML += 'Loading....';
//})
};

xhr.onerror = function() {
  alert("Request failed");
};
xhr.open('GET', 'https://api.github.com/users/octocat/followers');
xhr.send()
commentList.forEach((div)=>{
div.innerHTML += 'Loading....';
})