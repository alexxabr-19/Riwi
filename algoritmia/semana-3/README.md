# Algoritmos en PSeInt

## Descripción

En esta semana se realizaron cuatro ejercicios en PSeInt, utilizando ciclos "Para", "Mientras" y SubProcesos.

También se realizaron tablas de traza para comprender cómo funcionan los algoritmos.

## 1. Cajero del parqueadero
Este algoritmo permite ingresar el dinero cobrado por cada carro. Utiliza un ciclo "Mientras" para sumar el dinero y contar los carros atendidos. El programa termina cuando se ingresa cero.

### Tabla de traza

| Vuelta | Valor | Total | Carros |

| 1 | 4000 | 4000 | 1 |
| 2 | 8000 | 12000 | 2 |
| 3 | 2000 | 14000 | 3 |
| Fin | 0 | 14000 | 3 |

**Resultado:** 3 carros atendidos y $14.000 recaudados.


## 2. Notas de estudiantes
Este algoritmo solicita las notas de cinco estudiantes. Utiliza un ciclo "Para" para calcular el promedio, contar los aprobados e identificar la nota mayor y menor.

### Tabla de traza

| Vuelta | Nota | Suma | Aprobados |

| 1 | 3,5 | 3,5 | 1 |
| 2 | 2,8 | 6,3 | 1 |
| 3 | 4,9 | 11,2 | 2 |
| 4 | 3,0 | 14,2 | 3 |
| 5 | 4,2 | 18,4 | 4 |

**Resultados:**

- Promedio: 3,68
- Aprobados: 4
- Nota mayor: 4,9
- Nota menor: 2,8
- Un estudiante perdió.

## 3. Pirámide

Este algoritmo solicita la altura de una pirámide y utiliza ciclos "Para" para dibujarla con asteriscos.

### Tabla de traza

Ejemplo con una altura de 4:

| Fila | Espacios | Asteriscos |

| 1 | 3 | 1 |
| 2 | 2 | 3 |
| 3 | 1 | 5 |
| 4 | 0 | 7 |

### Resultado
```text
   *
  ***
 *****
*******
```

## 4. Factura de restaurante
Este algoritmo permite ingresar los precios de varios productos y calcular una factura con impuesto del 8 % y propina del 10 %.

El programa se divide en tres SubProcesos:

- **LeerPedido:** recibe los precios y los suma.
- **CalcularPorcentaje:** calcula el impuesto y la propina.
- **MostrarFactura:** muestra el valor total de la factura.

### Tabla de traza

| Vuelta | Precio ingresado | Subtotal |

| 1 | 20000 | 20000 |
| 2 | 15000 | 35000 |
| Fin | 0 | 35000 |

### Resultado de la factura

| Concepto | Valor |

| Subtotal | $35.000 |
| Impuesto (8 %) | $2.800 |
| Propina (10 %) | $3.500 |
| **Total** | **$41.300** |



## Observación de la entrega

En esta semana se realizaron los cuatro ejercicios en PSeInt y sus respectivas tablas de traza.

Sin embargo, **no se cumplió completamente con la entrega**, ya que me quedó pendiente realizar el modelo de cajas o árbol de componentes de la factura. Pido disculpas por no cumplir al 100% con la entrega.
