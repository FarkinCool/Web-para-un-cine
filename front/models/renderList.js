function renderList(repo){
    const tbody = document.querySelector("#listActivities");
    tbody.innerHTML = null;
    const listTotal = repo.getAllList(); 
    
    if(listTotal.length === 0){
        const h3 = document.createElement("h3");
        h3.textContent = "No hay Peliculas en cartelera";
        tbody.appendChild(h3);
    }
    const rows = listTotal.map( ele => createListItem(ele));
    rows.forEach(ele => { tbody.appendChild(ele); });
    // else{

    //     let rowDiv = null;

    //     listTotal.forEach((ele, index) => {
    //         if (index % 3 === 0) {
    //             rowDiv = document.createElement("div");
    //             // rowDiv.style.display = "flex"; // Creación de una nueva fila
    //             // rowDiv.style.justifyContent = "center";
    //             rowDiv.className = "card-deck bg-dark text-white d-flex justify-content-center";
    //             //rowDiv.style.marginBottom = "20px"; // Añadir espacio entre filas
    //             tbody.appendChild(rowDiv);
    //         }
    //         const cardItem = createListItem(ele);
    //         rowDiv.appendChild(cardItem);
    //     });
    // }
}

function createListItem(target){ 
    const {id, title, year, director, duration, genre, rate, poster} = target;
    const div = document.createElement("div"); //target
    const h4 = document.createElement("h4"); // title 
    const a = document.createElement("a");
    const img = document.createElement("img"); //imgmovie - poster
    const pyear = document.createElement("p"); // year
    const spamyear = document.createElement("span");
    const pdirector = document.createElement("p"); // director
    const spamdirector = document.createElement("span");
    const pduration = document.createElement("p"); // duration
    const spamduration = document.createElement("span");
    const pgenre = document.createElement("p");// genre
    const spamgenre = document.createElement("span"); 
    const prate = document.createElement("p"); // rate
    const spamrate = document.createElement("span");

    const bodydiv = document.createElement("div");

    div.className = "card notenode";
    div.style ="card-size";
    img.className = "card-img-top imagenode";
    bodydiv.className = "card-body";
    h4.className = "card-title";
    pyear.className = "card-text";
    pdirector.className = "card-text";
    pduration.className = "card-text";
    pgenre.className = "card-text";
    prate.className = "card-text";
    

    a.textContent = target.title;
    a.href = "#";
    pyear.textContent = "Year : ";
    spamyear.textContent = target.year;
    pdirector.textContent = "Director : ";
    spamdirector.textContent = target.director;
    pduration.textContent = "Duration : ";
    spamduration.textContent = target.duration;
    pgenre.textContent = "Genre : ";
    spamgenre.textContent = target.genre;
    prate.textContent = "Rate : ";
    spamrate.textContent = target.rate;
    

    img.src = `${target.poster}`;
    // h4.textContent = note.id;

    h4.appendChild(a);
    pyear.appendChild(spamyear);
    pdirector.appendChild(spamdirector);
    pduration.appendChild(spamduration);
    pgenre.appendChild(spamgenre);
    prate.appendChild(spamrate);

    bodydiv.appendChild(h4);
    bodydiv.appendChild(pyear);
    bodydiv.appendChild(pdirector);
    bodydiv.appendChild(pduration);
    bodydiv.appendChild(pgenre);
    bodydiv.appendChild(prate);

    div.append(img,bodydiv);

    return div;
}

module.exports = {renderList};