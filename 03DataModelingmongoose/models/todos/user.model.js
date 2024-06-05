import mongoose from "mongoose";
// basic approach
// const userSchema = new mongoose.Schema(
//     {
//         username : String,
//         email: String,
//         isActive: Boolean
//     }
// )


// professional approach
const userSchema = new mongoose.Schema(
    // first object defines the what data we are taking
    // the second object defines what timestamps we are taking
    {
        username : {
            type:String,
            required:true,
            unique:true, //  makes the values in username unique
            lowercase:true,
        },
        email: {
            type:String,
            required:true,
            unique:true, //  makes the values in username unique
            lowercase:true,
        },
        password:{
            type:String,
            //         if not true then pass the other string
            required : [true,'password is required'],
        },
        isActive: Boolean
    },
    {timestamps:true}
)
                // mongoose.mode create the data model named User based on userSchema 
export const User = mongoose.model('User',userSchema);


// User --> changed in the mongodb as users --> it makes it plural and makes everything in lowercase