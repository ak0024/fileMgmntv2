import jaydebeapi
import jpype
from db_constants import H2_JAR_PATH, DATABASE_URL, DB_USERNAME, DB_PASSWORD, JVM_PATH


def get_h2_connection():
    if not jpype.isJVMStarted():
        jpype.startJVM(JVM_PATH, "-Djava.class.path=" + H2_JAR_PATH)
    # Connect to the H2 database using the constants from db_config
    conn = jaydebeapi.connect(
        "org.h2.Driver",  # H2 driver class name
        DATABASE_URL,  # JDBC URL
        [DB_USERNAME, DB_PASSWORD],  # Credentials
        H2_JAR_PATH,  # Path to H2 JDBC driver
    )

    return conn


# db.py
from flask_sqlalchemy import SQLAlchemy

# Initialize the SQLAlchemy instance
db = SQLAlchemy()
