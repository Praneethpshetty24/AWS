# Node.js and Next.js Application

This is a simple full-stack application built with **Next.js** for the frontend and **Node.js** with **Express** for the backend.  
The backend is hosted on **AWS EC2** and uses **MongoDB** for the database. The app provides basic APIs for user management, including user registration, update, fetching, and deletion.

---

## Project Structure

### AWS ECS Dashboard
![AWS ECS Dashboard](./public/aws.png)

- **Frontend**: Built with **Next.js**, hosted locally or deployed to a service of your choice.
- **Backend**: Built with **Node.js** and **Express**, hosted on **AWS EC2**.
- **Database**: MongoDB Atlas or a self-hosted MongoDB instance.

---

## Backend APIs

- **Register a New User**  
  `POST http://16.171.58.68:3000/api/register`

- **Get All Users**  
  `GET http://16.171.58.68:3000/api/users`

- **Update User**  
  `PUT http://16.171.58.68:3000/api/update`

- **Delete User**  
  `DELETE http://16.171.58.68:3000/api/delete`

---

## Tech Stack

- **Node.js** (Backend)
- **Express.js** (Web Framework)
- **Next.js** (Frontend)
- **MongoDB** (Database)
- **AWS EC2** (Server Hosting)

---

## Backend Repository

You can find the backend source code here:  
👉 [GitHub Repository](https://github.com/Praneethpshetty24/node-js.git)

---
