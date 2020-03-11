# SPA

Api REST  usando NodeJs, ExpressJs, MongoDB

# Instalacion

-Ejecute el comando `$ npm install`

Iniciar la api `$ node server.js`

Su aplicación se ejectura en el  `http//localhost:3000`

# endpoits Servicios 
- Metodo `GET` http://localhost:3000/api/servicios Obtine el listado se servicios del SPA
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
- Metodo `GET` http://localhost:3000/api/servicios/`:id` ejemplo http://localhost:3000/api/servicios/5e680cf35c1b5f3e38ff3d4d
```js
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
}
```
- Metodo `POST` http://localhost:3000/api/servicios/

```js
{
	"nombre": "Prueba",
	"descripcion": "Servicio de prueba",
	"urlImg": "images/Prueba.jpg",
	"diasServicio":["Lunes","Martes"]
}
```
- Metodo `PUT` http://localhost:3000/api/servicios/`:id` ejemplo http://localhost:3000/api/servicios/5e680cf35c1b5f3e38ff3d4d

```js
{
	"nombre": "Prueba Modificada",
	"descripcion": "Servicio de prueba",
	"urlImg": "images/Prueba.jpg",
	"diasServicio":["Lunes","Martes"]
}
```
- Metodo `DELETE` http://localhost:3000/api/servicios/`:id` ejemplo http://localhost:3000/api/servicios/5e680cf35c1b5f3e38ff3d4d


