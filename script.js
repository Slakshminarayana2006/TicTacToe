const GameBtns = document.querySelectorAll(".btns");
const ResetBtn = document.querySelector(".btn");
const winningDis = document.querySelector(".display");
const Xaudio = new Audio("BUBBLE POP SOUND EFFECT - FREE.mp3");
const Oaudio = new Audio("Pop - Sound Effect HD-[AudioTrimmer.com].mp3");
const Wind = document.querySelector(".display h3");
const Wind2 = document.querySelector(".display h2");
const NewGame = document.querySelector(".NewGame");
const Back = document.querySelector(".main");
const ShowArrow = document.querySelector(".arrow p");
const Turn = document.querySelector(".pp");
const TurnX = document.querySelector(".h11");
let turnO = true;

let WinningPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
]

    
GameBtns.forEach((items) => {
    items.addEventListener('click', () => {
        if(turnO)
        {
            Turn.innerHTML = "Player Turn : "
            TurnX.innerHTML = "O";
            TurnX.style = "color : yellow"
            items.innerHTML = "X";
            items.style = "color : #ff0f7b";
            Xaudio.playbackRate = 6.0;
            Xaudio.play();
            turnO = false;
        }
        else
        {
            Turn.innerHTML = "Player Turn : "
            TurnX.innerHTML = "X";
            TurnX.style = "color : #ff0f7b;"
            items.innerHTML = "O";
            items.style = "color : yellow";
            Oaudio.playbackRate = 3.0;
            Oaudio.play();
            turnO = true;
        }
        if(FullGrid())
        {
            setTimeout(() => {
                ShowArrow.style = "display: inline;"
            }, 500)
        }
        items.disabled = true;
        CheckWinner();
    })
});

let FullGrid = () => {
    let filled = true;
    GameBtns.forEach((items) => {
        if(items.innerHTML === "") {
            filled = false;
        }
        
    });
    return filled;
}


let Clearall = () => {
    ShowArrow.style = "display: none;"
    TurnX.innerHTML = "X";
            TurnX.style = "color : #ff0f7b;"
    GameBtns.forEach((items) => {
        items.innerHTML = "";
        items.disabled = false;
        turnO = true;
    })
}
ResetBtn.addEventListener('click', Clearall);

let CheckWinner = () => {
    for(let pattern of WinningPat)
    {
        let [a, b, c] = pattern;
        let pos1 = GameBtns[a].innerHTML;
        let pos2 = GameBtns[b].innerHTML;
        let pos3 = GameBtns[c].innerHTML;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "")
        {
            if(pos2 === pos3 && pos3 === pos1)
            {
                PrintWinner(pos1);
                GameBtns.forEach((items) => {
                    items.disabled = true;
                });
            }
        }

    }
}

let PrintWinner = (pos1) => {

    setTimeout(() => {
        winningDis.style = "display : flex; filter : blur(0px);"
        Back.style = "filter: blur(10px);"
    }, 500);
    Wind.innerHTML = `Winner is : `;
    Wind2.innerHTML = `${pos1}`;
    if(pos1 === "X")
    {
        Wind2.style = "color : #ff0f7b"
    }
    else
    {
        Wind2.style = "color : yellow"
    }
    NN();
}

let NN = () => {
    NewGame.addEventListener('click', () => {
        winningDis.style = "display : none; filter : blur(0px)"
        Back.style = "filter: blur(0px);"
        turnO = false;
        Clearall();
    })
}

