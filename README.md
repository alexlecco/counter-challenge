# counter-challenge
Challenge de Gentleman Programming
https://www.youtube.com/watch?v=YFMqm5DWZ40

este challenge será creado usando vite y typescript
para el manejo de estado global puede ser context o zustand

```
step 1:
- crear un componente Counter
- este va a tener 2 botones, uno para incrementar y otro para decrementar el valor del counter
- tiene que tener 3 propiedades:
- - initialCount (valor inicial del contador, por defecto 0)
- - onIncrement (metodo para incrementar)
- - onDecrement (metodo para decrementar)
```

```
step 2:
- usando Counter, crear un componente CounterList
- este recibirá por parametro un array counters, array de objetos que representar los contadores
- cada objeto tendrá la propiedad id para identificar el contador y la propiedad value que tiene el valor inicial del contador
- 2 metodos, onIncrement para incrementar cualquier contador y onDecrement para decremenetarlo
- el componente debe mostrar un countador por cada objeto del array 
```

```
step 3:
- usando Counter y CounterList, crear un CounterContainer
- muestra un encabezado, un Counter y un CounterList
- debe tener propiedades:
- - title (texto del encabezado)
- - counters (3 contadores)
- - onIncrement
- - onDecrement
- - el valor del counter debe ser la sumatoria de todos los contadores en el arreglo
```
