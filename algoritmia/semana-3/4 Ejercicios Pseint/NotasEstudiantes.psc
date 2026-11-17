Algoritmo NotasEstudiantes
    Definir i, aprobados Como Entero
    Definir nota, suma, promedio, mayor, menor Como Real
	
    suma <- 0
    aprobados <- 0
	
    Para i <- 1 Hasta 5 Hacer
        Escribir "Ingrese la nota:"
        Leer nota
		
        suma <- suma + nota
		
        Si nota >= 3 Entonces
            aprobados <- aprobados + 1
        FinSi
		
        Si i = 1 Entonces
            mayor <- nota
            menor <- nota
        FinSi
		
        Si nota > mayor Entonces
            mayor <- nota
        FinSi
		
        Si nota < menor Entonces
            menor <- nota
        FinSi
    FinPara
	
    promedio <- suma / 5
	
    Escribir "Promedio: ", promedio
    Escribir "Aprobados: ", aprobados
    Escribir "Nota mayor: ", mayor
    Escribir "Nota menor: ", menor
	
    Si aprobados < 5 Entonces
        Escribir "Alguien perdió"
    SiNo
        Escribir "Nadie perdió"
    FinSi
FinAlgoritmo

