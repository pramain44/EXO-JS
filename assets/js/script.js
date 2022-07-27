// let PFC = document.querySelectorAll('button');

// for(let i = 0; i < PFC.length; i++){
//     PFC[i].addEventListener('click', ()=>{
//         const player = PFC[i].innerHTML;
//         const ia = PFC[Math.floor(Math.random()*PFC.length)].innerHTML;
//         let resultat="";
//         if(player === ia){
//             resultat="draw"
//         }
//         else if(
//             (player === 'pierre' && ia === 'ciseaux')||
//             (player === 'feuille'&& ia === 'pierre')||
//             (player === 'ciseaux'&& ia === 'feuille')
//     ) {
//         resultat = "Won";
//     }
//     else {
//         resultat = "lost";
//     }
//     document.querySelector('#resultat').innerHTML;
//     player: $(player) 
//     ia: $(ia) 
// })
// }

//------------------------------------------------------------------------------------
//click un btn
//selectionne le bouton clicker, selectionne (mathrandom) pour l'ai
//compare les deux selections
//donne le resultat puis le ds une variable global

let pierre = document.getElementById('stone');
let feuille = document.getElementById('paper');
let ciseaux = document.getElementById('scissors');
var total = 0;
var playW = 0;
var result = (playW/total)*100;
console.log(pierre);
console.log(feuille);
console.log(ciseaux);
pierre.addEventListener('click',()=>{
    let ai = Math.floor(Math.random() * 3);
    total++
    console.log('total',total)
    if(ai === 2){
        nani1.src = './img/ciseau.png';
        nani0.src = './img/caillou.jpg';
        resultat.innerText = 'Winner Chicken Dinner';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat0')
        playW++;
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
        console.log('playW',playW)
    }
    else if(ai === 1){
        resultat.innerText = 'LOSERS';
        nani1.src = './img/weed.jpg'
        nani0.src = './img/caillou.jpg'
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat1')
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
    else if(ai === 0){
        resultat.innerText = 'DEUCE';
        nani0.src = './img/caillou.jpg'
        nani1.src = './img/caillou.jpg'
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat2')
        total--;
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
    console.log('resultat',result)
    console.log(ai);
})
feuille.addEventListener('click',()=>{
    let ai = Math.floor(Math.random() * 3);
    total++
    console.log('total',total)
    if(ai === 0){
        nani1.src = './img/caillou.jpg'
        nani0.src = './img/weed.jpg';
        resultat.innerText = 'Winner Chicken Dinner';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat0')
        playW++;
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
        console.log('playW',playW)
    }
    else if(ai === 2){
        nani1.src = './img/ciseau.png'
        nani0.src = './img/weed.jpg';
        resultat.innerText = 'LOSERS';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat1')
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
    else if(ai === 1){
        nani1.src = './img/weed.jpg'
        nani0.src = './img/weed.jpg';
        resultat.innerText = 'DEUCE';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat2')
        total--;
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
    console.log(ai);
winRate.innerHTML = 'winrate :'+' '+result+'%';
console.log(result)
})
ciseaux.addEventListener('click',()=>{
    let ai = Math.floor(Math.random() * 3);
    total++;
    if(ai === 1){
        nani1.src = './img/weed.jpg'
        nani0.src = './img/ciseau.png';
        resultat.innerText = 'Winner Chicken Dinner';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat0')
        playW++;
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
    else if(ai === 0){
        resultat.innerText = 'LOSERS';
        nani1.src = './img/caillou.jpg'
        nani0.src = './img/ciseau.png';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat1')
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
    else if(ai === 2){
        resultat.innerText = 'DEUCE';
        nani1.src = './img/ciseau.png';
        nani0.src = './img/ciseau.png';
        let = resultColor = document.getElementById('resultat')
        resultColor.className = ('resultat2')
        total--;
        var result = (playW/total)*100;
        winRate.innerHTML = 'winrate :'+' '+result+'%';
    }
winRate.innerHTML = 'winrate :'+' '+result+'%';
console.log(ai);
})
//winRate.innerHTML = 'winrate :'+' '+result+'%';






