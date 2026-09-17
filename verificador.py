def eh_palindromo(texto):
    """Algoritmo para verificar se um texto é um palíndromo."""
    
    # Passo 1: Limpeza dos dados (Tirar espaços e deixar tudo minúsculo)
    texto_limpo = texto.replace(" ", "").lower()
    
    # Passo 2: Inversão (O Python tem um truque excelente chamado 'slicing' [::-1] para inverter textos)
    texto_invertido = texto_limpo[::-1]
    
    # Passo 3: Lógica booleana (Compara o original com o invertido)
    return texto_limpo == texto_invertido

# Testando nosso algoritmo
print("--- TESTE DE ALGORITMO ---")
print(f"A palavra 'radar' é palíndromo? {eh_palindromo('radar')}")
print(f"A palavra 'python' é palíndromo? {eh_palindromo('python')}")
print(f"A frase 'A sacada da casa' é palíndromo? {eh_palindromo('A sacada da casa')}")