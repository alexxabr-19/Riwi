a = float(input("Número 1: "))
b = float(input("Número 2: "))
c = float(input("Número 3: "))

if a <= b and a <= c:
    if b <= c:
        print(a, b, c)
    else:
        print(a, c, b)
elif b <= a and b <= c:
    if a <= c:
        print(b, a, c)
    else:
        print(b, c, a)
else:
    if a <= b:
        print(c, a, b)
    else:
        print(c, b, a)