console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=H0CssqhPQI7Gvgl0Cnmz9EFff4ELZSRQ&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function get_giphy(){
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=H0CssqhPQI7Gvgl0Cnmz9EFff4ELZSRQ&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    
    console.log(images); //preview
}

get_giphy()