let user_score = 0
let comp_score = 0
const msg_para = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
let user_scor = document.querySelector("#user_score")
let comp_scor = document.querySelector("#comp_score")



const genCompChoice = ()=> {
    const options = ["rock","paper","scissor"];
    const random_num_for_index = Math.floor(Math.random()*3);
    return options[random_num_for_index];
}  


const draw = () =>{
    msg_para.innerText = ("Game was Draw. Play again")
    msg_para.style.backgroundColor = "black";

}
const playGame = (user_choice) => {
    console.log("user choice = ",user_choice)
    const comp_choice = genCompChoice();
    console.log("computer choice =" ,comp_choice);
    if(user_choice === comp_choice){
        draw();
    }
    else {
        let user_win = true;
        if(user_choice === "rock"){
            user_win = comp_choice === "paper" ? false:true
        }
        else if(user_choice === "paper"){
            user_win = comp_choice === "scissor" ? false:true
        }
        else if(user_choice === "scissor"){
            user_win = comp_choice === "rock" ? false : true
        }
        show_winner(user_win,user_choice,comp_choice);
    }
    
}

const show_winner = (user_win,user_choice,comp_choice) => {
    if(user_win == true){
        msg_para.innerText = (`You Won! Your ${user_choice} beats ${comp_choice}`)
        msg_para.style.backgroundColor = "green";
        user_score++;
        user_scor.innerText = user_score;
    }
    else{
        msg_para.innerText = (`You Loose!  ${comp_choice} beats Your ${user_choice}`)
        msg_para.style.backgroundColor = "red";
        comp_score++;
        comp_scor.innerText = comp_score
    }
} 


choices.forEach( (choic)=>{
    choic.addEventListener("click", ()=>{
    const user_choice= choic.getAttribute("id");
    console.log("clicked",user_choice)
    playGame(user_choice); 
    })
}) 