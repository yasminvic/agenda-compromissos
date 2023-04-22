from configs.config import *
from models import *

@app.route("/getAll")
def getAll():
    data = db.session.query(Appointment).all()

    if data:
        data_json = []
        for element in data:
            data_json.append(element.json())

        resp = {"result": "OK", "details": data_json}
        return jsonify(resp)
    
    if data == [] or data == None:
        resp = {"result":"Error", "details":"{}"}
        return jsonify(resp)
