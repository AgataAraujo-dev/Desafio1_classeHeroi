nomeheroi = "Rei Arthur"
xpheroi = 100
nivelheroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

while xpheroi <= 9000:
    print(f"Upando {nomeheroi}")
    xpheroi += 1000 

print(f"Total XP do {nomeheroi}: {xpheroi}")

if xpheroi <= 1000:
    nivelheroi = "Ferro"
elif xpheroi >=1001 and xpheroi <=2000:
    nivelheroi = "Bronze"
elif xpheroi >=2001 and xpheroi <=5000:
    nivelheroi = "Prata"
elif xpheroi >=5001 and xpheroi <=7000:
    nivelheroi = "Ouro"
elif xpheroi >=7001 and xpheroi <=8000:
    nivelheroi = "Platina"
elif xpheroi >=8001 and xpheroi <=9000:
    nivelheroi = "Ascendente"
elif xpheroi >=9001 and xpheroi <=10000:
    nivelheroi = "Imortal"
elif xpheroi >=10001:
    nivelheroi = "Radiante"


print(f"O Herói {nomeheroi} está no nível {nivelheroi}")