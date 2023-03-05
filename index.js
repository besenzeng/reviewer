//Fuzzy queries
let keyword = document.querySelector('.form-control');//Search frame
let searchlist = document.querySelector('.search-list');//Search list

//define array for searching content

let searchArr=['Italy Food', 'Chinese Food', 'Japanese Food', 'BBQ','Korean Food'];

//Bundle event change
keyword.oninput = function(){
    searchlist.innerHTML='';
    for(let i =0; i<searchArr.length; i++){
        if(searchArr[i].indexOf(keyword.value) != -1 ){
            searchlist.innerHTML += '<p>'+searchArr[i]+'</p>';
            searchlist.style.display = 'block';
        }
    }
}

keyword.onblur = function(){
    searchlist.style.display = 'none';
}









