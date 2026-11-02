# Inventory Management System

## Project Description

The Inventory Management System is a REST API application developed using Node.js and Express.js.

This application allows users to manage inventory items through CRUD operations. Users can add, view, update, delete, search, and filter inventory items.

The project uses an in-memory JavaScript array to store inventory data. No database is required.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- dotenv
- Git and GitHub

## Project Structure

```text
inventory-backend/
│
├── controllers/
│   └── inventoryController.js
│
├── routes/
│   └── inventoryRoutes.js
│
├── middleware/
│   ├── validation.js
│ 
│
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project folder:

```bash
cd inventory-backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add:

```env
PORT=5000
```

5. Start the server:

```bash
npm start
```

The server will run at:

`http://localhost:5000`

## API Endpoints

Base URL:

`http://localhost:5000/api/inventories`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Add a new inventory item |
| GET | `/` | Get all inventory items |
| GET | `/:id` | Get an item by ID |
| PUT | `/:id` | Update an item |
| DELETE | `/:id` | Delete an item |
| GET | `/` | Search and filter inventory items |

## Sample Inventory Item

```json
{
  "name": "Laptop",
  "category": "Electronics",
  "quantity": 10,
  "price": 45000
}
```

## Filtering and Searching

The application supports filtering inventory items using query parameters.

Examples:

**Filter by category:**

`GET /api/inventory/filter?category=Electronics`

**Filter by minimum quantity:**

`GET /api/inventory/filter?minQuantity=5`

**Filter by maximum quantity:**

`GET /api/inventory/filter?maxQuantity=20`

**Search by item name:**

`GET /api/inventory/filter?search=laptop`

**Combine filters:**

`GET /api/inventory/filter?category=Electronics&minQuantity=5&maxQuantity=20`

## Validation and Error Handling

- Validates required item fields.
- Checks that quantity is a non-negative integer.
- Checks that price is a valid non-negative number.
- Uses centralized error-handling middleware.
- Returns appropriate error responses for invalid requests and missing items.

## Data Storage

Inventory data is stored in an in-memory JavaScript array.

**Note:** Data is temporary and will be lost when the server restarts.

## Testing

All API endpoints can be tested using Postman.

## Author

Asha Thomas
