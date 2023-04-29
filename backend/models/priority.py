from configs.config import *

class Priority(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    grau = db.Column(db.Text)

    def json(self):
        return {
            "id": self.id,
            "grau": self.grau
        }