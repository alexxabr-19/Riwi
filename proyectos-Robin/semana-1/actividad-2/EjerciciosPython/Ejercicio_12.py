lado1 = int(input("Ingrese el valor del primer lado del triángulo: "))
lado2 = int(input("Ingrese el valor del segundo lado del triángulo: "))
lado3 = int(input("Ingrese el valor del tercer lado del triángulo: "))

if lado1 > 0 and lado2 > 0 and lado3 > 0:
    if lado1==lado2==lado3:
      print("Su triángulo es EQUILÁTERO.")
    elif lado1 == lado2 or lado2 == lado3 or lado1 == lado3:
      print("Su triángulo es ISÓSCELES.")
    else:
      print("Su triángulo es ESCALENO")
else:
      print("Ingrese un número válido. POSITIVO.")          