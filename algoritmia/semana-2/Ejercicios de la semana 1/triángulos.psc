Algoritmo triángulos
	
	Escribir "Ingrese el valor del primer lado del triángulo: "
	Leer lado1
	
	Escribir "Ingrese el valor del segundo lado del triángulo: "
	Leer lado2
	
	Escribir "Ingrese el valor del tercer triángulo: "
	leer lado3
	
	Si lado1 > 0 y lado2 > 0 y lado3 > 0 Entonces
		Si lado1=lado2 y lado1=lado3 Entonces
			Escribir  "Su triángulo es EQUILÁTERO."
		SiNo
			Si lado1 = lado2 o lado2 = lado3 o lado1 = lado3 Entonces
				Escribir "Su triángulo es ISÓSCELES."
			SiNo
				Escribir "Su triángulo es ESCALENO."
			Fin Si
		Fin Si
	SiNo
		Escribir  "Ingrese un número válido."
	Fin Si
FinAlgoritmo
