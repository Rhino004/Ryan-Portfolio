from backend.config import db
from datetime import date
from sqlalchemy.orm import relationship, Mapped, mapped_column
from typing import list


class Projects(db.Model):
    __tablename__ = 'projects'
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(db.String(50), primary_key=True)
    description: Mapped[str] = mapped_column(db.String(200), nullable=False)
    program_language: Mapped[str] = mapped_column(db.String(50), nullable=False)
    personal: Mapped[bool] = mapped_column(db.Boolean, nullable=False)
    team: Mapped[bool] = mapped_column(db.Boolean, nullable=False)
    start_date: Mapped[date] = mapped_column(db.Date, nullable=False)
    end_date: Mapped[date] = mapped_column(db.Date, nullable=True)
    status: Mapped[str] = mapped_column(db.String(30), nullable=False)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'program_language': self.program_language,
            'personal': self.personal,
            'team': self.team,
            'start_date': self.start_date.isoformat(),
            'end_date': self.end_date.isoformat(),
            'status': self.status
        }