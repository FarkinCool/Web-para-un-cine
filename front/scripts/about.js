class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = [];
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl){
        const id = this.activities.length + 1;
        const newActivitiy = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivitiy);
        return newActivitiy;
    }
    deleteActivity(id){
        const listTemp = this.activities.filter(item => item.id !== id);
        if(listTemp.length < this.activities.length){
            listTemp.forEach((item, index) => item.id = index+1);
        }
        this.activities = [...listTemp];
        return this.activities;
    }
}

const repository = new Repository();
// repository.createActivity('salir a pasear', 'es muy sano y divertido caminar', 'www.images.demo1.jpeg');
// repository.createActivity('jugar pelota', 'una pichanga en el complejo deportivo', 'www.image.pichanga.jpeg');
// repository.createActivity('manejar bici', 'pedalear 20 km rumbo a lo desconocido', 'www.image.cletero.jpeg');
// console.log(repository.getAllActivities());
// repository.deleteActivity(1);
// console.log(repository.getAllActivities());

const titleEti = document.getElementById("title");
const descriptionEti = document.getElementById("description");
const pictureEti = document.getElementById("picture");
const button = document.getElementById("button");
const listActivitiy = document.getElementById("listActivities");

const form = document.querySelector("#new-activity-form");
form.addEventListener("submit", handleSubmit);
renderList();

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    let valueTitle = form.elements["new-title"].value;
    let valueDescription = form.elements["new-description"].value;
    let valuePicture = form.elements["new-picture"].value;
    if(valueDescription === "" || valuePicture === "" || valuePicture === ""){
        return alert(`Completa todos los campos del formulario... \n =) `);
    }
    else{
        repository.createActivity(valueTitle, valueDescription, valuePicture);
        form.reset();
        renderList();
    }

}

function renderList(){
    const tbody = document.querySelector("#listActivities");
    tbody.innerHTML = null;
    const listTotal = repository.getAllActivities();
    // for(let i=0; i<listTotal.length; i++){
    //     const note = listTotal[i];
    //     const rows = createListItem(note);
    //     tbody.append(rows);
    // }
    if(listTotal.length === 0){
        const h3 = document.createElement("h3");
        h3.textContent = "No se registro alguna actividad";
        tbody.appendChild(h3);
    }
    else{
        const rows = listTotal.map( ele => createListItem(ele));
        rows.forEach(ele => { tbody.appendChild(ele); });
    }

}

function createListItem(note){ 
    const {id, title, description, imgUrl} = note;
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const bodydiv = document.createElement("div");
    const foodiv = document.createElement("div");

    div.className = "notenode";
    h3.className = "titlenode"
    h4.className = "idnode";
    p.className = "descriptionnode";
    img.className = "imagenode";
    button.className = "deletenode";
    bodydiv.className = "content";
    foodiv.className = "foodiv";


    h3.textContent = note.title;
    p.textContent = note.description;
    img.src = note.imgUrl;
    button.textContent = "Delete";
    h4.textContent = note.id;

    button.addEventListener("click", function(){
        repository.deleteActivity(note.id);
        renderList();
    });

    bodydiv.appendChild(p);
    bodydiv.appendChild(img);
    foodiv.appendChild(h4);
    foodiv.appendChild(button);
    div.append(h3,bodydiv,foodiv);

    return div;

}





