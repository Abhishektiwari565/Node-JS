
# 📝 Full Stack Blog Application

A modern **Full Stack Blog App** built using **React, Node.js, Express, MongoDB**, and **JWT + OTP Authentication**.
Users can securely sign up, verify via OTP, create blogs with images, update them, and delete them — all in a clean and professional UI.

---

## 🚀 Features

✨ **User Authentication**

* 🔐 Sign Up & Sign In
* 📩 OTP Verification
* 🍪 Secure Cookie-based Authentication
* 🚪 Logout functionality

✨ **Blog Management**

* ✍️ Create blog with **image upload**
* 📖 View all blogs
* 📝 Update existing blogs
* 🗑️ Delete blogs
* 🖼️ Multer-based image handling

✨ **UI & UX**

* 🎨 Modern & responsive UI
* 📱 Mobile-friendly layout
* 🌈 Premium color theme
* ⚡ Smooth animations

---

## 🛠️ Tech Stack

### **Frontend**

* ⚛️ React.js
* 📡 Axios
* 🎨 CSS (Custom Modern UI)
* 🧠 React Hooks (`useState`, `useEffect`)

### **Backend**

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB + Mongoose
* 📤 Multer (Image Upload)
* 🍪 Cookies
* 📩 OTP Verification

---

## 📂 Project Structure

```
Blog-App/
│
├── backend/
│   ├── controllers/
│   │   ├── authControllers.js
│   │   ├── blogControllers.js
│   │   └── otpControllers.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── blogModel.js
│   │
│   ├── routes/
│   │   └── routes.js
│   │
│   ├── config/
        |___db.js
│   │   └── multer.js
│   │
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│
└── README.md
```

---

## 🔑 Authentication Flow

1️⃣ User **Sign Up**
2️⃣ User **Sign In**
3️⃣ OTP is sent and **verified**
4️⃣ Secure cookie is stored
5️⃣ User can access **Blog Dashboard**

---

## 🖼️ Blog Image Upload

* Images are uploaded using **Multer**
* Stored in `/uploads` folder
* Served statically from backend
* Displayed dynamically in frontend

---

## 🔗 API Endpoints

### **Auth Routes**

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| POST   | `/signup`  | Register user |
| POST   | `/signin`  | Login user    |
| POST   | `/verify`  | Verify OTP    |
| GET    | `/signout` | Logout user   |

### **Blog Routes**

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/createBlogs`     | Create blog   |
| GET    | `/getBlogs`        | Get all blogs |
| PUT    | `/updateBlogs/:id` | Update blog   |
| DELETE | `/deleteBlogs/:id` | Delete blog   |

---

## ⚙️ Installation & Setup

### 🔧 Backend Setup

```bash
cd backend
npm install
npm start
```

Create `.env` file:

```env
PORT=2005
MONGO_URI=mongodb://localhost:27017/blog
JWT_SECRET=your_secret_key
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screens (Features)

* 🔐 Auth pages centered with gradient background
* 🧾 Blog creation form
* 🖼️ Image preview in blogs
* 🗂️ Blog list with update & delete actions

---

## 🧠 Learning Outcomes

* Full authentication flow with OTP
* Secure backend APIs
* Image upload handling
* React state management
* Clean UI design principles

---
demo video:

https://github.com/user-attachments/assets/e309893e-6e0c-49c5-9531-a392104ddffa


