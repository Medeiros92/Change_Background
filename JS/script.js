let data = new Date();


//Pega a Hora do Sistema
let hora = data.getHours();

//Pega os Minutos do Sistema
//let min = data.getMinutes();

let selecthval = document.getElementById('hora');
selecthval.options[selecthval.selectedIndex].value = hora;



function update(){
    let selecthval = document.getElementById('hora');
    let value = selecthval.options[selecthval.selectedIndex].value;




//IFs
if(value < 6){
    //Altera a cor do body
    document.body.style.backgroundColor = '#333333';
    document.getElementById('txthora').style.color='white';
}else if(value < 12){
    document.body.style.backgroundColor = 'white';
    document.getElementById('txthora').style.color='black';
}else if(value < 16){
    document.body.style.backgroundColor = '#fdfda3';
}else if(value < 18){
    document.body.style.backgroundColor = '#ffdc9c';
}else{
    document.body.style.backgroundColor = '#333333';
    document.getElementById('txthora').style.color='white';
}

//Imprime na tela a hora do Sistema
console.log(value);
}

if(hora < 6){
    //Altera a cor do body
    document.body.style.backgroundColor = '#333333';
    document.getElementById('txthora').style.color='white';
}else if(hora < 12){
    document.body.style.backgroundColor = 'white';
    document.getElementById('txthora').style.color='black';
}else if(hora < 16){
    document.body.style.backgroundColor = '#fdfda3';
}else if(hora < 18){
    document.body.style.backgroundColor = '#ffdc9c';
}else{
    document.body.style.backgroundColor = '#333333';
    document.getElementById('txthora').style.color='white';
}


