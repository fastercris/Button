function getName(){
    let newName = prompt("¿Cual es tu nombre?");
    if(newName && typeof newName === 'string' && newName.trim() !== ''){
    document.getElementById('usuario').innerHTML += (' ' + newName);
}else{
    alert("Ingresa un nombre valido");
}
}