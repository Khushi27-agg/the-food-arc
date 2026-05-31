# The Food Arc 🍕

A full-stack food ordering web application built using the MERN stack. The project allows users to browse food items, search dishes, add items to the cart, and place orders through a simple and user-friendly interface.

## Features

* Browse food items by category
* Search food items
* Add items to cart
* Remove items from cart
* Checkout and place orders
* Order success page
* Responsive user interface
* MongoDB database integration
* REST API using Express.js

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Context API
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Project Structure

```text
The-Food-Arc/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

## Database

MongoDB Atlas is used as the cloud database.

Collection:

```text
foods
```

Sample Document:

```json
{
  "name": "Margherita Pizza",
  "price": 299,
  "category": "Pizza"
}
```

## API Endpoints

### Get All Food Items

```http
GET /api/food/list
```

### Add Food Item

```http
POST /api/food/add
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Khushi27-agg/the-food-arc

```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

## Future Enhancements

* User Authentication
* JWT Authorization
* Payment Gateway Integration
* Admin Dashboard
* Order History
* Food Image Upload
* User Profile Management

## Author

Khushi

