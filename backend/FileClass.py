
# models/file.py
from dbConn import db  # Import the SQLAlchemy instance

class File(db.Model):
    __tablename__ = "files"

    fileid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    filename = db.Column(db.String, nullable=False)  # Name of the file
    uniquefilename = db.Column(db.String, nullable=False, unique=True)  # Unique name for the file
    parentfile = db.Column(db.Integer, db.ForeignKey("files.fileid"))  # Foreign key for self-reference
    type = db.Column(db.String)  # Type of the file (e.g., image, document)
    extension = db.Column(db.String)  # Extension of the file (e.g., .jpg, .txt)
    path = db.Column(db.String)  # Path to the file

    # Define a relationship for self-referencing the parent file
    parent = db.relationship("File", remote_side=[fileid], backref="children")

    def __repr__(self):
        return f"<File {self.filename} ({self.fileid})>"
