from configs.config import *

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text)
    login = db.Column(db.Text)
    email = db.Column(db.Text)
    senha = db.Column(db.Text)

    def json(self):
        return {
            "id":self.id,
            "name":self.name,
            "login":self.login,
            "email":self.email,
            "senha":self.senha
        }