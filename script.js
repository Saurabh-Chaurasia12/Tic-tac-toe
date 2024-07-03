let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-game");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#winner");

let turnO = true //player 'O'

const winpattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

let drawcounter = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Button was clicked!!!");
        if(turnO==true){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        drawcounter++;

        checkwinner(drawcounter);
        
    })
}
);

const resetgame =()=>{
    turnO = true;
    enabldisabled();
    drawcounter = 0;
    msgcontainer.classList.add("hide");
}

const boxdisabled=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabldisabled=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const draw = (counter)=>{
    if(counter==9 ){
        msg.innerText = ("Good Game, DRAW!!");
        msgcontainer.classList.remove("hide");
    }
};

const showwinner=(winner)=>{
    msg.innerText = (`Winner is "${winner}".`);
    msgcontainer.classList.remove("hide");
    boxdisabled();
};

const checkwinner = (counter)=>{
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                // console.log("winner is Player O !!!");
                // console.log(pos1,pos2,pos3);
                showwinner(pos1);
                return;
            }
            draw(counter);
        }
    }
};



reset.addEventListener("click",resetgame);