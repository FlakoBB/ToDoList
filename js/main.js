var imgBorra = '<img class="imgTarea" id="imgBorra" src="imgs/cancelar.png">';
var imgTermina = '<img class="imgTarea" id="imgTermina" src="imgs/comprobado.png">';

//Cuando el usuario da clic al botón
//Si hay texto en el campo se agrega a la lista
document.getElementById('btnAdd').addEventListener('click', function() {
    var value = document.getElementById('nvTarea').value;
    
    if (value) {
        agregarTarea(value);
        document.getElementById('nvTarea').value = '';
    };
});

//Eliminar tarea de la lista
function eliminarTarea(){
    var tarea = this.parentNode.parentNode;
    var parent = tarea.parentNode;

    parent.removeChild(tarea);
}

//Terminar tarea
function tareaTerminada(){
    var tarea = this.parentNode.parentNode;
    var parent = tarea.parentNode;
    var id = parent.id;

    var marca = (id === 'trsIncompletas') ? document.getElementById('trsTerminadas'):document.getElementById('trsIncompletas');

    parent.removeChild(tarea);
    marca.insertBefore(tarea, marca.childNodes[0]);
}

//Agregar nueva tarea a la lista
function agregarTarea(tareaNva){
    var lista = document.getElementById('trsIncompletas');

    var tarea = document.createElement('li');
    tarea.innerText = tareaNva;

    var botones = document.createElement('div');
    botones.classList.add('btns');

    var eliminar = document.createElement('button');
    eliminar.classList.add('borra');
    eliminar.innerHTML = imgBorra;

    //llamada a la funcion de eliminarTarea
    eliminar.addEventListener('click', eliminarTarea);

    var terminar = document.createElement('button');
    terminar.classList.add('hecho');
    terminar.innerHTML = imgTermina;

    //llamada a la funciion de tareaTerminada
    terminar.addEventListener('click', tareaTerminada);

    botones.appendChild(eliminar);
    botones.appendChild(terminar);
    tarea.appendChild(botones);

    lista.insertBefore(tarea, lista.childNodes[0]);
}