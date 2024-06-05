import mongoose from "mongoose"
import { Hospital } from "./hospital.model";



const doctorSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        salary:{
            type:String,
            required:true,
        },
        qualification:{
            type:String,
            required:true,
        },
        experienceInYear:{
            type:Number,
            default:0
        },
        worksInHospital:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hospital"
            }
        ]
    }
    ,{timestamps:true}
)


export const Doctor = mongoose.mode("Doctor",doctorSchema);