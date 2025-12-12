Here is your **README.md** with **emoji** and **full explanation**, written clearly according to your Todo API code 👇
(You can copy–paste it directly into a `README.md` file.)

---

# 📘 Todo API – Express.js CRUD Application

Welcome to the **Todo API** built using **Node.js + Express.js + File System (fs)**.
This project performs full **CRUD operations** on a JSON file (`db.json`) that works as a simple database.

---

## ✨ Features

* 📄 **Get all todos**
* 🔍 **Filter todos by status**
* 📅 **Filter todos by due date**
* 🆔 **Get a single todo by ID**
* ➕ **Add a new todo**
* ✏️ **Update an existing todo**
* ❌ **Delete a todo**

---

## 📁 Project Structure

```
project/
│── server.js
│── db.json
│── README.md
```

* **server.js** → Main Express server
* **db.json** → Stores all Todo data
* **README.md** → Project documentation

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies

```sh
npm install
```

### 2️⃣ Start the server

```sh
node server.js
```

### 3️⃣ Server will run at:

```
http://localhost:2121
```

---

## 📌 API Endpoints

---

## 1️⃣ **GET /** — Get All Todos OR Filter by Query

📍 **Route:** `/`
📌 **Query Parameters:**

* `?status=completed`
* `?dueDate=2025-01-10`

### ✅ Example Responses:

### ✔ Get all todos

```
GET http://localhost:2121/
```

### ✔ Filter by status

```
GET http://localhost:2121/?status=pending
```

### ✔ Filter by due date

```
GET http://localhost:2121/?dueDate=2025-01-05
```

### 🔍 Code Logic:

* Reads all users from db.json
* Filters by `status` if provided
* Filters by `dueDate` if provided
* Otherwise returns full list

---

## 2️⃣ **GET /:id** — Get a Single Todo by ID

📍 **Route:** `/1`

### 🔍 Example:

```
GET http://localhost:2121/3
```

### ✔ What It Does

* Reads `db.json`
* Finds todo where `id == requested id`

---

## 3️⃣ **POST /** — Add New Todo

📍 **Route:** `/`
📌 **Body Example (JSON):**

```json
{
  "id": 4,
  "title": "Learn Express",
  "description": "Complete CRUD operations",
  "status": "pending",
  "dueDate": "2025-01-22",
  "createdAt": "2025-01-20"
}
```

### ✔ What It Does

* Reads all todos
* Adds new todo object
* Saves back to db.json

---

## 4️⃣ **PUT /** — Update an Existing Todo

📍 **Route:** `/`
📌 **Body Example:**

```json
{
  "id": 2,
  "status": "completed"
}
```

### ✔ What It Does

* Finds todo by id
* Merges old data + new data
* Saves updated list
* Returns message `"user updated successfully"`

---

## 5️⃣ **DELETE /:id** — Delete Todo

📍 **Route:** `/2`

### ✔ Example:

```
DELETE http://localhost:2121/5
```

### ✔ What It Does

* Reads all todos
* Removes todo with matching id
* Saves updated list

---

## 🧠 How Data Is Stored (db.json)

Example structure:

```json
[
  {
    "id": 1,
    "title": "Study Node.js",
    "description": "Complete FS module",
    "status": "pending",
    "dueDate": "2025-01-10",
    "createdAt": "2025-01-05"
  }
]
```

---

## 🛠 Helper Functions Used

### 📄 ReadUser()

Reads JSON file and returns array.

### 📝 WriteUser()

Writes updated array back to db.json.

---

## 🎉 Conclusion

This project is a simple and clean implementation of a **Todo Management API** using:

* Express.js
* Node.js File System (fs)
* JSON-based local database

video:
