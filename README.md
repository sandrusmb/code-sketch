# code-sketch, memory game forever!

Nunca se practica demasiado JavaScript y nunca se programan demasiados memory games.

En esta ocasión, he seguido un **[tutorial](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=1) en inglés**.

¡A la cuarta va la vencida!

[Iconos diseñados por](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=1) [Freepik](https://www.flaticon.es/)

## Objetivos de este proyecto

Repasar conceptos básicos pero imprescindibles como:

- border-box vs. content-box
- Los parámetros por defecto de display: flex.
- Posición absolute y relative.
- Rutas relativas vs. rutas absolutas
- Selectores CSS.
- Transiciones.
- Atributos [data-\*](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset)
- La [sintáxis Markdown](https://markdown.es/sintaxis-markdown/) para redactar este Readme.
- El método [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) de JavaScript.
- El operador condicional [ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator).
- La función [Math.random](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random) para repartir las cartas en posiciones aleatorias.

Usar nuevas herramientas como:

- El [generador de fondos degradados](https://cssgradient.io/) en CSS.
- [La pseudo-clase :active de CSS](https://developer.mozilla.org/es/docs/Web/CSS/:active) , usada para acentuar el efecto de click sobre las tarjetas.
- Las propiedades de CSS [perspective](https://www.w3schools.com/cssref/css3_pr_perspective.asp) y [transform-style](https://www.w3schools.com/cssref/css3_pr_transform-style.asp): preserve-3d para dar la vuelta a las cartas con sensación de profundidad.
- La propiedad [backface-visibility](https://www.w3schools.com/cssref/css3_pr_backface-visibility.asp) que define si la cara posterior de un elemento debe ser visible o no.
- [removeEventListener](https://www.w3schools.com/jsref/met_element_removeeventlistener.asp), hasta ahora había sido siempre addEventListeners.

## Retos

- Comprobar si las cartas coinciden o no (función checkIfCardsMatched).
- Conseguir que las cartas cuando no coinciden, se den la vuelta automáticamente y cuando coinciden, que se queden boca arriba y no se puedan volver a clickar (añadiendo y quitando eventListeners y clases).
- Evitar poder dar la vuelta a más cartas mientras que está realizando una comprobación (función lockBoard).

## Mejoras futuras

- Contador de movimientos.
- Temporizador.
- Mensaje cuando has ganado.
- Niveles de dificultad (con menos tiempo para jugar y que las cartas se den la vuelta más deprisa, por ejemplo).
- Mensaje cuando pierdes.

![Demo](https://github.com/sandrusmb/code-sketch/blob/master/images/memory%20game%20demo.gif?raw=true)
