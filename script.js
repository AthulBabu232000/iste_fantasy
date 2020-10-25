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



