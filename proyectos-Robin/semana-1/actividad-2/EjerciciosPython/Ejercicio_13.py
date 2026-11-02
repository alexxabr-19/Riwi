pregunta = input("¿Desea hacer una operación? ")        

while(pregunta != "no"):
    numero1 = int(input("Ingrese un número: "))
    numero2 = int(input("Ingrese otro número: "))

    entrada = input("Indique la operación que quiere realizar:\n Escriba S si quiere sumar los números.\n Escriba R si quiere restar los números.\n Escriba D si quiere dividir los números.\n Escriba M si quiere multiplicar los números.\n")

    if entrada == "S":
        resultado = numero1 + numero2
        print("La suma de tus números es: " , resultado)
    elif entrada == "R":      
        resultado = numero1 - numero2
        print("La resta de tus números es: " , resultado)    
    elif entrada == "M":    
        resultado = numero1 * numero2
        print("La multiplicación de tus números es: " , resultado)   
    elif entrada == "D":    
        if numero2 == 0: 
           print("No se puede dividir entre 0.")           
        else:    
           resultado = numero1 / numero2
           print("La división de tus número es: " , resultado) 
    else:
        print("Opción no válida.")        

    pregunta = input("¿Desea hacer otra operación? ") 