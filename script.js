let userInput = document.querySelector('input');
let search = document.querySelector('#search');
let meaning = document.querySelector('h1');
let volume = document.querySelector('#volume');
let wordMeaning = document.querySelector('.word-meaning');
let wordEample = document.querySelector('.word-example');
let phonetic = document.querySelector('#phonetic');
let partOfSpeach = document.querySelector('#partOfSpeach');
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let audioUrl;
function Usersearch() {
    url += userInput.value;
    console.log(url);
    findMeaning();
    clear();
}
function clear() {
    userInput.value = " ";
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
     
}
  function findMeaning() {
    let p =   fetch(url);
    p.then((res)=>{
        return res.json();
    }).then((value)=>{
        ihtml=" ";
        for(item in value) {
             meaning.textContent = value[item].word;
             phonetic.textContent = value[item].phonetic;
             audioUrl = (value[item].phonetics[0].audio); 
             partOfSpeach.textContent=value[item].meanings[0].partOfSpeech;
             wordMeaning.textContent = value[item].meanings[0].definitions[0].definition;
             wordEample.textContent =  value[item].meanings[0].definitions[0].example;
             if(value[item].meanings[0].definitions[0].example="") {
                wordEample.textContent = "Example not found";
             }

             if(audioUrl=="") {
                audioUrl = value[item].phonetics[1].audio;
             }   
          }
    }).catch((err)=>{
        console.log(err);
        meaning.textContent = "Word not Found";
    })
}
 volume.addEventListener("click", audioPlay);
 function audioPlay() {
    console.log(`${audioUrl}- audioUrl`);
     var adio = new Audio(audioUrl);
     adio.play();
    
 }
   



 