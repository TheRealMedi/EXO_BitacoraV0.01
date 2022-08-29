import mongoose from "mongoose";

(async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost:37020/Bitacora");
        console.log('DB CONNECTED TO', db.Connection.name)        
    } catch (error) {
        console.error(error);
    }
})();