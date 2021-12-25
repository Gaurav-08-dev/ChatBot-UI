
const chatContent=document.querySelector('.iframe-support');
const chatButton=document.querySelector('.chatbox-button');
// console.log(chatButton)
let state=false;

chatButton.addEventListener('click',chatContentOpen);

function chatContentOpen(){
    if(state===false){
        state=true;
        chatContent.classList.add('iframe--active');
    }
    else if(state===true){
        state=false;
        chatContent.classList.remove('iframe--active');
    }
}
