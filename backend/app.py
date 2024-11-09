from flask import Flask, jsonify
import json
from fileMgmtApis import getFiletree
import jaydebeapi
import jpype
from db_constants import H2_JAR_PATH, JVM_PATH, DATABASE_URL
from dbConn import db
# from FileClass import File


app = Flask(__name__)
app.config["DEBUG"] = True
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
db.init_app(app)




@app.route("/")
def home():
    return "Hello, Flask!"


@app.route("/files")
def get_files():
    files = getFiletree(0)
    
    return files
   


if __name__ == "__main__":
    app.run(debug=True, threaded=True)


