def contar(capturas):
    placar = 0

    for pal in capturas:
        if pal == "Cattiva":
            placar = placar + 1

    return placar

# Área de Testes
bolsa = ["Lamball", "Cattiva", "Chikipi", "Cattiva", "Cattiva", "Lamball"]

print("=== RELATÓRIO DE CAPTURAS ===")
print(contar(bolsa))