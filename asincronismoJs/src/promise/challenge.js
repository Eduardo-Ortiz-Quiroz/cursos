import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchdata(urlApi){
    return fetch(urlApi);
};

//fetchdata(`${API}/products`)
//    .then(response => response.json())
//    .then(products => {
//        console.log(products);
//    })
//    .then(()=>{
//        console.log('hola');
//    })
//    .catch(error=> console.log(error));
fetchdata(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products[1]);
    return fetchdata(`${API}/products/${products[1].id}`);
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    return fetchdata(`${API}/categories/${product.category.id}`);
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})
.catch(err => console.log(err))
.finally(()=> console.log('Finally'));