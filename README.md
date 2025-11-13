# Habit Hero – Django + React Full Stack Habit Tracker

Habit Hero is a simple full-stack habit tracking application built using Django for the backend and React for the frontend.  
Users can add habits, choose a category, select how often they want to follow the habit, and view all habits in a clean interface.


## 🚀 Features

- Add new habits  
- View all habits  
- Choose category and frequency  
- Responsive and simple UI  
- Django REST API connected to React  
- CORS enabled for frontend–backend communication  


## ⚙️ Tech Stack

### Backend
- Django  
- Django REST Framework  
- SQLite  

### Frontend
- React  
- Axios  
- React Icons  


## 📁 Folder Structure

habit-hero/
│
├── habit-hero-backend/ # Backend (Django)
│ ├── habit_hero/ # Settings and URLs
│ ├── tracker/ # Models, Serializer, Views, URLs
│ ├── db.sqlite3
│ └── manage.py
│
└── habit-hero-frontend/ # Frontend (React)
├── src/
├── public/
└── package.json



## 🔗 API Endpoints

| Method | Endpoint            | Description      |
|--------|----------------------|------------------|
| GET    | /api/habits/         | Get all habits   |
| POST   | /api/habits/         | Add a habit      |
| PUT    | /api/habits/<id>/    | Update a habit   |
| DELETE | /api/habits/<id>/    | Delete a habit   |



## How to Run the Project

### Backend Setup
cd habit-hero-backend
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py runserver


Backend runs at:  
http://127.0.0.1:8000/


### Frontend Setup
cd habit-hero-frontend
npm install
npm start


Frontend runs at:  
http://localhost:3000/



## Screenshots

(Add your screenshot image here after uploading)

Example:


## 🎥 Demo Video

(After recording, paste your demo video link here)

Example:  
https://youtu.be/your-demo-video



## Future Enhancements

- User login system  
- Streak tracking  
- Habit analytics  
- User-specific habits  
- AI-based suggestions  



## Developed By  
**Ajay Krishnan**  
B.Tech Computer Science and Design Graduate
