console.log("Server is running...");

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("Mongodb connection succeed");
        const PORT = process.env.PORT ?? 3005;
        app.listen(PORT, function () {
            console.info(`The server is running succesfully on port: ${PORT}`);
            console.info(`Address: http://localhost:${PORT}/admin/n`);
        })
    })
    .catch(err => console.log("ERROR on connection mongodb", err));