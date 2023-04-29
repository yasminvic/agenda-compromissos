from configs.config import *
from models.priority import *

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement= True)
    priority_id = db.Column(db.Integer, db.ForeignKey(Priority.id), nullable=False) #foreignkey de priority
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    startDate = db.Column(db.Text)
    endDate = db.Column(db.Text)
    priority = db.relationship("Priority")
    

    def json(self):
        return {
            "title": self.title,
            "description":self.description,
            "startDate":self.startDate,
            "endDate":self.endDate,
            "priority":self.priority.json()
        }
    

    