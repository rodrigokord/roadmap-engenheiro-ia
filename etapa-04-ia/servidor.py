from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai

# Inicializa o servidor e o porteiro de segurança
app = Flask(__name__)
CORS(app) 

CHAVE_API = "CHAVE_ESCONDIDA"
client = genai.Client(api_key=CHAVE_API)

# A nossa "porta de entrada" que o site vai chamar
@app.route('/gerar-mantra', methods=['POST'])
def gerar_mantra():
    # Recebe o texto que o utilizador digitou no Ponto de Foco
    dados = request.json
    
    print(f"\n[!] Pedido recebido do site! Foco a libertar: {foco_do_utilizador}")

  # ==========================================
    # RESUMO DA ATUALIZAÇÃO NO SERVIDOR
    # 1. Adiciona .strip() para limpar espaços vazios indesejados.
    # 2. Cria uma trava de segurança (if not) para injetar um tema padrão se o utilizador não digitar nada.
    # 3. Aplica Engenharia de Prompt estrita ("REGRA OBRIGATÓRIA") para calar a IA tagarela.
    # ==========================================

    foco_do_utilizador = dados.get('foco', '').strip()
    
    # TODO 2: Preencha com a dor padrão que preferir. Eu sugeri "ansiedade", mas você pode mudar o texto entre aspas.
    if not foco_do_utilizador:
        foco_do_utilizador = "Ansiedade"
    
    print(f"\n[!] Pedido recebido do site! Foco a libertar: {foco_do_utilizador}")

    instrucao = f"Crie um mantra curto e curativo, de apenas uma frase, para ajudar a libertar: {foco_do_utilizador}. REGRA OBRIGATÓRIA: Responda APENAS com a frase do mantra. Sem aspas, sem explicações, sem texto de introdução."

    # A instrução agora tem uma regra estrita
    instrucao = f"Crie um mantra curto e curativo, de apenas uma frase, para ajudar a libertar: {foco_do_utilizador}. REGRA OBRIGATÓRIA: Responda APENAS com a frase do mantra. Sem aspas, sem explicações, sem texto de introdução."

    # O pedido ao motor
    response = client.models.generate_content(
        model='gemini-3-flash-preview',
        contents=instrucao,
    )
    
    print(f"[!] Mantra gerado: {response.text}")

    # Devolve o mantra empacotado num formato (JSON) que o site consegue ler
    return jsonify({"mantra": response.text})

# Liga o servidor
if __name__ == '__main__':
    print("Servidor do EQUILIBRIVM acordado e à escuta na porta 5000...")
    app.run(debug=True, port=5000)