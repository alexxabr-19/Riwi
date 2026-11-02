saldoInicial = 500000


while True:
    print()
    print("Indique la operación que quiere realizar: ")
    print()

    opcion = input("C -> Para consultar el saldo.\nR -> Para retirar dinero.\nD -> Para depositar dinero.\nS -> Para salir\n")

    if opcion == "C":
        print("EL saldo disponible es: ", saldoInicial)
    elif opcion == "R":
        retiro = int(input("Ingrese el monto que quiere retirar: "))
        if retiro > saldoInicial:
            print("Fondos insuficientes.")
        elif retiro <= 0:
            print("Ingrese un monto válido.")    
        else:
            saldoInicial = saldoInicial - retiro
            print("Su saldo actual es: " , saldoInicial)   
    elif opcion == "D":
        deposito = int(input("Ingrese el monto que quiere Depositar: "))
        if deposito <= 0:
            print("Ingrese un monto válido")
        else:
            saldoInicial = saldoInicial + deposito
            print("Su saldo actual es: " , saldoInicial)
    elif opcion == "S":
        print("Bye Bye.")
        break
    else:
        print("Opción no válida")  

    continuar = input("¿Desea continuar? (s o n)")

    if continuar=="no":
        print("Bye Bye.")
        break  
    elif continuar != "si":
        break
    