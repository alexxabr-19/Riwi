Algoritmo numeroMayor
	Escribir "Ingrese un número: "
	Leer num1
	
	Escribir "Ingrese otro número: "
	Leer num2
	
	Si num1 > num2 Entonces
		Escribir "EL número " + num1 + " Es mayor que el número " + num2
	SiNo
		Si num2 > num1 Entonces
			Escribir "EL número " + num2 + " Es mayor que el número " + num1
		SiNo
			Escribir "Los números son iguales: "
		Fin Si
	Fin Si
	
FinAlgoritmo
