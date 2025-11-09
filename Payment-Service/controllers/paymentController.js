import Payment from "../models/Payment.js";

export const createPayment = async (req, res) => {
  try {
  
    const u_id = req.user.id; 
    const { orderId, paymentMethod, paymentStatus, paymentAmount, transactionId, paymentDate } = req.body;

    const payment = await Payment.create({
      orderId,
      userId: u_id,
      paymentMethod,
      paymentStatus,
      paymentAmount,
      transactionId,
      paymentDate,
    });

    res.status(201).json({ message: "Payment created successfully", payment });

  } catch (e)
  {
    res.status(500).json({ message: "Failed to create payment", error: e.message });
  }
};
export const getPaymentStatus = async (req, res) => {
  const { paymentId } = req.params; 

  try {
    const response = await Payment.findById(paymentId);  
    if (!response) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    return res.status(200).json({ result: response.paymentStatus });  
  } catch (e) {
    return res.status(400).json({ error: 'Error occurred', details: e.message });
  }
};

export const refundPayment = async (req, res) => {

  const { paymentId } = req.params;

  try {

    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    if (payment.paymentStatus === 'Refunded') {
      return res.status(400).json({ error: 'Payment has already been refunded' });
    }

    payment.paymentStatus = 'Refunded';
    await payment.save();

    return res.status(200).json({ message: 'Payment refunded successfully', payment });
  } catch (e) {
    return res.status(400).json({ error: 'Error occurred while processing refund', details: e.message });
  }
};
