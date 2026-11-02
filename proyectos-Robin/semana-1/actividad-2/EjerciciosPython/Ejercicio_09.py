valorCompra = int(input("Ingrese el valor de la compra: "))

if valorCompra >= 200000:
    descuento = valorCompra*0.20
    totalCompra = valorCompra - descuento
    print("Usted obtuvo un descuento de " , descuento , ". El total a pagar es: " , totalCompra)
elif valorCompra >= 100000:
    descuento = valorCompra*0.10
    totalCompra = valorCompra - descuento    
    print("Usted obtuvo un descuento de " , descuento , ". El total a pagar es: " , totalCompra)
elif valorCompra > 0:
    print("El total a pagar es: " , valorCompra)    
else:
    print("Ingrese una cantidad válida.")    
