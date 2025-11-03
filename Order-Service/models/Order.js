import mongoose from 'mongoose';

const Orderschema=new mongoose.Schema(
    {
        userId:{type:String},
        restaurantId:{type:String},
        items:[
        {dishId:{type:String},quantity:{type:Number}}
        ],
        totalprice:{type:Number,},
        Status:{type:String,enum:['Pending','Done','Out for Delivery','Delivered','Cancelled'],default:'Pending'},
        paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending'
        },
        deliveryPersonId: { type:String},
    }
);

const Order=mongoose.model('Order',Orderschema);

export default Order;