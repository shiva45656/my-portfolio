const screen = document.querySelector(".screen");
const ac = document.querySelector(".ac");
const plusMinus = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const times = document.querySelector(".times");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const eql = document.querySelector(".eql");

zero.onclick = () => { screen.innerHTML += "0"; }
one.onclick = () => { screen.innerHTML += "1"; }
two.onclick = () => { screen.innerHTML += "2"; }
three.onclick = () => { screen.innerHTML += "3"; }
four.onclick = () => { screen.innerHTML += "4"; }
five.onclick = () => { screen.innerHTML += "5"; }
six.onclick = () => { screen.innerHTML += "6"; }
seven.onclick = () => { screen.innerHTML += "7"; }
eight.onclick = () => { screen.innerHTML += "8"; }
nine.onclick = () => { screen.innerHTML += "9"; }

dot.onclick = () => { screen.innerHTML += "."; }
divide.onclick = () => { screen.innerHTML += "÷"; }
times.onclick = () => { screen.innerHTML +=  "×"; }
minus.onclick = () => { screen.innerHTML +=  "–"; }
plus.onclick = () => { screen.innerHTML += "+"; }

ac.onclick = () => { screen.innerHTML = ""; }

plusMinus.onclick = () => {
    oriMsg = screen.innerHTML;
    var i = Math.max(
        oriMsg.lastIndexOf("+"),
        oriMsg.lastIndexOf("–"),
        oriMsg.lastIndexOf("×"),
        oriMsg.lastIndexOf("÷")
    );
    const operation = oriMsg.charAt(i);
    const lastNum = oriMsg.substring(i+1, oriMsg.length);
    if(operation == "–") {
        if(i == 0) {
            screen.innerHTML = lastNum;
        } else {
            screen.innerHTML = oriMsg.substring(0, i) + "+" + lastNum;
        }
    } else {
        screen.innerHTML = oriMsg.substring(0, i) + "–" + lastNum;
    }
}

percent.onclick = () => {
    oriMsg = screen.innerHTML;
    var i = Math.max(
        oriMsg.lastIndexOf("+"),
        oriMsg.lastIndexOf("–"),
        oriMsg.lastIndexOf("×"),
        oriMsg.lastIndexOf("÷")
    );
    lastNum = oriMsg.substring(i+1, oriMsg.length);
    lastNum /= 100;
    screen.innerHTML = oriMsg.substring(0, i + 1) + lastNum;
}

eql.onclick = () => {
    var req = screen.innerHTML;
    console.log(req);
    req = req.replaceAll("–", "-");
    req = req.replaceAll("÷", "/");
    req = req.replaceAll("×", "*");
    if (req.includes("=")) {
        req = req.substring(req.lastIndexOf("=")+2, req.length);
    }
    screen.innerHTML += ("<br>= " + Math.round(eval(req) * 10000) / 10000);
}
