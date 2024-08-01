
function addGenre(){
    const container = document.getElementById('genresContainer');
   // const div = document.createElement('div');
    const input = document.createElement('input');
    //div.className = "ml-2";
    input.type = 'text';
    input.name = 'genre-form';
    input.id = 'genre-form';
    input.className = "genre-input ml-2 flex-wrap";
    input.placeholder = "Other-genre";
    input.required = true;
    
   // div.appendChild(input)
    container.appendChild(input);
}

function cleanForm(){
    document.getElementById('form-movie').reset(); 

    const container = document.getElementById('genresContainer');
    const genreInputs = container.querySelectorAll('input[name="genre-form"]');
    for (let i = 1; i < genreInputs.length; i++) {
        container.removeChild(genreInputs[i]);
    }
}

const formmovie = document.getElementById('form-movie');
formmovie.addEventListener("submit", handleSubmit);


async function handleSubmit(event){
    event.preventDefault();
    
    if (!this.checkValidity()) {
        this.reportValidity();
    }
        const formData = new FormData(event.target);
        const data = {
            title: formData.get('title-form'),
            director: formData.get('director-form'),
            year: formData.get('year-form'),
            genre: formData.getAll('genre-form'),
            duration: formData.get('duration-form'),
            rate: formData.get('rate-form'),
            poster: formData.get('poster-form')
        };
        console.log(data);
    


    try {
        const result =  await axios.post('http://127.0.0.1:3000/movies', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(result.status === 201 ){
            console.log("exito!")
            alert("La pelicula fue grabada exitosamente");
        } else{
            alert("error al guardar la pelicula");
        }
      
       
    } catch (error) {
        console.log("error en la solicitud: " + error);
        throw error;
    }

}

