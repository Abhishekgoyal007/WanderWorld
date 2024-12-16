# Wanderlust BnB 🌍🏠

Welcome to **Wanderlust BnB**, a platform where users can list their properties for rent and find amazing places to stay. With features like property listing, user authentication, map integration, and cloud storage, Wanderlust BnB aims to simplify the rental process for both hosts and guests.

---

## Features ✨

### 1. User Authentication 🔒
- **Sign Up & Login**: Secure user authentication using Passport.js.
- **Log Out**: Seamlessly log out when required.

### 2. Property Listings 🏡
- **Create a Listing**: Hosts can list properties by providing details like location, description, and images.
- **Edit Listings**: Easily update property details or upload new images.
- **Image Storage**: Images are stored securely using **Cloudinary** with the help of Multer.

### 3. Location Integration 🗺️
- **Map API**: Displays the exact location of a property using Mapbox for precise geolocation.

### 4. Validation & Error Handling ✅
- **Validation**: Both client-side and server-side validation using **Joi** ensures data integrity.
- **Error Handling**: Asynchronous errors are managed effectively using `wrapAsync`.

### 5. Comments & Reviews 💬
- **Create & Delete Comments**: Users can leave reviews for properties they visit.

---

## Technologies Used 💻

### Frontend 🌐
- **EJS**: Dynamic templating for responsive and elegant UI.

### Backend 🛠️
- **Node.js & Express**: Backend framework for building scalable applications.
- **MongoDB & Mongoose**: Database to store user and property data.

### Tools & Integrations ⚙️
- **Mapbox SDK**: For map and location services.
- **Cloudinary**: For image hosting and management.
- **Multer**: Middleware for handling `multipart/form-data` for image uploads.
- **Passport.js**: Authentication library for secure user login.
- **Connect-Mongo**: Session storage in MongoDB.
- **Joi**: Data validation library for robust error handling.

---

## Installation 🛠️

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v20.15.0)
- MongoDB
- Cloudinary Account

### Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/Abhishekgoyal007/WanderWorld.git
   cd WanderWorld
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Set up Environment Variables:
   Create a `.env` file and add the following:
   ```env
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   MAPBOX_TOKEN=<your-mapbox-access-token>
   DATABASE_URL=<your-mongodb-url>
   ```

4. Start the Server:
   ```bash
   npm start
   ```

5. Access the Application:
   Open your browser and navigate to `http://localhost:3000`.

---

## Screenshots 📸

### Homepage 🏠
![Homepage](https://via.placeholder.com/800x400?text=Homepage+Screenshot)

### Create a Listing 📋
![Create Listing](https://via.placeholder.com/800x400?text=Create+Listing+Screenshot)

### Map Integration 🗺️
![Map View](https://via.placeholder.com/800x400?text=Map+Integration+Screenshot)

---

## Folder Structure 📂

```
WanderWorld
├── models        # Database schemas
├── routes        # Application routes
├── views         # Frontend templates
├── public        # Static files (CSS, JS, Images)
├── .env          # Environment variables
├── index.js      # Application entry point
```

---

## Dependencies 📦
Here are the npm packages used in the project:

```json
{
  "@mapbox/mapbox-sdk": "^0.16.1",
  "cloudinary": "^1.21.0",
  "connect-flash": "^0.1.1",
  "connect-mongo": "^5.1.0",
  "cookie-parser": "^1.4.7",
  "dotenv": "^16.4.7",
  "ejs": "^3.1.10",
  "ejs-mate": "^4.0.0",
  "express": "^4.21.1",
  "express-session": "^1.18.1",
  "joi": "^17.13.3",
  "method-override": "^3.0.0",
  "mongodb": "^6.12.0",
  "mongoose": "^8.8.1",
  "multer": "^1.4.5-lts.1",
  "multer-storage-cloudinary": "^4.0.0",
  "nodemon": "^3.1.9",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^8.0.0",
  "path": "^0.12.7"
}
```

---

## Future Enhancements 🚀
- Implement payment integration for bookings.
- Add property search filters (e.g., price, location).
- Provide a dashboard for analytics.

---

## Contributing 🤝
Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

---

## License 📜
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements 🙌
- Mapbox for the amazing map services.
- Cloudinary for seamless image uploads.
- Passport.js for authentication support.

