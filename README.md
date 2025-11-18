# Sanitas - AI-Powered Health Companion 🏥

<div align="center">

![Sanitas Logo](https://img.shields.io/badge/Sanitas-Health%20AI-00d9ff?style=for-the-badge&logo=activity&logoColor=white)
[![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47a248?style=flat&logo=mongodb)](https://www.mongodb.com/)

**Your 24/7 AI-Powered Health Assistant**

[Live Demo](#) | [Documentation](#features) | [Get Started](#installation)

</div>

---

## 🌟 Features

### 🎯 Advanced Landing Page
- **Hyperspeed 3D Background** - Immersive WebGL highway animation
- **Animated Feature Cards** - Interactive showcase of key features
- **Smart Routing** - localStorage-based visit tracking
- **Responsive Design** - Optimized for all devices

### 💬 AI Chat Assistant
- **Gemini AI Integration** - Powered by Google's advanced AI
- **Chat History Persistence** - localStorage-based conversation saving
- **Voice Input** - Web Speech API integration
- **Suggested Prompts** - Quick health questions
- **Message Timestamps** - Track conversation timeline
- **Copy Messages** - Easy sharing of AI responses
- **Export Chat** - Download conversation history

### 📊 Health Dashboard
- **7-Day Streak Tracker** - Gamified health logging
- **Calorie Counter** - Daily nutrition tracking
- **Meal Planner** - 4-meal daily breakdown
- **Quick Actions** - Medipedia, Appointments, Leaderboard
- **Animated Statistics** - Real-time health metrics
- **Achievement System** - Unlock badges and rewards

### 📅 Appointment Booking
- **Time Slot Selection** - Visual availability calendar
- **Doctor Listings** - Verified professionals with ratings
- **Instant Booking** - Quick consultation scheduling
- **Date Picker** - Flexible scheduling options

### 📁 Medical Records
- **Secure Storage** - Encrypted document management
- **Easy Access** - View and download records
- **Multiple Formats** - Lab reports, prescriptions, imaging

### 🏆 Additional Features
- **Health Encyclopedia** - Comprehensive medical knowledge base
- **Notifications System** - Real-time health alerts
- **Achievements & Badges** - Motivation through gamification
- **Health Statistics** - Track heart rate, steps, calories, active minutes

---

## 🚀 Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **Vite 5.0** - Lightning-fast build tool
- **Tailwind CSS 3.3** - Utility-first styling
- **Three.js** - 3D graphics and animations
- **Lucide Icons** - Beautiful icon library
- **PostCSS** - CSS processing

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **Google Gemini API** - AI chat engine

### DevOps
- **ESLint** - Code quality
- **Git** - Version control
- **GitHub** - Repository hosting

---

## 📦 Installation

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
mongodb >= 6.0.0
```

### Clone Repository
```bash
git clone https://github.com/pradeep-iitb/Sanitas.git
cd Sanitas
```

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Start backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## 🎨 Project Structure

```
Sanitas/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ChatSection.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── About.jsx
│   │   │   ├── AppointmentsSection.jsx
│   │   │   ├── HealthStats.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── MedicalRecords.jsx
│   │   │   ├── Notifications.jsx
│   │   │   ├── HealthEncyclopedia.jsx
│   │   │   ├── Hyperspeed.jsx
│   │   │   ├── Toast.jsx
│   │   │   ├── LoadingSkeleton.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ChatExport.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   └── MainApp.jsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── package.json
└── README.md
```

---

## 🎯 Key Components

### Landing Page
- Hyperspeed 3D background animation
- Hero section with animated CTA
- Feature showcase grid
- Statistics section
- Smart routing to main app

### Chat Section
- Real-time AI responses
- Voice input capability
- Message persistence
- Suggested prompts
- Export functionality

### Dashboard
- Health metrics tracking
- Streak visualization
- Meal planning
- Quick action buttons

### Appointments
- Interactive calendar
- Time slot selection
- Doctor profiles
- Booking confirmation

---

## 🔧 Configuration

### Tailwind Configuration
Custom animations, gradients, and utilities configured in `tailwind.config.js`

### Vite Configuration
Optimized build settings in `vite.config.js`

### PostCSS Configuration
Module support via `postcss.config.cjs`

---

## 📝 Usage

### First Visit
1. Landing page loads with Hyperspeed background
2. Click "Get Started" to enter main app
3. Visit is saved in localStorage

### Chat with AI
1. Navigate to Chat section
2. Type message or use voice input
3. Get instant AI-powered health guidance
4. History automatically saves

### Track Health
1. View Dashboard for daily stats
2. Log meals and calories
3. Maintain streaks
4. Unlock achievements

### Book Appointments
1. Select preferred date
2. Choose available time slot
3. Pick doctor
4. Confirm booking

---

## 🌈 Features Showcase

### Animations
- Fade-in effects
- Slide-up transitions
- Pulse animations
- Blob movements
- Hover scale effects
- Icon rotations

### Interactions
- Smooth scrolling
- Hover states
- Click feedback
- Loading states
- Toast notifications

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Pradeep**
- GitHub: [@pradeep-iitb](https://github.com/pradeep-iitb)
- Project: [Sanitas](https://github.com/pradeep-iitb/Sanitas)

---

## 🙏 Acknowledgments

- Google Gemini AI for chat capabilities
- Three.js community for 3D graphics support
- Tailwind CSS for styling framework
- React team for the amazing library

---

## 📊 Project Stats

- **Components**: 25+
- **Features**: 30+
- **Animations**: 50+
- **Lines of Code**: 5000+
- **Commits**: 50+

---

<div align="center">

**Made with ❤️ for better health management**

⭐ Star this repo if you find it helpful!

</div> - AI Health Assistant

A modern, full-stack prototype health chatbot powered by Google Gemini API, built with React + Vite frontend and Node.js + Express backend.

![Tech Stack](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

## 📁 Project Structure

```
Sanitas/
├── frontend/                 # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/      # React components (Navbar, Hero, Features, ChatSection, About)
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Tailwind + custom styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js       # Vite config with API proxy
│   ├── tailwind.config.js   # Tailwind customization
│   └── postcss.config.js
│
└── backend/                 # Node.js + Express + MongoDB
    ├── config/
    │   └── db.js           # MongoDB connection
    ├── controllers/
    │   └── chatController.js
    ├── models/
    │   ├── user.js
    │   ├── chatHistory.js
    │   └── feedback.js
    ├── routes/
    │   ├── chat.js
    │   └── users.js
    ├── utils/
    │   └── geminiClient.js  # Gemini API integration
    ├── server.js            # Express server entry
    ├── package.json
    └── .env.example         # Environment template
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- MongoDB Atlas account (free tier works)
- Google Gemini API key ([Get one here](https://ai.google.dev/))

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env` with your credentials:**
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/sanitas?retryWrites=true&w=majority
   FRONTEND_ORIGIN=http://localhost:5173
   PORT=5000
   ```

5. **Start the backend server:**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Or production mode
   npm start
   ```

   Backend runs on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   Frontend runs on `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

   Outputs to `dist/` directory

## 🔧 API Endpoints

### Chat
- **POST** `/api/chat`
  - **Body:** `{ "message": "Your question here", "userId": "optional_user_id" }`
  - **Response:** `{ "reply": "AI generated response" }`

### Users
- **POST** `/api/users`
  - **Body:** `{ "name": "John", "email": "john@example.com" }`
  - **Response:** Created user object

- **GET** `/api/users/:id`
  - **Response:** User object with recent chat history

## 🎨 Features

✅ **Modern React UI** - Built with React 18, Vite, and Tailwind CSS  
✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **AI Chat** - Powered by Google Gemini API  
✅ **Persistent Storage** - MongoDB for users and chat history  
✅ **Real-time Chat** - Smooth animations and loading states  
✅ **Elegant Design** - Glass morphism effects, gradients, smooth transitions  
✅ **CORS Enabled** - Ready for deployment on separate domains  
✅ **Input Validation** - Server-side validation with express-validator  

## 🌐 Deployment

### Frontend (GitHub Pages / Vercel / Netlify)

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy `dist/` folder to:**
   - **GitHub Pages:** Configure repo settings to serve from `dist/`
   - **Vercel:** `vercel --prod`
   - **Netlify:** Drag `dist/` folder to Netlify dashboard

3. **Update backend CORS:**
   Set `FRONTEND_ORIGIN` in backend `.env` to your deployed frontend URL

### Backend (Render / Railway / Fly.io)

1. **Push to GitHub** (backend folder)

2. **Deploy to Render:**
   - Connect your GitHub repo
   - Set build command: `cd backend && npm install`
   - Set start command: `cd backend && npm start`
   - Add environment variables (GEMINI_API_KEY, MONGO_URI, etc.)

3. **Deploy to Railway:**
   ```bash
   cd backend
   railway up
   ```

4. **Update frontend** to point to deployed backend URL

## 📝 Environment Variables Reference

### Backend `.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Google Gemini API key | `AIza...` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `FRONTEND_ORIGIN` | Allowed frontend URL for CORS | `http://localhost:5173` |
| `PORT` | Backend server port | `5000` |

## 🧪 Development

### Run Both Frontend and Backend Concurrently

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` - Vite proxy will forward `/api/*` requests to backend.

### MongoDB Atlas Setup

1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Add database user (Database Access)
4. Whitelist your IP or use `0.0.0.0/0` for development (Network Access)
5. Get connection string from "Connect" → "Connect your application"
6. Replace `<password>` and add database name (e.g., `sanitas`)

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **CORS** - Cross-origin support
- **express-validator** - Input validation
- **node-fetch** - HTTP client for Gemini API

### Database
- **MongoDB Atlas** - Cloud database

## 📦 Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start server
- `npm run dev` - Start with nodemon (auto-reload)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is a prototype for educational purposes.

## 🆘 Troubleshooting

### Backend won't start
- Verify `MONGO_URI` is correct in `.env`
- Check MongoDB Atlas network access whitelist
- Ensure port 5000 is not in use

### Frontend can't reach backend
- Verify backend is running on port 5000
- Check Vite proxy config in `vite.config.js`
- Ensure CORS is properly configured in backend

### Gemini API errors
- Verify `GEMINI_API_KEY` is set correctly
- Check API quotas and billing
- Review Gemini API documentation for endpoint changes

## 📧 Contact

For questions or support, email: hello@sanitas.example

---

**Built with ❤️ using React, Node.js, and Google Gemini**