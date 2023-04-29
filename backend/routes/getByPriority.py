from configs.config import *
from models.appointment import *

@app.route("/getByPriority/<int:id>")
def getByPriority(id):
    data = db.session.query(Appointment).filter(Appointment.priority_id == id)

    if data:
        data_json = []
        for element in data:
            data_json.append(element.json())
        
        resp = {"result":"OK", "details": data_json}
        return jsonify(resp)
    
    if data == [] or data == None:
        resp = {"result":"Error", "details":"{}"}
        return jsonify(resp)