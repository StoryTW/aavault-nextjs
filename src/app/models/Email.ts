import mongoose, { Document, Schema } from "mongoose";

export interface IEmail extends Document {
    email: string;
}

const emailSchema:Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

const Email = mongoose.models.Email ||  mongoose.model<IEmail>("Email", emailSchema);

 export default Email