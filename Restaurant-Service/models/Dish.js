import mongoose from "mongoose";

const DishSchema=mongoose.Schema(
    {
        categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
        dishname:{type:String,required:true},
        description: { type: String },   
        price: { type: Number, required: true }, 
        availability: { type: Boolean, default: true }
});

const Dish=mongoose.model('Dish',DishSchema);

export default Dish;