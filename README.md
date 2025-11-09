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
