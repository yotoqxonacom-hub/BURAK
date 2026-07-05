import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";
import dns from "dns";

dns.setServers(["8.8.8.8"]);

console.log("MONGO_URL =", process.env.MONGO_URL);


mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3033;
    app.listen(PORT, function () {
      console.info(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
