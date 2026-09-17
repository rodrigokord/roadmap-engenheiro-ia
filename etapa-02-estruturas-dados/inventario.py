def contar_pocoes(lista_de_saque):
    """Conta quantos itens do tipo 'pocao' existem na lista."""
    
    total_pocoes = 0 # Nosso placar numérico
    
    # 'itens' é a etiqueta temporária para a string da rodada
    for itens in lista_de_saque:
        
        # Procuramos o texto "pocao" dentro da string atual 'itens'
        if "pocao" in itens:
            
            # Atualizamos o placar numérico
            total_pocoes = total_pocoes + 1
            
    return total_pocoes

# Área de Testes
meu_loot = ["espada de ferro", "pocao de vida", "bota de couro", "pocao de mana", "pocao de estamina"]

print("=== VERIFICAÇÃO DE INVENTÁRIO ===")
print(f"Total de poções encontradas: {contar_pocoes(meu_loot)}")