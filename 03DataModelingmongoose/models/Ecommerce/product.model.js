import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        description:{
            type : String,
            required:true,
        },
        name:{
            type : String,
            required:true,
        },
        poductImage:{
            type:String,
            // we can store the profile image in a static folder in our server not in database and just keept a static folder url 

        },
        price :{
            type:Number,
            default:0
        },
        stock:{
            type:Number,
            default:0
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true
        },
        Owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }

    },
    {timestamps:true}
)

export const Product = mongoose.model('Product',productSchema);