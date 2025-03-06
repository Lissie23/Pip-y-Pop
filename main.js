//Conexión con HTML (Seleccionar elementos)

const songForm = document.getElementById("song_form");
const PlayList = document.getElementById("play_list");

// Función para agregar una canción a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
            <strong> ${songName} </strong>
            -${artistName}
            <a href="${songUrl}" target="_blank" >Reproducir</a>
            <button class="delete-btn" >Eliminar</button>
    `;
    //Agregar al HTML
    PlayList.appendChild(listSong);

       //agregar evento de la canción
const deleteButton = listSong.querySelector (`.delete-btn`);
deleteButton.addEventListener("click", ()=>{
    listSong.remove();
});
    }

//...
//Manejo de envío de formularios (Eventos)

songForm.addEventListener('submit',(event)=> {
    event.preventDefault();
//Obtener datos del formulario
    const songForm = document.getElementById("song_name").value
    const artistName = document.getElementById("artist_name").value
    const songUrl = document.getElementById("url_song").value
    addSong(songForm, artistName, songUrl);

    songForm.reset()

})
