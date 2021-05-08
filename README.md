# Store

Proyecto desarrollado para la asignatura de __Acceso a datos__ del __IES Puerto de La Cruz Telesforo Bravo__ durante el curso 2020 - 2021.

## Contenido
---

*   [Descripción](#descripcion)
*   [Autor](#autor)
*   [Instalación y puesta en marcha](#instalación-y-puesta-en-marcha)
*   [Secciones](#secciones)
    *   [Panel de clientes](#panel-de-clientes)
    *   [Panel de tiendas](#panel-de-tiendas)
    *   [Panel de juegos](#panel-de-juegos)
    *   [Panel de desarrolladoras](#panel-de-desarrolladoras)
    *   [Panel de pedidos](#panel-de-pedidos)


## Descripción
---

El proyecto __Store__ ha sido desarrollado con la finalidad de mostrar los conocimientos adquiridos a lo largo del curso en lo que a __acceso a datos__ se refiere. Este proyecto cuenta con un _frontend_ sencillo desarrollado en __Angular__ y conectado a una __API Rest__ desarrollada con __Spring__ a modo de _backend_.


## Autor
---

Este proyecto ha sido desarrollado en su totalidad por __Juan Miguel González Machado__, alumno de __2º de DAM__ durante el curso 2020 - 2021.

## Instalación y puesta en marcha
---

### Requisitos previos

Para poner en marcha la aplicación es necesario disponer de:

* Node JS
* Backend Spring
* Frontend Angular
* Una conexión a Mysql con el usuario _root_ y la contraseña _toor_
* Una base de datos vacía llamada _store_

### Instrucciones

1. Ejecutar el _backend_ con __Spring__ (si saltan errores, ejecutarlo una segunda vez)
2. Ejecutar el _frontend_ con __Angular__ valiéndonos de los siguientes comandos:

```
$ npm install
$ npm start
```


## Secciones
---

### Panel de clientes

![Panel](https://i.imgur.com/VODIZnc.png)

En el panel de clientes tendremos acceso a una tabla en la que se nos mostrará un listado con todos los clientes dados de alta en la aplicación. Desde esta pantalla podremos crear un nuevo cliente y _editar_ o _eliminar_ uno previamente registrado en la base de datos.

Para registrar un nuevo cliente haremos _click_ en el botón __Añadir__ situado en la parte superior derecha de la ventana.

![Nuevo registro](https://i.imgur.com/1NvjlTE.png)

Se nos desplegará una ventana flotante con un formulario. Una vez cumplimentado, al hacer _click_ en el botón __Aplicar__ se enviará una petición al servidor para registrar el nuevo cliente en la base de datos.

Si todo ha ido bien, veremos el cliente recién registrado añadido a la tabla.

![Registro añadido](https://i.imgur.com/XXxUVlQ.png)

Si quisiéramos editar la información del cliente simplemente bastará con situarnos en la fila del cliente en cuestión y hacer _click_ en el botón situado en la columna __Editar_.

Se nos desplegará el mismo formulario que ya hemos visto anteriormente, con la diferencia de que los datos del cliente seleccionado aparecerán ya reflejados en dicho formulario. Para actualizar algún campo bastará con modificarlo y hacer _click_ en el botón __Aplicar__.

![Editar registro](https://i.imgur.com/4waUmcZ.png)

![Registro modificado](https://i.imgur.com/hH8ppnc.png)

Para eliminar un cliente bastará con hacer click en el botón situado en la columna __Eliminar__, justo al final de cada fila.

![Eliminar registro](https://i.imgur.com/OX2IOx8.png)


### Panel de tiendas

![Panel](https://i.imgur.com/LJxRrRx.png)

En el panel de tiendas tendremos acceso a una tabla en la que se nos mostrará un listado con todas las tiendas dadas de alta en la aplicación. Desde esta pantalla podremos crear una nueva tienda y _editar_ o _eliminar_ una previamente registrada en la base de datos.

Para registrar una nueva tienda haremos _click_ en el botón __Añadir__ situado en la parte superior derecha de la ventana.

![Nuevo registro](https://i.imgur.com/lswn8rs.png)

Se nos desplegará una ventana flotante con un formulario. Una vez cumplimentado, al hacer _click_ en el botón __Aplicar__ se enviará una petición al servidor para registrar la nueva tienda en la base de datos.

Si todo ha ido bien, veremos la tienda recién registradq añadida a la tabla.

![Registro añadido](https://i.imgur.com/9wWQJ9m.png)

Si quisiéramos editar la información de la tienda simplemente bastará con situarnos en la fila de la tienda en cuestión y hacer _click_ en el botón situado en la columna __Editar_.

Se nos desplegará el mismo formulario que ya hemos visto anteriormente, con la diferencia de que los datos de la tienda seleccionada aparecerán ya reflejados en dicho formulario. Para actualizar algún campo bastará con modificarlo y hacer _click_ en el botón __Aplicar__.

![Editar registro](https://i.imgur.com/mGb0ZMm.png)

![Registro modificado](https://i.imgur.com/p8ghiHi.png)

Para eliminar una tienda bastará con hacer click en el botón situado en la columna __Eliminar__, justo al final de cada fila.

![Eliminar registro](https://i.imgur.com/jpe9RYB.png)


### Panel de juegos

![Panel](https://i.imgur.com/yTt9lI3.png)

En el panel de juegos tendremos acceso a una tabla en la que se nos mostrará un listado con todos los juegos dados de alta en la aplicación. Desde esta pantalla podremos crear un nuevo juego y _editar_ o _eliminar_ uno previamente registrado en la base de datos.

Para registrar un nuevo juego haremos _click_ en el botón __Añadir__ situado en la parte superior derecha de la ventana.

![Nuevo registro](https://i.imgur.com/fjIeuQs.png)

Se nos desplegará una ventana flotante con un formulario. Una vez cumplimentado, al hacer _click_ en el botón __Aplicar__ se enviará una petición al servidor para registrar el nuevo juego en la base de datos.

Si todo ha ido bien, veremos el juego recién registrado añadido a la tabla.

![Registro añadido](https://i.imgur.com/QlEqAHr.png)

Si quisiéramos editar la información del juego simplemente bastará con situarnos en la fila del juego en cuestión y hacer _click_ en el botón situado en la columna __Editar_.

Se nos desplegará el mismo formulario que ya hemos visto anteriormente, con la diferencia de que los datos del juego seleccionado aparecerán ya reflejados en dicho formulario. Para actualizar algún campo bastará con modificarlo y hacer _click_ en el botón __Aplicar__.

![Editar registro](https://i.imgur.com/6YVpC9N.png)

![Registro modificado](https://i.imgur.com/gZBSZZ9.png)

Para eliminar un juego bastará con hacer click en el botón situado en la columna __Eliminar__, justo al final de cada fila.

![Eliminar registro](https://i.imgur.com/bUufEZ0.png)


### Panel de desarrolladoras

![Panel](https://i.imgur.com/p2cDbcG.png)

En el panel de desarrolladoras tendremos acceso a una tabla en la que se nos mostrará un listado con todas las desarrolladoras dadas de alta en la aplicación. Desde esta pantalla podremos crear una nueva desarrolladora y _editar_ o _eliminar_ una previamente registrada en la base de datos.

Para registrar una nueva desarrolladora haremos _click_ en el botón __Añadir__ situado en la parte superior derecha de la ventana.

![Nuevo registro](https://i.imgur.com/ecCSghY.png)

Se nos desplegará una ventana flotante con un formulario. Una vez cumplimentado, al hacer _click_ en el botón __Aplicar__ se enviará una petición al servidor para registrar la nueva desarrolladora en la base de datos.

Si todo ha ido bien, veremos la desarrolladora recién registradq añadida a la tabla.

![Registro añadido](https://i.imgur.com/86U8wiN.png)

Si quisiéramos editar la información de la desarrolladora simplemente bastará con situarnos en la fila de la desarrolladora en cuestión y hacer _click_ en el botón situado en la columna __Editar_.

Se nos desplegará el mismo formulario que ya hemos visto anteriormente, con la diferencia de que los datos de la desarrolladora seleccionada aparecerán ya reflejados en dicho formulario. Para actualizar algún campo bastará con modificarlo y hacer _click_ en el botón __Aplicar__.

![Editar registro](https://i.imgur.com/mrZZDdJ.png)

![Registro modificado](https://i.imgur.com/e1m2rGl.png)

Para eliminar una desarrolladora bastará con hacer click en el botón situado en la columna __Eliminar__, justo al final de cada fila.

![Eliminar registro](https://i.imgur.com/Vc0tlP1.png)


### Panel de pedidos

![Panel](https://i.imgur.com/SnXIK3Q.png)

En el panel de pedidos tendremos acceso a una tabla en la que se nos mostrará un listado con todos los pedidos dados de alta en la aplicación. Desde esta pantalla podremos crear un nuevo pedido y _editar_ o _eliminar_ uno previamente registrado en la base de datos.

Para registrar un nuevo pedido haremos _click_ en el botón __Añadir__ situado en la parte superior derecha de la ventana.

![Nuevo registro](https://i.imgur.com/yBABcCz.png)

Se nos desplegará una ventana flotante con un formulario. Una vez cumplimentado, al hacer _click_ en el botón __Aplicar__ se enviará una petición al servidor para registrar el nuevo pedido en la base de datos.

Si todo ha ido bien, veremos el pedido recién registrado añadido a la tabla.

![Registro añadido](https://i.imgur.com/OM2phhr.png)

Si quisiéramos editar la información del pedido simplemente bastará con situarnos en la fila del pedido en cuestión y hacer _click_ en el botón situado en la columna __Editar_.

Se nos desplegará el mismo formulario que ya hemos visto anteriormente, con la diferencia de que los datos del pedido seleccionado aparecerán ya reflejados en dicho formulario. Para actualizar algún campo bastará con modificarlo y hacer _click_ en el botón __Aplicar__.

![Editar registro](https://i.imgur.com/sI2kUYe.png)

![Registro modificado](https://i.imgur.com/CKQ3cMm.png)

> #### Nota:
> 
> Como puede observarse, un pedido no puede ser eliminado y tampoco se pueden editar sus datos de cliente, tienda, o juego. Esto es así debido a que cada pedido es único y no tiene sentido alguno editar un pedido una vez efectuado, más allá de cambiar su estado.
