def apurar(votos):
    resultado = {}

    for voto in votos:
        # Sem aspas! Estamos checando a variável dicionário.
        if voto in resultado:
            # Atualiza apenas o placar do candidato atual
            resultado[voto] = resultado[voto] + 1
        
        else:
            # Se ele não estava no dicionário, cria a gaveta dele valendo 1
            resultado[voto] = 1

    return resultado

# Área de Testes
urna = ["Ana", "Carlos", "Ana", "Beatriz", "Carlos", "Ana"]

print("=== RESULTADO DA APURAÇÃO ===")
print(apurar(urna))