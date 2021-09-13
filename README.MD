- 1ro correr el comando: npm install , para instalar la carpeta node_modules

- Para crear un nuevo producto, actualizarlo o borrarlo se debe estar registrado y hacer login
- Un nuevo producto debe contener de manera obligatoria: name(string), categoria(ObjectId), precio(Number), codigo(string), descripcion(string). Adicionalmente puede contener el campo: destacado(boolean)
- La categoria de un producto debe ser una existente

- la ruta GET /productos muestra la totalidad de los productos
- la ruta GET /productos/ seguido del id del producto muestra el detalle del producto en cuestion
- la ruta GET /productos/destacados muestra solo el detalle de los productos que contengan el campo destacado:true

- para crear un nuevo usuario se debe hacer POST en la ruta /users
- para el login se debe hacer POST en la ruta /users/login

- se utilizo JWT para la generación del token

Muchas gracias, excelente curso! estoy muy contento con lo aprendido

Saludos, Ezequiel Astrada