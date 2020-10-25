let players = [
    {
        image: '',
        name: 'kohli',
        skill: 'batsman',
        credit: 10,
        team: 'rcb'
    },
    {
        image: '',
        name: 'dhoni',
        skill: 'batsman',
        credit: 20,
        team: 'csk'
    },
    {
        image: '',
        name: 'chahal',
        skill: 'bowler',
        credit: 30,
        team: 'rcb'
    },
    {
        image: '',
        name: 'gale',
        skill: 'batsman',
        credit: 30,
        team: 'KX11'
    },
    {
        image: '',
        name: 'ABD',
        skill: 'batsman',
        credit: 30,
        team: 'rcb'
    },
    {
        image: '',
        name: 'morris',
        skill: 'bowler',
        credit: 30,
        team: 'rcb'
    }

];

//declaring all the neccessary variables
let myTeam = [];
const totalCredit = 100;
let remainingCredit = totalCredit;
let usedCredit = 0;

// setting my team to the right of the window
const setMyteam = () => {

    playersList = myTeam.reduce((playerhtml, player) => {

        // console.log(player.skill)


        playerhtml += `<div class = "col-12 text-center shadow p-1   mb-1 bg-white rounded-pill mx-auto" >
        <div class = "row my-auto">
        <div class = "col-4" style = "font-weight:600;text-transform:uppercase;font-size:.9em;">
        <li>${player.name}</div>
        <div class = "col-3"style = "font-weight:600;text-transform:uppercase;font-size:.9em;">
        <a>${player.team}</a></div>
        <div class = "col-3">
    <button class = "rounded-circle btn " style = "font-weight:900; font-size:3vmin;>C</button>
         </div>      
                <div class = "col-4"><button  class = " rounded-circle btn-xs btn-danger  icon-bar" style = "font-weight:900;font-size:3vmin;font-family:'Courier New', Courier, monospace;" id = ${player.name} onClick ="removePlayer(event.srcElement.id)" >-</button>
                </li></div></div></div>`;
        return playerhtml;


    }, '');

    playersElement = document.getElementById("myTeam");
    playersElement.innerHTML = playersList;
}
// initially setting players from both teams to left of the window
const setPlayers = () => {

    playersList = players.reduce((playerhtml, player) => {

        playerhtml += `<div class = "col-12 text-center shadow p-1  mb-1 bg-white rounded-pill  mx-auto" >
        <div class = "row my-auto">
        <div class = "col-4"style = "font-weight:600;text-transform:uppercase;font-size:.9em;" >
        <li >${player.name}</div>
        <div class = "col-2" style = "font-weight:600;text-transform:uppercase;font-size:.9em;">
                <a>${player.credit}</a></div>
                <div class = "col-3" style = "font-weight:600;text-transform:uppercase;font-size:.9em;">
                <a>${player.team}</a></div>
               <div class = "col-1"> <button class = "rounded-circle btn-xs btn-success " style = "font-weight:900;font-size:3vmin;font-family:'Courier New', Courier, monospace;" id = ${player.name}  onClick ="addPlayer(event.srcElement.id)" >+</button>
                </li></div></div></div>`;
        return playerhtml;


    }, '');

    playersElement = document.getElementById("players");
    playersElement.innerHTML = playersList;
}


//to add players to the right while clicking plus button
const addPlayer = (name) => {
    // console.log(name);
    newPlayer = players.find(player => player.name === name);

    if (remainingCredit >= newPlayer.credit) {

        index = players.findIndex(player => player.name === name);

        myTeam.push(newPlayer);

        if (index > -1) {
            players.splice(index, 1);
        }
        setMyteam();
        setPlayers();
        useCredit(newPlayer);

    } else { alert("inssufficient credits") }


}


//to remove players from the right by clicking minus button
const removePlayer = (name) => {
    // console.log(name);
    newPlayer = myTeam.find(player => player.name === name);
    index = myTeam.findIndex(player => player.name === name);
    players.push(newPlayer);
    if (index > -1) {
        myTeam.splice(index, 1);
    }
    setMyteam();
    setPlayers();
    getCredit(newPlayer);
}

const useCredit = (player) => {
    remainingCredit -= player.credit;
    usedCredit += player.credit;
    updateCredit();
}
const getCredit = (player) => {
    remainingCredit += player.credit;
    usedCredit -= player.credit;
    updateCredit();
}

const updateCredit = () => {
    

    rCreditHtml = `<div class = "text-center"> <h6 style = "color:red;" class = "mt-2">Credits: ${remainingCredit} <i class="fa fa-arrow-down" aria-hidden="true"></i></h6></div>`;
    uCreditHtml = `<div class = " "><h6 style = "color:green;">Credits: ${usedCredit} <i class="fa fa-arrow-up" aria-hidden="true"></i></h6></div>`;

    rCreditElement = document.getElementById("remainingCredit");
    rCreditElement.innerHTML = rCreditHtml;

    uCreditElement = document.getElementById("usedCredit");
    uCreditElement.innerHTML = uCreditHtml;
}
setMyteam();
setPlayers();
updateCredit();




//*****header script by aromal******\\
function revealMessage(){

    document.getElementById('lol').style.display='block';

}

function countFunc(){
    var cur_val=document.getElementById('count').innerHTML;
    var newVal=cur_val-1;

    document.getElementById('count').innerHTML=newVal;
}

function glowLeave(parent){


       parent.style.border= "10px solid #495057";

}

function glowEnter(parent){

        parent.style.border= "10px solid #e63946";

}

//extra added by luhta
function glowEnter2(parent){

    parent.style.border= ".5vmin solid #4287f5";

}
function glowLeave2(parent){


    parent.style.border= ".5vmin solid #495057";

}

function glowEnter3(parent){

    parent.style.border= ".5vmin solid #179c03";

}
function glowLeave3(parent){


    parent.style.border= ".5vmin solid #495057";

}


