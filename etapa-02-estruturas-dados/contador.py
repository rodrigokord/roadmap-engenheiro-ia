def contar_votos(lista_votos):
    resultado = {}

    for votos in lista_votos:
        if votos in resultado:
            resultado[votos] = resultado[votos] + 1
        else:
            resultado[votos] = 1

    return resultado

urna = ["Ana", "Carlos", "Ana", "Beatriz", "Carlos", "Ana", "Ana", "Beatriz"]
print("=== RESULTADO DA APURACAO ===")
print(contar_votos(urna))