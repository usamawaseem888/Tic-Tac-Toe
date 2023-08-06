const cell=document.querySelectorAll(".cell")
const stat=document.getElementById("Status")
const reset=document.getElementById("reset")

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let options=["","","","","","","","",""]
let player="X"
let run=false

startGame();

function startGame(){
    run=true;
    cell.forEach(button=>button.addEventListener("click",cellClicked))
    reset.addEventListener("click",restop)
    stat.textContent=`${player}'s Turn`

}
function cellClicked(){
    const cellIndex=this.getAttribute(("cellIndex"))
    //console.log(cellIndex)
if(options[cellIndex]!="" || !run){
    return
}

update(this,cellIndex)
changePlayer()
checkWinner()
}
function update(cell,cellIndex){
    options[cellIndex]=player;
    cell.textContent=player;
    stat.textContent=`${player}'s Turn`

}
function changePlayer(){
    if(player=="X"){
        player="O"

    }else {
        player="X"
    }
    stat.textContent=`${player}'s Turn`
   // player=(player=="X") ? "O":"X"
}
function checkWinner(){
    for(let i=0; i<win.length; i++){
        let a=win[i][0]
        let b=win[i][1]
        let c=win[i][2]
        
        for(let j=0; j<options.length; j++){
            if(options[a]==options[b] && options[b]==options[c] && options[a]!=""){
                run=false
               // console.log(a,b,c)
               // console.log(`${options[a]} : ${options[b]} :${options[c]}`)
                
                stat.textContent=`${options[a]} is the winner`
            }
           else if(!options.includes("") && run){
                stat.textContent=`Draw`
            }
            

        }
        console.log(a,b,c)
     //   console.log(`${options[a]} : ${options[b]} :${options[c]}`)
    }
}

function restop(){
for(let i=0; i<options.length; i++){
    options[i]=""
}
    cell.forEach(cells=>cells.textContent="")
    run=true
    player="X"
    stat.textContent=`${player}'s turn`
    ///console.log(options)
    

}