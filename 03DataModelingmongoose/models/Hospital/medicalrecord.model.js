import mongoose from "mongoose"


const medicalRecordSchema = mongoose.Schema(
    {
        
    }
    ,{timestamps:true}
)


export const MedicalRecord = mongoose.mode("MedicalRecord",medicalRecordSchema);