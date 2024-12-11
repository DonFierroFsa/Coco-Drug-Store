Coco-Drug-Store

Es una tienda virtual, donde ademas se ofrece el servicio de publicidad para un Casino-Online del mismo local, todo esto en forma de una SPA(single page aplication).
Este proyecto ademas cuenta con su propia Coco-Drug-Store-Api, desde donde tanto el Gerente como sus empleados, pueden gestionar las ventas, sus registros e incluso modificar ciertos datos de la publicidad del Casino-Online.

Para dichas funciones, se creo una sección login, con rutas seguras, que permiten al usuario acceder a las funciones antes mencionadas. Las rutas dentro el login esta resguardadas por un componente funcional en la carpeta "router".
El componente PrivateRoute.jsx determina si se a iniciado sesión o no, en base a esto da paso a sus hijos, "NavController", en este caso. De no ser asi, re-dirige a la pagina de "login".
Para estas funciones y otras similares se ha utilizado la librería React-Router-Dom.

En el proyecto se utilizan numerosos Custom-Hooks, para facilitar el mantenimiento y escalabilidad del código.
Dentro de la carpeta Hooks, están aquellos que se utilizan para conectar con la DataBase, hecha con Mongo Db(estructura de base de datos no relacionales). Estos están ubicados en la carpeta "controllDbHooks". Algunos ejemplos son useCashOut, useGetUses, etc.
Ademas dentro de la carpeta Hooks están aquellos con funciones especificas del Front, como "useConfirm","useInfityScroll", "useFilter, "useModal.

Dentro de la carpeta "services" encontrara las funciones para efectuar las llamas a la API.

Para manejar las diferentes funciones del "Carro de Compras" o bases de datos, se han utilizado reducers acompañado de contextos para poder evitar el drilling de dichas funciones.
