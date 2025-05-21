from backend.config import db
from datetime import date
from sqlalchemy.orm import relationship, Mapped, mapped_column
from werkzeug.security import generate_password_hash, check_password_hash
#from typing import List
class User(db.Model):
    __tablename__ = 'Users'
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(db.String(50), unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(db.String(200), nullable=False)
    is_admin: Mapped[bool] = mapped_column(db.Boolean, nullable=False)
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
