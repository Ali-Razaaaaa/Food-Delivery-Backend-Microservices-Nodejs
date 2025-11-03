import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { 
      restaurantId, 
      items, 
      totalPrice, 
      status, 
      paymentStatus, 
      deliveryPersonId 
    } = req.body;

      const order = await Order.create({
      userId,
      restaurantId,
      items,
      totalPrice,
      status,
      paymentStatus,
      deliveryPersonId
    });

    res.status(200).json({ message: 'Order received' });

  } catch (err)
  {
    res.status(500).json({ error: err.message });
  }
};

export const getorderbyid = async (req, res) => {
  const { id } = req.params;

  try
  {
    const data = await Order.findById(id);
    
    if (!data)
    {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (data.userId !== req.user.id)
    {
      return res.status(403).json({ error: 'Not authorized' });
    }

    return res.status(200).json({ data });
  }
  catch (e)
  {
    return res.status(500).json({ error: 'Error', details: e.message });
  }
};

export const getUserorder = async (req, res) => {

  const userId = req.user.id; 

  try {
    const userOrders = await Order.find({ userId });

    return res.status(200).json({ result: userOrders });
  } catch (e) {
    return res.status(500).json({ error: 'Server error', details: e.message });
  }
};

export const getallorders = async (req, res) => {
  try {
    const allorders = await Order.find();

    return res.status(200).json({ result: allorders });

  } catch (e) {
    return res.status(500).json({ error: 'Server error', details: e.message });
  }
};

export const updateOrderStatus = async (req, res) => {

  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);

    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.Status = status;
    await order.save();

    res.json({ message: 'Order status updated', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByIdAndDelete(id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    res.json({ message: 'Order canceled' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
