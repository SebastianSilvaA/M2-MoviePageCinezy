(()=>{const e=document.getElementById("cardContainer"),a=a=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`<h3> ${a.title} </h1>\n     <p>año: ${a.year} </p>\n    <p>directo: ${a.director} </p>\n    <h1>duracion: ${a.duration} </p>\n    <p>calificacion: ${a.rate} </p>\n    <img src = '${a.poster}'>\n    <p>Genre: ${a.genre}</p>`,e.appendChild(t),t.classList.add("gato")};$.get("https://students-api.up.railway.app/movies",(e=>e.map(a))).fail((()=>alert("error al traer las peliculas")))})();