from configs.config import *
from models import *

@app.route("/incluir", methods=['POST'])
def incluir():
    data = request.get_json()

    try:
        new = Appointment(**data)
        db.session.add(new)
        db.session.commit()
        resp = jsonify({"result": "OK"})
    except Exception as error:
        resp = jsonify({"result":"Error", "details":str(error)})

    return resp