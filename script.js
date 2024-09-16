const display=document.getElementsByClassName("display")[0];
function append(input){
    display.value=display.value+input;
}

function cleardisplay(){
    display.value=""
}

function calculate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value="Invalid expression"
    }
}
function deleteone(){
    display.value=display.value.slice(0,-1);
}

