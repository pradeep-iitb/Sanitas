# Sanitas - AI Health Assistant

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