import mongoose from "mongoose"
export async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connexion de mongo reussie")
    }
    catch(e){
        console.log("erreur de connexion de bd")
    }
}