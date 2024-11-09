from dbConn import db
from sqlalchemy import text
import jpype
from flask import Flask, jsonify
from FileClass import File




def getFiletree(fileId):
    # Query for all files using ORM
    
    # Execute another query with raw SQL
    result = db.session.execute(
        text("SELECT * FROM files WHERE parentfile = :fileId"), {"fileId": fileId}
    ).mappings()

    if result is None:
        return ""

   

    # Build the full files list as before
    files_list = []

    for file in result:
        file_dict = {
            "fileid": file["fileid"],
            "filename": file["filename"],
            "uniquefilename": file["uniquefilename"],
            "parentfile": file["parentfile"],
            "type": file["type"],
            "extension": file["extension"],
            "path": file["path"],
        }
        if file_dict["parentfile"] != "" and file_dict["type"] == "Folder":
            file_dict["children"] = getFiletree(file_dict["fileid"])
        files_list.append(file_dict)
    # import pdb; pdb.set_trace()
    return files_list

