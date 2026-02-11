# 1mashq
ism=input("ismingizni kiriting")
print("salom",ism)

# 2mashq
tugilgan_yil = int(input("Tugilgan yilingizni kiriting: "))
hozirgi_yil = 2026
yosh = hozirgi_yil - tugilgan_yil
print("Sizning yoshingiz:", yosh)

# 3mashq
a = int(input("Birinchi sonni kiriting: "))
b = int(input("Ikkinchi sonni kiriting: "))
print("Yig'indi:", a + b)
print("Ko'paytma:", a * b)

# 4mashq
narx = float(input("Mahsulot narxini kiriting: "))
chegirma = float(input("Chegirma foizini kiriting: "))
yakuniy_narx = narx - (narx * chegirma / 100)
print("tolov sumasi:", yakuniy_narx, "so'm")

# 5mashq
ism = "saidjon"
familya = "tolqinboyev"
yosh = "15"
shahringiz = "toshkent"
print ( f"{ism} {familya} {yosh} yoshdaman {shahringiz} viloyatida yashayman ")
