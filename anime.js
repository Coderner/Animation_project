var man = document.querySelector(".image");
var ant = document.querySelector(".antmain");



var man_pos= screen.width-250;
var time = setInterval(moveman,1);
function moveman()
{
      man_pos--;
      man.style.left= man_pos+'px';
     if(parseInt(man.style.left)==(screen.width-1350))
     {
        clearInterval(time);
        var time2 = setInterval(moveant,0.5);
        var ant_width= screen.width-650;
        var ant_height= screen.height;
        function moveant()
         {
            ant_width--;
            ant_height--;
            ant.style.left= ant_width+'px';
            ant.style.top= ant_height+'px';
            if((parseInt(ant.style.left)==(screen.width-1100)))
            {
                clearInterval(time2);
                document.getElementsByClassName("message").innerHTML="Treat Time Guys!!"; 
            }
         }
   
     }
}
