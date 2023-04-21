from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

#obter caminho atual
caminho_atual = os.path.dirname(os.path.abspath(__file__))
caminhopai = os.path.dirname(caminho_atual)
#entrar na pasta database
pasta = os.path.join(caminhopai, 'database/')
#local do banco de dados
arquivodb = os.path.join(pasta, 'dados.db')

#configurando db
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{arquivodb}'

#Uma configuração para habilitar ou desabilitar o rastreamento de modificações de objetos.
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)