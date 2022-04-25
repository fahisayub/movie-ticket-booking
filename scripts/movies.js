// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let create=tag=>{
    return document.createElement(tag);
}
let getmovies=async()=>{
    let query=document.getElementById('search').value ;
    const url=`http://www.omdbapi.com/?s=${query}&i=tt3896198&apikey=e5a80741`;
    try{
        let res= await fetch(url);
        let data = await res.json();
        let movies=await data.Search;
        return movies;
    }catch(err){
        console.log(err);
    }
}

let appendmovies=data=>{
    let tickets=document.getElementById('movies');
    tickets.innerHTML=null;
    data.forEach((ele)=>{
        let movie=create('div');
        let img=create('img');
        img.src=ele.Poster;
        let title=create('p');
        title.innerText=ele.Title;
        let btn=create('button');
        btn.innerText='Book Now'
        btn.setAttribute('class','book_now');
        btn.onclick=()=>{
            booknow(ele);
        }
        
        movie.append(img,title,btn);
        tickets.append(movie);


    })
}
let booknow=(ele)=>{
    localStorage.setItem('movie',JSON.stringify(ele));
    window.location.href='checkout.html';
}

let main=async()=>{
    let movies=await getmovies();
    if(movies==undefined){
        return;
    }
   
    console.log(movies);
    appendmovies(movies);
}
let id;
let debounce=(fn,delay)=>{
if(id){
    clearTimeout(id);
}
id=setTimeout(()=>{
    
    fn();
},delay);

}