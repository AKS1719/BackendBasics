import mongoose from "mongoose"


const patientSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        diagonosedWith:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        bloodGroup:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            enum : ['M','F','O'],
            required:'true'
        },
        admittedIn:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        },
        

    }
    ,{timestamps:true}
)


export const Patient = mongoose.mode("Patient",patientSchema);