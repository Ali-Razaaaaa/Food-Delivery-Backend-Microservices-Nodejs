<h1 align="center">🍔 Food Delivery Backend 🚀</h1>
<h3 align="center">Microservices Architecture with Node.js, Express & MongoDB</h3>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F75C7E&center=true&vCenter=true&width=435&lines=Scalable+Microservices+Backend;JWT+Authentication;MongoDB+Database;RESTful+APIs" alt="Typing SVG" />
</p>

---

## 📋 Overview

This is the backend of the **Food Delivery Service** built using a **microservices architecture**. The project is designed using **Node.js**, **Express**, **JWT (JSON Web Token)** for authentication, and **MongoDB** for the database. The application is split into multiple microservices, each handling a specific domain (Order, Restaurant, Payment, and User services), communicating with each other independently.

---

## 🛠️ Technologies Used

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST%20API-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

</div>

- **Node.js**: JavaScript runtime for building the backend
- **Express.js**: Web framework for Node.js, used for building RESTful APIs
- **JWT**: Used for authentication and authorization
- **MongoDB**: NoSQL database to store data related to orders, users, restaurants, and payments
- **Microservices Architecture**: The backend is divided into multiple services that are independent and communicate via APIs

---

## ✨ Features

### **🛒 Order Service**
- ✅ Create and manage orders
- ✅ Fetch orders based on `orderId` and `userId`
- ✅ Update order status (e.g., "Completed", "Pending", "Cancelled")
- ✅ Cancel orders
  
### **🍽️ Restaurant Service**
- ✅ Add new restaurants to the system
- ✅ Manage restaurant categories and dishes
- ✅ Fetch restaurant details

### **👤 User Service**
- ✅ User signup and login with JWT-based authentication
- ✅ Secure login and token-based user session management

### **💳 Payment Service**
- ✅ Create payments for orders
- ✅ Retrieve payment status
- ✅ Process refunds for completed payments

---

## 🏗️ Microservices Architecture

The application is designed using a **microservices architecture**. Each service (Order, Restaurant, Payment, User) is isolated and manages its own database and logic. This architecture ensures that each service can be deployed and scaled independently.

<div align="center">

```mermaid
graph TD
    A[Client] --> B[Order Service]
    A --> C[Restaurant Service]
    A --> D[User Service]
    A --> E[Payment Service]
    B --> F[(MongoDB)]
    C --> G[(MongoDB)]
    D --> H[(MongoDB)]
    E --> I[(MongoDB)]
```

</div>

- **Order Service**: Handles the creation, status, and cancellation of orders
- **Restaurant Service**: Manages restaurants, categories, and dishes
- **User Service**: Manages user authentication (signup and login) using JWT
- **Payment Service**: Manages payment creation, status retrieval, and refund functionality

These services communicate with each other via HTTP API calls, ensuring a **loosely coupled** system where each service operates independently.

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Local or Cloud)
- JWT secret and MongoDB URI in `.env` file

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/food-delivery-backend.git
   cd food-delivery-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the services**:
   ```bash
   # Start Order Service
   cd order-service
   npm start

   # Start Restaurant Service
   cd restaurant-service
   npm start

   # Start User Service
   cd user-service
   npm start

   # Start Payment Service
   cd payment-service
   npm start
   ```

5. **Access the API**:
   - Order Service: `http://localhost:5001`
   - Restaurant Service: `http://localhost:5002`
   - User Service: `http://localhost:5003`
   - Payment Service: `http://localhost:5004`

---

## 📡 API Endpoints

### User Service
- `POST /api/users/signup` - Register a new user
- `POST /api/users/login` - Login user

### Order Service
- `POST /api/orders` - Create new order
- `GET /api/orders/:orderId` - Get order by ID
- `PUT /api/orders/:orderId` - Update order status
- `DELETE /api/orders/:orderId` - Cancel order

### Restaurant Service
- `POST /api/restaurants` - Add new restaurant
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:restaurantId` - Get restaurant by ID

### Payment Service
- `POST /api/payments` - Create payment
- `GET /api/payments/:paymentId` - Get payment status
- `POST /api/payments/refund` - Process refund

---

## 📂 Project Structure

```
food-delivery-backend/
├── order-service/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── restaurant-service/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── user-service/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── payment-service/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── .env
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/your-profile/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://your-portfolio.com)

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### ⭐ Don't forget to star this repo if you found it helpful!

Made with ❤️ by [Your Name]

</div>
