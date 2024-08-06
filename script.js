let myDiv = document.getElementById("my-div");
//detect touch device
function isTouchDevice() {
    try{
        //we try to create TouchEvent. It would fail //for desktops and throw error
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e) {
        return false;
    }
}

const move = (e) => {
    // try, catch to avoid any errors for touch screens (error thrown when user do  not move his finger)
    try {
        // pageX and pageY return the position of client's cursorfrom top left of the screen

        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch(e) {

    }
    //set left and top of the div
    myDiv.style.left = x - 30 + "px";
    myDiv.style.top = y - 30+ "px";

};
document.addEventListener("mousemove", (e) => {
    move(e);
});
//for touch
document.addEventListener("touchmove", (e) => {
    move(e); 
});