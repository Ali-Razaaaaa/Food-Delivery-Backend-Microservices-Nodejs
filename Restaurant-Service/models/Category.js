import mongoose from "mongoose";

const CategorySchema=mongoose.Schema(
    {
        restaurantId:{type:mongoose.Schema.Types.ObjectId,ref:'Restaurant'},
        name:{type:String, required:true}
    }
);

CategorySchema.virtual('dishes',
    {
        ref:'Dish',
        localField:'_id',
        foreignField:'categoryId',
    }
)

CategorySchema.set('toJSON', { virtuals: true });
CategorySchema.set('toObject', { virtuals: true });

const Category=mongoose.model('Category',CategorySchema);

export default Category;