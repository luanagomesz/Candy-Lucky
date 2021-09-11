const emojis =  ['🍭', '🍬', '🧁','🍨']
const emojisQuase = ['🤡','👻','😞🤌','😩🤌','🙄 ','😤','🐧','🤹', '😐','😩✊']
const emojisDerrota = ['😭','😢','😿', '😡','👺','🤬','😰','👺👎','👎','🤡','💩','💩💩💩', '💩💩🤨💩💩']
const cores = ['#ff6600','#ff3399','#cc0099','#6666ff','#ff0066']
console.log(emojis[0])

let counter = 0;
let vitoria = 0;
let derrota = 0;
document.getElementById("vitoria").innerHTML = vitoria
document.getElementById("derrota").innerHTML = derrota

const jogar = document.getElementById("Jogar").addEventListener('click', function(){
    let backgroundmusic = new Audio('backgroundmusic.mp3');
    backgroundmusic.loop = true;
    backgroundmusic.play()
    let playbox = document.getElementById("playbox")
    playbox.style.display = "none"
    let main = document.getElementById("mainbox");
    main.classList.remove("display")
    let text = document.getElementById("text")
    text.classList.remove("display")
})






function slot(){
 
 let Random = setInterval(function(){
         counter++;
         let left = Math.floor(Math.random() * 4 );
         let center = Math.floor(Math.random() * 4 );
         let right = Math.floor(Math.random() * 4 );

         let leftrandom = document.getElementById("left").innerText = emojis[left]
         let centerandom = document.getElementById("center").innerText = emojis[center]
         let rightrandom = document.getElementById("right").innerText = emojis[right]
         let table = document.getElementById("roleta")
         table.style.boxShadow="3px 3px 10px 3px #FF8080, -5px 3px 10px 3px #da6cc9, -3px -3px 10px 3px #da6cc9, 7px -3px 10px 3px #80C7FF, 10px 5px 10px 4px #E488FF, -5px 5px 10px 3px #da6cc9, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)"
         table.style.border = "2px solid"
         table.style.borderColor = cores[left]
        document.getElementById("left").style.border = "1px solid hotpink"
        document.getElementById("center").style.border = "1px solid hotpink"
        document.getElementById("right").style.border = "1px solid hotpink"
        document.getElementById("left").style.borderColor = cores[left]
        document.getElementById("center").style.borderColor = cores[center]
        document.getElementById("right").style.borderColor = cores[right]
         
         if (counter > 5){
             let final_left = emojis[left]
             let final_center = emojis[center]
             let final_right = emojis[right]



             if ((final_left == final_center) && (final_left == final_right)){

                document.getElementById("resultado").innerText = "Você venceu!!! 🥳"
                let audio = new Audio('money.mp3');
                audio.loop = false;
                audio.play();
                vitoria++;
                document.getElementById("vitoria").innerHTML = vitoria
                table.style.boxShadow="3px 3px 5px 3px #ffff99, -5px 3px 5px 3px #ffff00, -3px -3px 5px 3px #cccc00, 5px -3px 5px 3px #ffff99, 5px 5px 5px 4px #ffff99, -5px 5px 10px 3px #ffff99, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)"
                document.getElementById("dinheiro").classList.remove("display")

             }
            else if((final_left == final_center) || (final_left == final_right) || (final_center == final_right)){
                let aleatorio = Math.floor(Math.random() * emojisQuase.length );
                 document.getElementById("resultado").innerText = "Chegou perto! Mais sorte da proxima vez." + " " + emojisQuase[aleatorio]
                 
                 document.getElementById("derrota").innerHTML = derrota
                 document.getElementById("dinheiro").classList.add("display")
            }
            
            else {
                let aleatorio = Math.floor(Math.random() * emojisDerrota.length );
                document.getElementById("resultado").innerText = "Você perdeu." + " " + emojisDerrota[aleatorio]
                derrota++;
                document.getElementById("derrota").innerHTML = derrota
                document.getElementById("dinheiro").classList.add("display")
            }

            counter = 0;
            clearInterval(Random);




         }








   }, 100);


}

const button = document.getElementById("slot").addEventListener('click', slot)
