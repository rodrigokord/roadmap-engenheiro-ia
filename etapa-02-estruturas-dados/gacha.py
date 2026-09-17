def contar(tiros):
    placar = 0

    # TODO: Crie um loop 'for' para tirar cada 'tiro' da lista 'tiros'
    for tiro in tiros:
    
    # TODO: Crie um 'if' para verificar se o 'tiro' atual é igual (==) a "Sparkle"
      if tiro == "Sparkle":
        placar = placar + 1
    
    # TODO: Se for verdade, pegue o 'placar' e some 1 a ele

    return placar

# Área de Testes
historico = ["Pela", "Sparkle", "Qingque", "Sampo", "Sparkle"]

print("=== RESULTADO DOS WARPS ===")
print(contar(historico))