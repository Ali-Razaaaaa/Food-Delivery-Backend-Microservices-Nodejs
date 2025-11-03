import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  openingHours: { type: String },
  cuisineType: { type: String },
  status: { type: String, enum: ['Open', 'Close'], default: 'Open' }
});

RestaurantSchema.virtual('categories',
  {
    ref:'Category',
    localField:'_id',
    foreignField:'restaurantId',
  }
);

RestaurantSchema.set('toJSON', { virtuals: true });
RestaurantSchema.set('toObject', { virtuals: true });

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;
