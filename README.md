# Habit Hero – Django + React Full Stack Habit Tracker

Habit Hero is a simple full-stack habit tracking application built using Django for the backend and React for the frontend. Users can create habits, choose a category, select the frequency, and view all habits in a clean interface.

---

## Features

- Add new habits
- View all habits
- Category and frequency selection
- Simple and responsive UI
- Django REST API connected to React
- CORS enabled for frontend–backend communication

---

## Tech Stack

### Backend
- Django
- Django REST Framework
- SQLite

### Frontend
- React
- Axios

---

## API Endpoints

| Method | Endpoint            | Description      |
|--------|----------------------|------------------|
| GET    | /api/habits/         | Get all habits   |
| POST   | /api/habits/         | Add a habit      |
| PUT    | /api/habits/<id>/    | Update a habit   |
| DELETE | /api/habits/<id>/    | Delete a habit   |

---

## How to Run the Project

### Backend Setup
cd habit-hero-backend  
python -m venv venv  
venv\Scripts\activate  
pip install django djangorestframework django-cors-headers  
python manage.py runserver  

Backend URL: http://127.0.0.1:8000/

---

### Frontend Setup
cd habit-hero-frontend  
npm install  
npm start  

Frontend URL: http://localhost:3000/

---

## Demo Video

https://drive.google.com/file/d/15qA-xPdJ6V743OvTi2UHr7cqfNUtciOO/view?usp=sharing

---

## Future Enhancements

- User login and authentication
- Habit streak tracking
- Progress analytics
- User-specific habits
- Additional UI improvements

---

## Developed By

Ajay Krishnan  
B.Tech Computer Science and Design Graduate

---

## Repository Link
https://github.com/its-ak7/habit-hero
