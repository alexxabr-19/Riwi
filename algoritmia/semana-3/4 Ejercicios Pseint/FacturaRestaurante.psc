SubProceso LeerPedido(subtotal Por Referencia)
    Definir precio Como Real
	
    subtotal <- 0
    Escribir "Ingrese el precio (0 para terminar):"
    Leer precio
	
    Mientras precio <> 0 Hacer
        subtotal <- subtotal + precio
        Escribir "Ingrese otro precio (0 para terminar):"
        Leer precio
    FinMientras
FinSubProceso

SubProceso CalcularPorcentaje(subtotal, porcentaje, resultado Por Referencia)
    resultado <- subtotal * porcentaje / 100
FinSubProceso

SubProceso MostrarFactura(subtotal, impuesto, propina)
    Escribir "FACTURA"
    Escribir "Subtotal: ", subtotal
    Escribir "Impuesto: ", impuesto
    Escribir "Propina: ", propina
    Escribir "Total: ", subtotal + impuesto + propina
FinSubProceso

Algoritmo FacturaRestaurante
    Definir subtotal, impuesto, propina Como Real
	
    LeerPedido(subtotal)
    CalcularPorcentaje(subtotal, 8, impuesto)
    CalcularPorcentaje(subtotal, 10, propina)
    MostrarFactura(subtotal, impuesto, propina)
FinAlgoritmo

