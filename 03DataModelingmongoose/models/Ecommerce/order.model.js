import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        productId :{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number,
            rquired:true
        }
    }
)


const orderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true,
        },
        customer:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        orderItems:{
            type: [orderItemSchema]
            // type:[
            //     {
            //         productId :{
            //             type: mongoose.Schema.Types.ObjectId,
            //             ref:'Product'
            //         },
            //         quantity:{
            //             type:Number,
            //             rquired:true
            //         }
            //     }
            // ]
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum : ["Pending","Cancelled","Delivered"], // only this values can be set to enum 
            default:"Pending"
        }

    },
    {timestamps:true}
)


export const Order = mongoose.model('Order',orderSchema)