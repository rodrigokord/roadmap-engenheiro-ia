def contar(capturas):
    placar = 0

    # TODO: Crie um loop 'for' para tirar cada 'pal' da lista 'capturas'
    for pal in capturas:
    
        # TODO: Crie um 'if' para verificar se o 'pal' atual é igual (==) a "Cattiva"
        if pal == "Cattiva":
            placar = placar + 1
            
        
            # TODO: Se for verdade, pegue o 'placar' e some 1 a ele
        else:
            placar + 1
            

    return placar

# Área de Testes
bolsa = ["Lamball", "Cattiva", "Chikipi", "Cattiva", "Cattiva", "Lamball"]

print("=== RELATÓRIO DE CAPTURAS ===")
print(contar(bolsa))