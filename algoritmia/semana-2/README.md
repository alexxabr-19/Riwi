# Algoritmos en PSeInt

## Descripción

En esta actividad realicé de cuatro algoritmos realizado en PSeInt, sus tablas de verdad o decisión y pruebas de escritorio para comprobar su funcionamiento.

## 1. Credenciales

Este algoritmo verifica si el usuario y la contraseña son correctos.

**Tabla de verdad**

| Usuario correcto | Contraseña correcta | Resultado |

| Verdadero | Verdadero | Acceso concedido |
| Verdadero | Falso | Acceso denegado |
| Falso | Verdadero | Acceso denegado |
| Falso | Falso | Acceso denegado |

**Prueba de escritorio**

| Usuario | Contraseña | Resultado |

| hola | chao | Acceso concedido |
| hola | 1234 | Acceso denegado |
| juan | chao | Acceso denegado |
| juan | 1234 | Acceso denegado |

## 2. Edades

Este algoritmo determina si una persona es mayor o menor de edad.

**Tabla de verdad**

| Edad >= 18 | Resultado |

| Verdadero | Mayor de edad |
| Falso | Menor de edad |

**Prueba de escritorio**

| Edad | Resultado |

| 17 | Menor de edad |
| 18 | Mayor de edad |
| 19 | Mayor de edad |

Los valores 17, 18 y 19 permiten comprobar el límite de la mayoría de edad. El algoritmo todavía no valida las edades negativas.

## 3. Número mayor

Este algoritmo compara dos números e indica cuál es mayor o si son iguales.

**Tabla de decisión**

| Número 1 > Número 2 | Número 2 > Número 1 | Resultado |

| Verdadero | Falso | El primero es mayor |
| Falso | Verdadero | El segundo es mayor |
| Falso | Falso | Son iguales |

**Prueba de escritorio**

| Número 1 | Número 2 | Resultado |

| 10 | 5 | 10 es mayor |
| 5 | 10 | 10 es mayor |
| 8 | 8 | Son iguales |
| 0 | 0 | Son iguales |
| -2 | -5 | -2 es mayor |

## 4. Triángulos

Este algoritmo recibe tres números y determina si el triángulo es equilátero, isósceles o escaleno.

**Tabla de decisión**

| Condición | Resultado |

| Los tres lados son iguales | Equilátero |
| Dos lados son iguales | Isósceles |
| Los tres lados son diferentes | Escaleno |

**Prueba de escritorio**

| Lado 1 | Lado 2 | Lado 3 | Resultado |

| 5 | 5 | 5 | Equilátero |
| 5 | 5 | 3 | Isósceles |
| 3 | 4 | 5 | Escaleno |
| 8 | 8 | 8 | Equilátero |
| 4 | 4 | 6 | Isósceles |
| 6 | 7 | 8 | Escaleno |

**Observación:** Para este ejercicio se trabajó principalmente en la clasificación de los triángulos. En una próxima versión se mejorará la validación de los números positivos y negativos.

## Conclusión

Con estos ejercicios practiqué las condiciones "Si", "SiNo", los operadores lógicos "Y" y "O", y las comparaciones entre valores.
Las pruebas de escritorio me ayudaron a revisar los resultados y comprobar casos normales y casos borde.

## Autor
Alexa Bedoya Rojas