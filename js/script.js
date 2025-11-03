console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=H0CssqhPQI7Gvgl0Cnmz9EFff4ELZSRQ&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function get_giphy(){
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=H0CssqhPQI7Gvgl0Cnmz9EFff4ELZSRQ&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    return images;
    /*
    console.log(images); //preview
*/
}

//get_giphy()

// a. store the div container
const gif_container = document.querySelector("#gif-container");

// b.
const fetch_button = document.querySelector("#fetch-gif-btn");

// c.
fetch_button.addEventListener("click", async function() {
    gif_container.innerHTML = "";

    //call fetch_gif to get images array
    const images = await get_giphy();

    //d. loop through the array and display each image
    for (let i=0; i<images.length; i++){
        gif_container.innerHTML += `<img src=${images[i]} class = "col-3 mb-3">`;
    }
});