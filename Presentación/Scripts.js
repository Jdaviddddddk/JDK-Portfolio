let divCursor = document.getElementById('divCursor');

function isTouchDevice(){
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch(e){
      return false;
    }
}

const move = (e) => {
    try{
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch(e){}
    divCursor.style.left = x +40 + "px";
    divCursor.style.top = y +40 + "px";
}; 

document.addEventListener("mousemove", (e) => {
    move(e);
});

document.addEventListener("touchmove", (e) => {
    move(e);
});