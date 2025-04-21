# Staybnb – Fullstack Rental Marketplace 🏡

Staybnb is a full-featured, Airbnb-inspired rental web application that allows users to browse, create, edit, and review property listings. Built with the MERN stack, integrated with Cloudinary for image uploads, and deployed on Render, Staybnb delivers a polished, scalable, and user-friendly experience.

## 🚀 Live Demo
🌐 [Deployed on Render](https://staybnb-home-rental.onrender.com/listings)
- link : https://staybnb-home-rental.onrender.com/listings

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **EJS** (Embedded JavaScript templating)
- **Bootstrap 5** for responsive styling
- **JavaScript** for client-side interactivity

### ⚙️ Backend
- **Node.js** + **Express.js** for server-side logic
- **MongoDB** with **Mongoose** for data modeling
- **Passport.js** for authentication
- **Session management** with `express-session` and `connect-mongo`

### 📦 Packages & Tools
- `mongoose` – MongoDB ODM
- `ejs-mate` – Layout support for EJS
- `method-override` – Support for PUT/DELETE in forms
- `connect-flash` – Flash messages for notifications
- `multer` & `multer-storage-cloudinary` – Image uploads
- `cloudinary` – Cloud storage for images
- `dotenv` – Environment variables

### ☁️ Hosting
- **Render** – Hosting for backend server and MongoDB database

---

## ✨ Features

### 👤 Authentication
- User registration and login
- Sessions and flash messaging

### 🏡 Listings
- Create, edit, and delete listings
- Upload images to Cloudinary
- View all listings in a responsive grid

### 💬 Reviews
- Post reviews under listings
- Authenticated users only
- Reviews persist per listing

### 🔎 Search
- Search bar to filter listings by city or country (navbar)
- Case-insensitive and partial match search

### 🔐 Session Management
- Authenticated routes protected with middleware
- User sessions maintained using `connect-mongo`

---

## 🔒 Environment Variables (required)

Create a `.env` file in the root with:

- ATLASDB_URL=<your MongoDB connection string>
- CLOUDINARY_CLOUD_NAME=<your Cloudinary name>
- CLOUDINARY_KEY=<your Cloudinary key>
- CLOUDINARY_SECRET=<your Cloudinary secret>
- SECRET=<your session secret>
