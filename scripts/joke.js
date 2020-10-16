
(function(){
const jokes = [
    {
        joke: "life is a bitch, get over it"
    },
    {
        joke: "life may not be the party we hoped for but while we are here, we should dance"
    },
    {
        joke: "i love my money right where i can see it hanging in my closet"
    },
    {
        joke: "living evryday like it's the last day and planning for tomorrow like i am gonna live forever"
    },
    {
        joke: "life is like a deep blue sea"
    }
];

const btn = document.querySelector('#getjoke');
const jokeDiv = document.querySelector('#quotes');
// console.log(btn);
// console.log(jokeDiv);

btn.addEventListener('click', function(e){
  e.preventDefault()
  let random = Math.floor(Math.random() * jokes.length);
jokeDiv.innerHTML = `<i class="fa fa-quote-left"></i> ${jokes[random].joke}`
})


})()