from flask_cors import cross_origin
from configs.config import *
from models import Appointment, Priority


@app.route("/incluir/<string:classe>", methods=["POST"])
@cross_origin(allow_headers=['Content-Type'], origins='*')
def incluir(classe):
    data = request.get_json()

    try:
        if classe == "Appointment":
            new = Appointment(**data)
        elif classe == "Priority":
            new = Priority(**data)

        db.session.add(new)
        db.session.commit()
        resp = jsonify({"result": "OK"})
        
    except Exception as error:
        resp = jsonify({"result":"Error", "details":str(error)})

    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp


