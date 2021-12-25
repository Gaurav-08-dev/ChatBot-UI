let state;

// class okLoad{
    
//     constructor(state){this.state=state}
//     l(){
//         return !this.state;
//     }
// }
const chatContent=document.querySelector('.iframe-support');
const chatButton=document.querySelector('.chatbox-button');
// console.log(chatButton)
state=false;

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
