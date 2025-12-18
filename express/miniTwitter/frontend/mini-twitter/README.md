# 🐦 Mini Twitter App (React + Axios)

A simple **Mini Twitter-like CRUD application** built using **React**, **Axios**, and a REST API. This project demonstrates how to create, read, update, and delete tweets with an **auto-generated ID**, a **modern UI**, and **no manual ID input**.

---

## ✨ Features

✅ Auto-generated Tweet ID (no user input)
✅ Create, Read, Update, Delete tweets (CRUD)
✅ Twitter-style UI 🐦
✅ Click tweet to edit ✏️
✅ Centered card layout 🎯
✅ Dynamic placeholder text
✅ Clean & beginner-friendly code

---

## 🛠️ Tech Stack

* ⚛️ **React** (useState)
* 🌐 **Axios** (API calls)
* 🎨 **CSS** (custom styling)
* 🖥️ **REST API** (Node / Express backend)

---

## 📂 Project Structure

```bash
src/
 ├─ App.jsx        # Main React component
 ├─ App.css        # UI styling
 ├─ main.jsx       # React entry point
 └─ index.html
```

---

## 🚀 How the App Works

### 1️⃣ Create a Tweet 📝

* User types a message in the textarea
* On clicking **Post**:

  * A unique ID is generated using `Date.now()`
  * Tweet is sent to backend via POST API
  * Tweet appears instantly in the feed

---

### 2️⃣ Read Tweets 👀

* Clicking **Fetch** loads all tweets from backend
* Tweets are displayed in a Twitter-like feed

---

### 3️⃣ Update a Tweet ✏️

* Click on any tweet in the feed
* Tweet text automatically appears in the input box
* Edit the text and click **Update**
* Only the selected tweet is updated

---

### 4️⃣ Delete a Tweet 🗑️

* Click a tweet to select it
* Click **Delete**
* Selected tweet is removed from backend and UI

⚠️ Delete & Update only work when a tweet is selected

---

## 🎯 Auto ID Logic (Important)

```js
const autoId = Date.now()
```

* ID is **auto-generated** during POST
* User never types or sees the ID
* Same ID is reused internally for Update & Delete

✔️ This avoids manual ID errors

---

## 🎨 UI Design

* Centered card layout using **Flexbox**
* Twitter-style feed layout
* Static user profile:

  * 👤 Name: Krishna
  * 📸 Avatar image
  * 🆔 Username

---

## ⭐ Final Note

This project is perfect for:

* Beginners learning React
* CRUD practice
* Interview preparation
* UI + logic understanding

---
## 📸 Preview:

https://github.com/user-attachments/assets/7d8781cc-0b13-411d-91a7-ee7c0d588cf4



