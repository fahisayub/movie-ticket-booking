// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let create=tag=>{
    return document.createElement(tag);
}

let {Poster,Title}= JSON.parse(localStorage.getItem('movie')) ;
let img=create('img');
img.src=Poster;
let title=create('h3');
title.innerText=Title;
document.getElementById('movie').append(title,img);

let read =(id)=>{
    return document.getElementById(id).value ;
}
let bookticket=()=>{
    let wallet= JSON.parse(localStorage.getItem('amount'));
    let username=read('user_name');
    let seats=read('number_of_seats');
    let total=seats*100;

    if(wallet>=total){
        let bal=wallet-total;
        localStorage.setItem('amount',JSON.stringify(bal));
        alert(`Hai ${username},your Booking is Succesfull!`);
    }else{
        alert(`Insufficient Balance!`)
    }
    window.location.reload();
}
