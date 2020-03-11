# SPA

Api REST  usando NodeJs, ExpressJs, MongoDB

# Instalacion

-Ejecute el comando `$ npm install`

Iniciar la api `$ node server.js`

Su aplicación se ejectura en el  `http//localhost:3000`

# endpoits Servicios 
- Metodo `GET` http://localhost:3000/api/servicios Obtine el listado de Servicios del SPA
## response
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
- Metodo `GET` http://localhost:3000/api/servicios/:id Obtiene servicio por id ejemplo http://localhost:3000/api/servicios/5e680cf35c1b5f3e38ff3d4d
## response
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
- Metodo `POST` http://localhost:3000/api/servicios/ Crea un servicio en el SPA
## request
```js
{
	"nombre": "Prueba",
	"descripcion": "Servicio de prueba",
	"urlImg": "images/Prueba.jpg",
	"diasServicio":["Lunes","Martes"]
}
```
- Metodo `PUT` http://localhost:3000/api/servicios/:id Modifica Servicio por id ejemplo http://localhost:3000/api/servicios/5e680cf35c1b5f3e38ff3d4d
## request
```js
{
	"nombre": "Prueba Modificada",
	"descripcion": "Servicio de prueba",
	"urlImg": "images/Prueba.jpg",
	"diasServicio":["Lunes","Martes"]
}
```
- Metodo `DELETE` http://localhost:3000/api/servicios/:id Elimina Servicio por id ejemplo http://localhost:3000/api/servicios/5e680cf35c1b5f3e38ff3d4d

# endpoits Reservas
- Metodo `GET` http://localhost:3000/api/reservas Obtine un listado de Reservas del SPA dado un rango de fechas.
Nota: si no se especifica fechas obtine todas las Reservas

## Params 
- `startDate` "yyyy-mm-dd" Fecha inicial
- `endDate` "yyyy-mm-dd" Fecha Final

http://localhost:3000/api/reservas?startDate=2020-01-01&endDaate=2020-03-10
## response
```js
[
    {
        "_id": "5e684a2f62d4c35898107e94",
        "idServicio": "5e680cf35c1b5f3e38ff3d4d",
        "fecha": "2020-02-17T00:00:00.000Z",
        "updated_date": "2020-03-11T02:17:19.159Z",
        "__v": 0
    },
    {
        "_id": "5e684d2184edae0f342e21df",
        "idServicio": "5e680cf35c1b5f3e38ff3d4d",
        "fecha": "2020-02-17T00:00:00.000Z",
        "updated_date": "2020-03-11T02:29:53.132Z",
        "__v": 0
    }
]
```
- Metodo `POST` http://localhost:3000/api/reservas Crea una Reserva
## request
```js
{
	"idServicio":"5e680cf35c1b5f3e38ff3d4d",
	"fecha":"2020-03-11"
}
```
- Metodo `DELETE` http://localhost:3000/api/reservas/:id Elimina una Reserva por id ejemplo http://localhost:3000/api/reservas/5e680cf35c1b5f3e38ff3d4d

