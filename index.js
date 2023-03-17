var number = document.getElementById("figure");
var casting = document.getElementById("cast");
var  count = 0;


function vote() {
    count = count + 1;
    number.textContent = count;
}

function tap() {
    constr = count + "-";
    casting.textContent += constr;
    alert("Recently casted vote has been saved successfully")
    number.textContent = 0;
    count = 0;
}