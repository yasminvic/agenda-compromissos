from configs.config import *
from enums.priority import *

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement= True)
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    startDate = db.Column(db.Text)
    endDate = db.Column(db.Text)
    createdOn = db.Column(db.Text)
    priority = db.Column(db.Text)

    def json(self):
        return {
            "title": self.title,
            "description":self.description,
            "startDate":self.startDate,
            "endDate":self.endDate,
            "createdOn":self.createdOn,
            "priority":self.priority
        }
    

    