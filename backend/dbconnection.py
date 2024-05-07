from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://ahokpossibrunel:wBmShFX4wCjF8Fuf@mycluster.hlt8lwg.mongodb.net/?retryWrites=true&w=majority&appName=myCluster"


client = MongoClient(uri, server_api=ServerApi('1'))
db = client["authapp"]
a = db["users"].find_one({}, {'_id': 0}).__str__()
print(a)
db["users"].insert_one({"username": "brunel", "password": "testifyer"})


try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)