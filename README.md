# SPA

Api REST  usando NodeJs, ExpressJs, MongoDB

# Instalacion

-Ejecute el comando `$ npm install`

Iniciar la api `node server.js`

Su aplicación se ejectura en el  `puerto: 3000`

# Dependencies

- nodejs [8.12.0](https://nodejs.org/en/download/releases/) & npm v6.4.1
- Express Js 4.16.1
- MongoDB [3.4](https://www.mongodb.com/download-center/community)

# Servicios 
- http://localhost:3000/api/servicios Obtine el listado se servicios del SPA
```js
[
    {
        "diasServicio": [
            "Lunes",
            "Martes"
        ],
        "_id": "5e680cf35c1b5f3e38ff3d4d",
        "nombre": "Prueba",
        "descripcion": "Se modifico",
        "urlImg": "images/servico1.jpg",
        "updated_date": "2020-03-10T21:56:03.721Z",
        "__v": 0
    },
    {
        "diasServicio": [
            "Lunes",
            "Martes"
        ],
        "_id": "5e680fd62c14c54e64d03aa1",
        "nombre": "Servicio 2",
        "descripcion": "d eee",
        "urlImg": "images/servico1.jpg",
        "updated_date": "2020-03-10T22:08:22.983Z",
        "__v": 0
    }
]
```

