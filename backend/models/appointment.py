from configs.config import *
from enums.priority import *

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement= True)
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    startDate = db.Column(db.Date)
    endDate = db.Column(db.Date)
    createdOn = db.Column(db.Date)
    priority = PriorityEnum()

    def json(self):
        return {
            "id": self.id,
            "title": self.title,
            "description":self.description,
            "startDate":self.startDate,
            "endDate":self.endDate,
            "createdOn":self.createdOn,
            "priority":self.priority
        }