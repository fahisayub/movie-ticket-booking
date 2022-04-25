// Store the wallet amount to your local storage with key "amount"
let wallet= JSON.parse(localStorage.getItem('amount'));
let walletamount=document.getElementById('wallet');
if(wallet!=null){
    walletamount.innerText=wallet;
    
}else{
    walletamount.innerText=0;
}

let addtowallet=()=>{
    let val=document.getElementById('amount').value ;
  
   if(wallet==null){
       val=Number(val);
       localStorage.setItem('amount',JSON.stringify(val));
       console.log(val);
   }else{
    total=Number(wallet)+Number(val);
    localStorage.setItem('amount',JSON.stringify(total));
   }
   window.location.reload();
}

let gotomovies=()=>{
    window.location.href='movies.html';
}