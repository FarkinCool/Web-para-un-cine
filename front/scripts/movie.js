const {Repository }= require("../models/Repository");
const {renderList} = require("../models/renderList");
const axios = require("axios");

const apiUrl = "http://localhost:3000/movies";

// $.get(apiUrl, (data) => {
//     const repo = new Repository();
//     data.map(ele => repo.createMovie(ele)); 
//     renderList(repo); 
// });

const getApi = async() => {
    try {
        let result =  await axios.get(apiUrl);
        const repo = new Repository();       
        result.data.map(ele => repo.createMovie(ele)); 
        renderList(repo); 
       
    } catch (error) {
        console.log("error en la solicitud: " + error);
        throw error;
    }
};
getApi();