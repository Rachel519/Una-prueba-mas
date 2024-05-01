/**
 * Crear tarjeta
 * Crear secciones p/tarjeta
 * Img
 * Nombre,desc, edad,lista de algo
 * insertar trajeta
 * Mostrar dentro de div.container
 */
//getElementById es lo mismo que queryselector,pero entre parentesis se anda a llamas como en css si es class es . si es id es gato 
const CARDS_CONTAINER = document.getElementById("card-container");
//Objetos se declaran con llaves y tienen un valor
const USER = {
    id: 1,
    username: "user name",
    desc: "sobre mi",
    age: 26,
    fav_books: {
    books:[ "orgullo yprejuicio","el principito"]
}
}


//crear secciones
const card= document.createElement("div");
const name_section= document.createElement("h3");
const desc_selection = document.createElement("p");
const age_selection = document.createElement ("p");
const book_selection = document.createElement ("div");
//lista
const booksList = USER.fav_books.books.map((e)=> {
    const item =document.createElement("ul");
    item.textContent = e;
    return item;
});

//crear tarjeta
name_section.textContent =USER.username;
desc_section.textContent = USER.desc;
age_section.textContent =USER.age;
book_selection.append(booksList);

card.append(name_section, desc_section,age_section)

//Inyectar tarjeta en el container
CARDS_CONTAINER.append(card);
