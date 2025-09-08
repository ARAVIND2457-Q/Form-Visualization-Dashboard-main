# Form Visualization Dashboard

A full-stack web application for form data visualization with user authentication, built with React.js frontend and Node.js/Express backend with MongoDB.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality
- **Dashboard**: Interactive user dashboard with profile information
- **Data Visualization**: Multiple chart types (Line, Bar, Pie, Area) for user data analysis
- **Responsive Design**: Glass morphism UI design that works on all devices
- **Real-time Charts**: Dynamic charts using Recharts library
- **Database Integration**: MongoDB with Mongoose ODM
- **Mock Data Support**: Works with or without database connection

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Recharts** - Chart visualization library
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with glass morphism effects

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Form-Visualization-Dashboard-main/
├── client/                          # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── components/
│       │   ├── Charts/
│       │   │   ├── DisplayArea.js
│       │   │   ├── DisplayBar.js
│       │   │   ├── DisplayLine.js
│       │   │   └── DisplayPie.js
│       │   ├── Dashboard.css
│       │   ├── Form.css
│       │   ├── Form.js
│       │   ├── GlassDashboard.js
│       │   ├── Login.js
│       │   ├── Overlay.js
│       │   └── Signup.js
│       ├── services/
│       │   └── api.js
│       ├── App.js
│       ├── App.test.js
│       ├── index.js
│       └── reportWebVitals.js
├── server/                          # Node.js backend
│   ├── connection/
│   │   └── db.js
│   ├── model/
│   │   └── UserSchema.js
│   ├── routes/
│   │   └── Routes.js
│   ├── .env.example
│   ├── index.js
│   ├── package.json
│   └── scehma.js
├── package.json                     # Root package.json for concurrent running
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Form-Visualization-Dashboard-main
   ```

2. **Install dependencies**

   For the entire project (recommended):
   ```bash
   npm install
   npm run install-client
   npm run install-server
   ```

   Or install separately:
   ```bash
   # Install client dependencies
   cd client
   npm install
   cd ..

   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**

   Copy the example environment file:
   ```bash
   cp server/.env.example server/.env
   ```

   Update `server/.env` with your configuration:
   ```env
   MONGO_USER=your_mongodb_username
   MONGO_PASSWORD=your_mongodb_password
   PORT=5000
   ```

4. **Database Setup**

   - **Local MongoDB**: Ensure MongoDB is running locally
   - **MongoDB Atlas**: Update connection string in `server/index.js`

## 🎯 Usage

### Development Mode

Run both client and server concurrently:
```bash
npm start
```

Or run separately:

**Start the backend server:**
```bash
npm run server
# Server will run on http://localhost:5000
```

**Start the frontend:**
```bash
npm run client
# React app will run on http://localhost:3000
```

### Production Build

1. **Build the client:**
   ```bash
   cd client
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm run server
   ```

## 📊 API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /signin` - User login

### Data
- `GET /getusers` - Fetch all users data
- `GET /` - Welcome message

## 🎨 Features Overview

### User Authentication
- Secure password hashing with bcrypt
- JWT token-based authentication
- Session management with localStorage

### Dashboard
- Glass morphism design
- Responsive navigation
- Social media links
- Profile information display

### Data Visualization
- **Line Chart**: Salary and hike trends by role
- **Bar Chart**: Comparative data visualization
- **Pie Chart**: Distribution analysis
- **Area Chart**: Trend analysis over time

### Mock Data Support
The application includes fallback mock data that works even without database connection, making it perfect for:
- Development and testing
- Demo purposes
- Offline functionality

## 🔧 Configuration

### Database Connection
The app supports multiple database configurations:

1. **MongoDB Atlas** (Cloud):
   ```javascript
   // Update server/index.js
   DB = `mongodb+srv://${Username}:${Password}@cluster0.lbysu1r.mongodb.net/?retryWrites=true&w=majority`
   ```

2. **Local MongoDB**:
   ```javascript
   DB = 'mongodb://localhost:27017/form-dashboard'
   ```

### Environment Variables
- `MONGO_USER`: MongoDB Atlas username
- `MONGO_PASSWORD`: MongoDB Atlas password
- `PORT`: Server port (default: 5000)

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Ensure MongoDB is running (local) or credentials are correct (Atlas)
   - Check network connectivity for Atlas

2. **Port Already in Use**
   - Change the PORT in `.env` file
   - Kill process using the port: `npx kill-port 5000`

3. **Dependencies Issues**
   - Clear node_modules: `rm -rf node_modules package-lock.json`
   - Reinstall: `npm install`

4. **Build Errors**
   - Clear React cache: `cd client && npm start --reset-cache`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Aravind Dumpoju**
- GitHub: [@ARAVIND2457-Q](https://github.com/ARAVIND2457-Q)
- LinkedIn: [Aravind Dumpoju](https://www.linkedin.com/feed/)

## 🙏 Acknowledgments

- React.js community
- Recharts for amazing chart library
- MongoDB for robust database solution
- Express.js for excellent web framework

---

**Note**: This application includes mock data functionality, so it can run and demonstrate all features even without a database connection. Perfect for development, testing, and demo purposes!
