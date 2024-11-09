from dbConn import get_h2_connection

conn = get_h2_connection()

cursor = conn.cursor()
cursor.execute("SELECT 1")

# Print the result
print(cursor.fetchall())

# Close resources
cursor.close()
conn.close()
