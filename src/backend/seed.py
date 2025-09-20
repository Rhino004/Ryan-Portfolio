import sys
import os
# Add the parent of the current file's directory (which is src/)
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from database.projects import Projects
from config import db
