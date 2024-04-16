const renderizado = require("./renderizar");



 const obtener = $.get("https://students-api.up.railway.app/movies",(data)=> data.map(renderizado)).fail(() =>alert(`error al traer las peliculas`));


module.exports = obtener