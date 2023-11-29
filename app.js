console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let feedback = document.getElementById("feedback");
let searchInput = document.getElementById("searchWord");
let searchButton = document.getElementById("submitSearch");
let gifEle = document.querySelector("#imageContainer > img");
const API_KEY = "WKxSPcQtWt02Ku5A5QCu9knvwyp02FrB";

//Exercise 2 & 3
searchButton.addEventListener("click", () => {
    console.dir(searchInput.value);
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.Value}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        gifEle.src = data.data.images.original.url;
        searchInput.value = "";
        feedback.textContent = "";
    })
    
    .catch((err) => {
        console.error(err);
        console.log(err.message);
        feedback.textContent = err.message;
    })
});

//Exercise 4