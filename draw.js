var mouseEvent = "empty";
var last_posistion_of_x, last_posistion_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color");
    width_of_line = document.getElementById("width_of_line");
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_posistion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_posistion_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last of posistion of x and y coridinates are ");
        console.log("x="+last_posistion_of_x+"y="+last_posistion_of_y);
        ctx.moveTo(last_posistion_of_x,last_posistion_of_y);
        console.log("current posistion of x and y = ");
        console.log("x="+current_posistion_of_mouse_x+"y="+current_posistion_of_mouse_y);
        ctx.lineTo(current_posistion_of_mouse_x,current_posistion_of_mouse_y);
        ctx.stroke();
    }
    last_posistion_of_x = current_posistion_of_mouse_x;
    last_posistion_of_y = current_posistion_of_mouse_y;
}
canvas.addEventListener("mouseUp",my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent = "moveUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}