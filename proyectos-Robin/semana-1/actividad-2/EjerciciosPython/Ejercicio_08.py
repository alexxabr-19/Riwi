nota = int(input("Ingresa la nota: "))

print()

if nota >= 0 and nota <= 100:
    if nota >= 70:
        print("Usted ha aprobado con " , nota , " puntos. Felicidades!"  )
    else:
        print("Usted ha desaprobado con " , nota , " puntos.")    
else:
    print("Nota no válida. Ingrese un valor entre 0 y 100.")    

        

