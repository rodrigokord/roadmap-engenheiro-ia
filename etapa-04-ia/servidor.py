from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai

app = Flask(__name__)
CORS(app) 

# TODO 1: Cole aqui a sua CHAVE_API (aquela que você escondeu antes do git push)
CHAVE_API = "TODO_COLE_SUA_CHAVE_AQUI"
client = genai.Client(api_key=CHAVE_API)

@app.route('/gerar-mantra', methods=['POST'])
def gerar_mantra():
    try:
        dados = request.json or {}
        foco_do_utilizador = dados.get('foco', '').strip()
        
        if not foco_do_utilizador:
            foco_do_utilizador = "ansiedade e as tensões do dia a dia"
            
        print(f"\n[!] Pedido recebido do site! Foco a libertar: {foco_do_utilizador}")

        instrucao = f"Crie um mantra curto e curativo, de apenas uma frase, para ajudar a libertar: {foco_do_utilizador}. REGRA OBRIGATÓRIA: Responda APENAS com a frase do mantra. Sem aspas, sem explicações, sem texto de introdução."

        response = client.models.generate_content(
            model='gemini-3-flash-preview',
            contents=instrucao,
        )
        
        print(f"[!] Mantra gerado: {response.text}")
        return jsonify({"mantra": response.text})
        
    except Exception as erro:
        print(f"\n[!] ALERTA VERMELHO: {erro}")
        return jsonify({"mantra": "A sua paz interior é mais forte que qualquer servidor. Respire fundo."})

if __name__ == '__main__':
    print("Servidor do EQUILIBRIVM acordado e à escuta na porta 5000...")
    app.run(debug=True, port=5000)