from google import genai

# 1. ATENÇÃO: Lembre-se de colocar a sua chave correta (que começa por AIza) aqui!
# Se usar a chave "AQ...", vai dar erro de permissão novamente.
CHAVE_API = "CHAVE_ESCONDIDA"
client = genai.Client(api_key=CHAVE_API)

# 2. Simular a dor do utilizador
foco_do_utilizador = "medo de falhar nos estudos e no futuro"
instrucao = f"Crie um mantra curto e curativo, de apenas uma frase, para ajudar alguém a libertar e ultrapassar o seguinte sentimento: {foco_do_utilizador}. O tom deve ser pacífico, zen e encorajador."

# 3. Gerar o conteúdo usando a SUA descoberta!
print("A gerar o mantra...")
response = client.models.generate_content(
    model='gemini-3-flash-preview',
    contents=instrucao,
)

print("\n--- MANTRA GERADO ---")
print(response.text)
print("---------------------")