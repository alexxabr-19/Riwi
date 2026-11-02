nombre = input("Ingrese su nombre: ")
producto = input("Ingrese el nombre del producto: ")
precio = float(input("Ingrese el precio del producto: "))
cantidad = int(input("Ingrese la cantidad de producto a llevar: "))

subtotal = precio * cantidad

if subtotal >= 500000:
    descuento = subtotal*0.15
    total_compra = subtotal - descuento
elif subtotal >= 200000:
    descuento = subtotal*0.10
    total_compra = subtotal - descuento
else: 
    descuento = 0
    total_compra = subtotal    

print("")
print("**********FACTURA***********")      
print("Nombre: " + nombre)
print("Producto: " + producto)
print("Precio unitario: " , precio)
print("Cantidad: " , cantidad)
print("Subtotal: " , subtotal)
print("Descuento: " , descuento)
print("Total compra: " , total_compra)
    