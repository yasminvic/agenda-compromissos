from configs.config import *
from models import Appointment, Priority

@app.route("/getAll/<string:classe>")
def getAll(classe):

    if classe == "Appointment":
        data = db.session.query(Appointment).all()
    elif classe == "Priority":
        data = db.session.query(Priority).all()

    if data:
        data_json = []
        for element in data:
            data_json.append(element.json())

        resp = {"result": "OK", "details": data_json}
        return jsonify(resp)
    
    if data == [] or data == None:
        resp = {"result":"Error", "details":"{}"}
        return jsonify(resp)
