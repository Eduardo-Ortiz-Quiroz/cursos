import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const data =  {
    "title": "New Product Edu",
    "price": 1200,
    "description": "Producto de Edu",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode : 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));