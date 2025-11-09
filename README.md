<h1 align="center">🍔 Food Delivery Backend</h1>
<h3 align="center">Microservices Architecture with Node.js, Express & MongoDB</h3>

---

## Overview

This is the backend of the **Food Delivery Service** built using a **microservices architecture**. The project is designed using **Node.js**, **Express**, **JWT (JSON Web Token)** for authentication, and **MongoDB** for the database. The application is split into multiple microservices, each handling a specific domain (Order, Restaurant, Payment, and User services), communicating with each other independently.

---

## Technologies Used

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

- **Node.js**: JavaScript runtime for building the backend
- **Express.js**: Web framework for Node.js, used for building RESTful APIs
- **JWT**: Used for authentication and authorization
- **MongoDB**: NoSQL database to store data related to orders, users, restaurants, and payments
- **Microservices Architecture**: The backend is divided into multiple services that are independent and communicate via APIs

---

## Features

### Order Service
- Create orders
- Get order by ID
- Get user orders
- Get all orders
- Update order status
- Cancel orders
  
### Restaurant Service
- Add restaurants
- Create categories
- Upload dishes
- Get all restaurants
- Get restaurant details

### User Service
- User signup
- User login

### Payment Service
- Create payment
- Get payment status
- Process refund

---

## Microservices Architecture

The application is designed using a **microservices architecture**. Each service (Order, Restaurant, Payment, User) is isolated and manages its own database and logic. This architecture ensures that each service can be deployed and scaled independently.

- **Order Service**: Handles the creation, status, and cancellation of orders
- **Restaurant Service**: Manages restaurants, categories, and dishes
- **User Service**: Manages user authentication (signup and login) using JWT
- **Payment Service**: Manages payment creation, status retrieval, and refund functionality

These services communicate with each other via HTTP API calls, ensuring a **loosely coupled** system where each service operates independently.

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/your-profile/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://your-portfolio.com)

</div>
