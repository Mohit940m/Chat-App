# Chat-App

A real-time, full-stack chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. 

## Features

- **User Authentication:** Secure signup and login using JWT and bcrypt.
- **Real-Time Messaging:** Instant message delivery and online user tracking via Socket.io.
- **Profile Management:** Update profiles and upload avatars (integrated with Cloudinary).
- **Responsive UI:** Built with React and Tailwind CSS for mobile and desktop.
- **Tested & Documented:** Includes automated tests (Jest & Vitest), a Postman collection for API verification, and comprehensive project planning docs.

---

## Prerequisites

Make sure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URI)
- A [Cloudinary](https://cloudinary.com/) account for image uploads

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd Chat-App
   ```

2. **Setup the Backend (Server):**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and add your credentials:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. **Setup the Frontend (Client):**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory (if not already present):
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

---

## Running the Application

You will need two terminal windows to run both the frontend and backend simultaneously.

**Start the Backend Server:**
```bash
cd server
npm run server
```
*(The server will run on `http://localhost:5000`)*

**Start the Frontend Client:**
```bash
cd client
npm run dev
```
*(The client will run on Vite's default port, usually `http://localhost:5180` or `5173`)*

---

## Testing

### Automated Unit Tests
The project is configured with test suites for both environments:

- **Backend (Jest):**
  ```bash
  cd server
  npm test
  ```
- **Frontend (Vitest & React Testing Library):**
  ```bash
  cd client
  npm test
  ```

### API Testing (Postman)
A Postman environment and collection have been provided to test backend routes.
1. Navigate to the `postman/` directory.
2. Read the `postman/README.md` for instructions on how to import and use the collection.

---

## Documentation

Comprehensive project documentation is stored in the `Docs/plan/` directory:
- `REQUIREMENTS.md` – Product features and user stories.
- `SPRINT_PLAN.md` – Implementation steps and sprint milestones.
- `TRACEABILITY.md` – Tracking completion status of all application features.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
