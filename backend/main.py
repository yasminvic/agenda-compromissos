from configs.config import *
from routes import *


with app.app_context():
    db.create_all()
    CORS(app, support_credentials=True)
    # CORS(app, resource={
    # r"/*":{
    #     "origins":"*"
    # }
    # })
    app.run(debug = True, port=5000, host='0.0.0.0')

# debug: alterações no código reiniciam o servidor web
# host: o servidor está disponível para acesso na rede
# port: o servidor fica disponível em porta diferente da padrão
