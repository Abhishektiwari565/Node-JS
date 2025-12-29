# 🎬 Movie Management System (MERN)

A **full-stack Movie Management System** built using **React.js (Frontend)**, **Node.js + Express.js (Backend)**, **MongoDB**, and **Multer** for image uploads. This project allows users to **Add, View, Update, and Delete movies** along with their poster images.

## 🛠️ Tech Stack

### Frontend 🌐

* ⚛️ React.js (Hooks)
* 📡 Axios (API calls)
* 🎨 CSS (Custom UI styling)

### Backend ⚙️

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB (Mongoose)
* 📤 Multer (Image Upload)
* 📁 File System (fs) for image delete/update

---

## ✨ Features

✅ Add movie with poster image
✅ Display all movies dynamically
✅ Edit movie details & replace image
✅ Delete movie (DB + image from folder)
✅ REST API integration
✅ Clean & responsive UI

---

## 📂 Project Folder Structure

```
backend/
 ├── config/
 │    └── db.js
 ├── models/
 │    └── movieModels.js
 ├── routes/
 │    └── movieRoutes.js
 ├── controllers/
 │    └── movieControllers.js
 ├── uploads/          # Movie poster images
 ├── server.js

frontend/
 ├── src/
 │    ├── App.jsx
 │    ├── App.css
 │    └── main.jsx
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | `/`      | Add new movie 🎥  |
| GET    | `/`      | Get all movies 📃 |
| PUT    | `/:id`   | Update movie ✏️   |
| DELETE | `/:id`   | Delete movie ❌    |

---

## 🧠 Backend Logic Explanation

### ➕ Add Movie

* Uses **Multer** to upload image
* Stores movie data in MongoDB
* Saves image inside `uploads/` folder

### ✏️ Update Movie

* Fetches movie by ID
* Deletes old image using `fs.unlinkSync()`
* Uploads new image (if provided)
* Updates movie details in database

### ❌ Delete Movie

* Finds movie by ID
* Deletes image from `uploads/` folder
* Removes movie from MongoDB

---

## 🎨 Frontend Logic Explanation

### 📤 Add Movie

* Uses `FormData` to send text + image
* Axios POST request to backend

### 📃 Get Movies

* `useEffect()` fetches all movies on load
* Movies rendered using `.map()`

### ✏️ Edit Movie

* Clicking **Edit** fills input fields
* Enables update mode

### 🔄 Update Movie

* Sends PUT request with updated data
* Refreshes movie list

### ❌ Delete Movie

* Sends DELETE request using movie ID
* Instantly removes movie from UI

---

## 🖼️ Image Handling

* Images stored inside `/uploads` folder
* Served using Express static middleware
* Old images removed during update & delete

---

## 🧹 Clear Input Fields

After adding/updating a movie, input fields are reset using state management to improve UX. ✨

---

## 🚀 How to Run Project

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---
## 🙌 Conclusion

This project demonstrates **real-world CRUD operations**, **file handling**, and **frontend-backend integration**, making it perfect for portfolios and interviews. 💼🔥

---

Demo video:

https://github.com/user-attachments/assets/d4e43175-7e58-4e3b-b5a1-620364e85610


