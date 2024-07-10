import express, { Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/user.route";
import { v2 as cloudinary } from 'cloudinary';
import restaurantRoute from './routes/restaurant.route';

mongoose
.connect(process.env.MONGODB_URI as string)
.then(() =>console.log("Connected to Mongo"));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({message: "health ok!"})
})

app.use("/api/my/user", userRoutes);
app.use("/api/my/restaurant", restaurantRoute)

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});

