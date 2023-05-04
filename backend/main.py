from configs.config import *
from routes import *
from models.priority import *

urgente = Priority(grau="Urgente")
importante = Priority(grau="Importante")
regular = Priority(grau="Regular")


with app.app_context():
    db.create_all()
    if db.session.query(Priority).all() == []:
        db.session.add(urgente)
        db.session.add(importante)
        db.session.add(regular)
        db.session.commit()

    print(db.session.query(Priority).all())
    CORS(app, resources={r"/*": {"origins": "*"}}, support_credentials=True)
    # CORS(app, resource={
    # r"/*":{
    #     "origins":"*"
    # }
    # })
    app.run(debug = True, port=5000, host='0.0.0.0')

# debug: alterações no código reiniciam o servidor web
# host: o servidor está disponível para acesso na rede
# port: o servidor fica disponível em porta diferente da padrão
