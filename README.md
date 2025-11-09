<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Delivery Backend (Microservices Architecture)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        h1,
        h3 {
            text-align: center;
            color: #333;
        }

        h1 {
            margin-top: 20px;
            font-size: 3rem;
        }

        h3 {
            margin-top: 10px;
            color: #555;
        }

        .badges {
            text-align: center;
            margin-top: 20px;
        }

        .badges img {
            margin: 10px;
            border-radius: 10px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
        }

        .section {
            margin: 50px 0;
        }

        .section h2 {
            color: #444;
            font-size: 2rem;
            margin-bottom: 20px;
        }

        .section p {
            font-size: 1rem;
            color: #666;
        }

        .route-list ul {
            list-style-type: none;
            padding: 0;
        }

        .route-list li {
            font-size: 1rem;
            margin-bottom: 10px;
            padding: 8px;
            background-color: #eef2f7;
            border-radius: 5px;
        }

        footer {
            text-align: center;
            background-color: #333;
            color: #fff;
            padding: 20px;
            margin-top: 50px;
        }

        footer a {
            color: #f5f5f5;
            text-decoration: none;
            margin: 0 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Food Delivery Backend (Microservices Architecture)</h1>
        <h3>A Backend Service for Food Delivery Application</h3>

        <div class="badges">
            <img src="https://img.shields.io/badge/Node.js-v16.0%2B-green?style=flat-square&logo=node.js" alt="Node.js" />
            <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express" alt="Express.js" />
            <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON%20web%20tokens" alt="JWT" />
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
        </div>

        <div class="section">
            <h2>Overview</h2>
            <p>
                This project is a <strong>microservices-based backend</strong> for a <strong>Food Delivery Service</strong>.
                It utilizes <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>JWT</strong>, and <strong>MongoDB</strong>
                to implement the following services:
            </p>
            <ul>
                <li><strong>Order Service:</strong> Manages order creation, status, and cancellation.</li>
                <li><strong>Restaurant Service:</strong> Handles restaurant data, categories, and dishes.</li>
                <li><strong>User Service:</strong> Manages user authentication (signup, login).</li>
                <li><strong>Payment Service:</strong> Handles payment creation, payment status, and refunds.</li>
            </ul>
            <p>
                Each service operates independently, using its own database and logic, allowing for easy scaling and
                maintenance.
            </p>
        </div>

        <div class="section">
            <h2>Technologies Used</h2>
            <ul>
                <li><strong>Node.js</strong>: JavaScript runtime for building scalable backend services.</li>
                <li><strong>Express.js</strong>: Web framework for creating RESTful APIs.</li>
                <li><strong>JWT</strong>: JSON Web Tokens used for authentication and authorization.</li>
                <li><strong>MongoDB</strong>: NoSQL database to store user, order, restaurant, and payment data.</li>
                <li><strong>Microservices Architecture</strong>: Independent services for order, user, restaurant, and payment.</li>
            </ul>
        </div>

        <div class="section">
            <h2>Setup Instructions</h2>
            <h4>Prerequisites</h4>
            <ul>
                <li><strong>Node.js</strong> (v14 or higher)</li>
                <li><strong>MongoDB</strong> (local or cloud)</li>
                <li><strong>Environment variables</strong>:
                    <ul>
                        <li><code>MONGO_URI</code>: MongoDB connection string.</li>
                        <li><code>JWT_SECRET</code>: JWT secret key for signing tokens.</li>
                        <li><code>PORT</code>: Port to run each service on (e.g., <code>3000</code>, <code>3001</code>, etc.).</li>
                    </ul>
                </li>
            </ul>

            <h4>Steps to Run the Project</h4>
            <ol>
                <li><strong>Clone the repository:</strong>
                    <pre><code>git clone https://github.com/your-username/food-delivery-backend.git</code></pre>
                    <pre><code>cd food-delivery-backend</code></pre>
                </li>
                <li><strong>Install dependencies</strong> for each service:
                    <pre><code>cd Order-Service && npm install</code></pre>
                    <pre><code>cd Restaurant-Service && npm install</code></pre>
                    <pre><code>cd User-Service && npm install</code></pre>
                    <pre><code>cd Payment-Service && npm install</code></pre>
                </li>
                <li><strong>Create a <code>.env</code> file</strong> in each service with the necessary environment variables.</li>
                <li><strong>Start each service</strong>:
                    <pre><code>cd Order-Service && npm start</code></pre>
                    <pre><code>cd Restaurant-Service && npm start</code></pre>
                    <pre><code>cd User-Service && npm start</code></pre>
                    <pre><code>cd Payment-Service && npm start</code></pre>
                </li>
            </ol>
        </div>

        <div class="section route-list">
            <h2>API Routes</h2>

            <h3><strong>Order Service Routes</strong></h3>
            <ul>
                <li><strong>Create Order:</strong> `POST /createorder`</li>
                <li><strong>Get Order by ID:</strong> `GET /get/:id`</li>
                <li><strong>Get Orders by User:</strong> `GET /users/:id`</li>
                <li><strong>Get All Orders:</strong> `GET /allorders`</li>
                <li><strong>Update Order Status:</strong> `PATCH /orders/:id/status`</li>
                <li><strong>Cancel Order:</strong> `DELETE /orders/:id`</li>
            </ul>

            <h3><strong>Restaurant Service Routes</strong></h3>
            <ul>
                <li><strong>Get All Restaurants:</strong> `GET /get`</li>
                <li><strong>Create Restaurant:</strong> `POST /post`</li>
                <li><strong>Add Categories to Restaurant:</strong> `POST /:id/categories`</li>
                <li><strong>Add Dishes to Category:</strong> `POST /categories/:id/dishes`</li>
                <li><strong>Get Restaurant Details:</strong> `GET /getrestaurantdetails`</li>
            </ul>

            <h3><strong>User Service Routes</strong></h3>
            <ul>
                <li><strong>Login:</strong> `POST /login`</li>
                <li><strong>Signup:</strong> `POST /signup`</li>
            </ul>

            <h3><strong>Payment Service Routes</strong></h3>
            <ul>
                <li><strong>Create Payment:</strong> `POST /payment/createpayment`</li>
                <li><strong>Get Payment Status:</strong> `GET /payment/status/:paymentId`</li>
                <li><strong>Refund Payment:</strong> `POST /payment/refund/:paymentId`</li>
            </ul>
        </div>

        <footer>
            <p>&copy; 2023 Ali Raza | All Rights Reserved</p>
            <p>Find me on <a href="https://github.com/your-username" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/ali-raza-42965a237/" target="_blank">LinkedIn</a></p>
        </footer>
    </div>
</body>

</html>
