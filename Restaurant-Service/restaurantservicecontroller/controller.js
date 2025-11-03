import Restaurant from '../models/Restaurant.js'
import Category from '../models/Category.js';
import Dish from '../models/Dish.js';

export const postrestaurant=async(req,res)=>
{
    const { name, address, contact, openingHours, cuisineType, status } = req.body;

    try
    {
        await Restaurant.create({
        name:name, address:address, contact:contact,
        openingHours:openingHours, cuisineType:cuisineType, status:status
    });

        res.status(200).json({message:'SuccesFully Added Restaurant'});

    }catch(e)
    {
        res.status(500).json({error:'There is Error while adding'});
    }
}

export const postcategory= async(req,res)=>
{
    const {id}=req.params;
    const {name}=req.body;

    try
    {
    const restaurant=await Restaurant.findById(id);

    if(!restaurant)
    {
        return res.status(404).json({error:'Restaurant not found for that Id'});
    }
 
    await Category.create({restaurantId:id,name:name});

    return res.status(200).json({message:'SuccessFully Entered Category for that restaurant'});

    }catch(e)
    {
        return res.status(400).json({message:'Not Found'});
    }
}

export const getrestaurants= async(req,res)=>
{
    try
    {
        const response=await Restaurant.find();

    if (response.length === 0) {
      return res.status(404).json({ error: 'No restaurants found' });
    }

        return res.status(200).json({result:response});
    }catch(e)
    {
        return res.status(500).json({error:"Error"});
    }
    
}

export const upload_dish= async(req,res)=>
{
  const { id } = req.params; 
  const { dishname, description, price, availability } = req.body;

try {
  const category = await Category.findById(id).populate('restaurantId');

  if (!category) {
    return res.status(404).json({ error: 'Category not found' });
  }

  if (!category.restaurantId) {
    return res.status(404).json({ error: 'Restaurant not found for this category' });
  }

  await Dish.create({
    categoryId: id,
    dishname,
    description,
    price,
    availability
  });

  res.status(200).json({ message: 'Dish added successfully' });
} catch (err) {
  res.status(500).json({ error: 'Error while adding dish' });
}
}

//In Model Category and Restaurant the virtual Scheams is for this route.
export const getrestaurantdetails = async (req, res) => {
  try {
  
    const restaurants = await Restaurant.find()
      .populate({
        path: 'categories',    
        populate: { 
          path: 'dishes'           
        }
      });

    if (!restaurants || restaurants.length === 0) {
      return res.status(404).json({ error: 'No restaurants found' });
    }

    res.status(200).json({ result: restaurants });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};