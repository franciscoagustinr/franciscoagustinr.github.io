'use strict' 


// // STOCK

const workDiv = document.querySelector("#work"); 
// *************

const works = [
     {
        imageURL: "/img/NetflixChallenge.jpg",        
        url: "https://zesty-blancmange-afa966.netlify.app/",
        name: "Netflix Search Clone" ,
        description: "A simple Netflix search clone. Uses IMDB API to search movie or serie by title and display them with the info.", 
        technologies: "HTML + TAILWINDCSS + REACTJS"
    },
    {
        imageURL: "/img/randomPoke1.jpg",        
        url: "https://getrandompokemon-franciscoagustinr.netlify.app/",
        name: "Find your PokeMate!" ,
        description: "Having fun with the PokeApi. Let's see who will be your pokemate! Get a random pokemon.", 
        technologies: "HTML + CSS + JS"
    },
    {
        imageURL: "/img/pokedex.jpg",
        url: "https://pokeapi-franciscoagustinr.netlify.app/",
        name: "Pokédex",
        description: "A project based in the PokeApi. A Pokedex where you can see the stats of each Pokemon of the first generation.", 
        technologies: "HTML + CSS + JS"  
    },
    {
        imageURL: "/img/RMR.jpg",
        url: "https://dulcet-mandazi-5ba759.netlify.app/",
        name: "RMR || Locutor Web Page",
        description: "My first project: a simple page where the announcer Ricardo M. Rodríguez show his voice to the world.", 
        technologies: "HTML + CSS + JS"
    }
]

// WORKS CARD

for (var web of works){
    const html = `
    <img src="${web.imageURL}"  data-aos="fade-left" class="projectCard_img">
    <h3 class="projectCard_title"  data-aos="fade-right" > <a target="_blank" href="${web.url}">${web.name} <img class="externalLink" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfxJREFUSEutVu1VwzAMvMsCdAMYgREyQkcok9ENGKFswGMDugET5HiWv+REhj/kR58rOzrpdJJDTB4CUPkhVNblsNnHFw+mYmBwFgDRnY4nPHBHGc/bu4af7L9lEOx1gPS6h6jrGnreHAA2aSXwCuAp8H0ll5cU3SZdkM8Fj0AuOfQGUP5I+gLwOMsKwJXkS9pXBJJ4YQFw5Wr+NklMqAsntRmhO4h5Lpu/AEiy2liKe5kEApJ0gvAB6smzzRRfpKIOYAmUKsY6S84F3Ag8A7gLeKw5GMCRIkLaWgYHmTocixy4ITkXPkGsAs5FIEgM5x7aqSjOYEykO9czwE8AK8lvX3gDiIrsAXrAfSVtJ4A5cmBwXk9J24Vcrtl/bbQuU2tBLgs9RUX7nRZzrpVcLPJWrt2q2pv2LIMDgGl+5zzTsi+/pNSMFz+7BrX0InsVGcAZwFtIixuIqY98M2bJu3lyKLLrqwLyXgvaBqKjRZuU9D+RKdKMaZ3s6fQDLh4jOcwc4D92clADU2eXKUeKLAPjrXfi2NBxV9esjhTv7oMZgKcl6o9aj63UYMjAcy3pG8JDGrnWv2X8xmsPm9Tdor2TbPeJu3BsFq0QruB4J4zD2A/mui4Awh3EZSHfw1ERUzGzzuuxv0pj5TXrzNFon57yRetfA39gzraDhvkBbAk7LdokLBkAAAAASUVORK5CYII="/> </a></h3>
    <p class="projectCard_tech"  data-aos="fade-right" >${web.technologies}</p>
    <p class="projectCard_descr"  data-aos="fade-right" >${web.description}</p>
    `;
    
    const projectCardCreated = document.createElement("div"); 
    projectCardCreated.classList.add("projectCard"); 
    projectCardCreated.innerHTML = html; 
    workDiv.appendChild(projectCardCreated); 
}

// ************


