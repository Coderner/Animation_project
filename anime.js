var man = document.querySelector(".image");
var man_pos= screen.width-300;
var time = setInterval(move,1);
function move(){
    man_pos--;
    man.style.left= man_pos+'px';
   if(parseInt(man.style.left)==(screen.width-1300))
   {
    clearInterval(time);
   }
}