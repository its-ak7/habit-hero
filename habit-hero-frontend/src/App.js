import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("health");
  const [frequency, setFrequency] = useState("daily");

  // NEW: show/hide list state
  const [showList, setShowList] = useState(false);

  // Fetch habits
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/habits/")
      .then((res) => setHabits(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Add new habit
  const addHabit = (e) => {
    e.preventDefault();
    const newHabit = { name, category, frequency };

    axios
      .post("http://127.0.0.1:8000/api/habits/", newHabit)
      .then((res) => {
        setHabits([...habits, res.data]);
        setName("");
        setCategory("health");
        setFrequency("daily");
      })
      .catch((err) => console.error("Add error:", err));
  };

  // Delete habit
  const deleteHabit = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/habits/${id}/`)
      .then(() => {
        setHabits(habits.filter((h) => h.id !== id));
      })
      .catch((err) => console.error("Delete error:", err));
  };

  // Toggle completed
  const toggleCompleted = (habit) => {
    axios
      .patch(`http://127.0.0.1:8000/api/habits/${habit.id}/`, {
        completed: !habit.completed,
      })
      .then((res) => {
        setHabits(habits.map((h) => (h.id === res.data.id ? res.data : h)));
      })
      .catch((err) => console.error("Update error:", err));
  };

  return (
    <div className="container">
      <h1>Habit Tracker</h1>

      {/* FORM */}
      <form onSubmit={addHabit} className="form-card">

        <div className="input-group">
          <label className="floating-label">Habit Name</label>
          <div className="icon-input">
            <span className="icon">📝</span>
            <input
              type="text"
              placeholder="Enter habit"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label className="floating-label">Category</label>
          <div className="icon-input">
            <span className="icon">📂</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="health">Health</option>
              <option value="work">Work</option>
              <option value="learning">Learning</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label className="floating-label">Frequency</label>
          <div className="icon-input">
            <span className="icon">⏱️</span>
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>

        <button type="submit" className="add-btn premium-btn">
          + Add Habit
        </button>

      </form>

      {/* NEW VIEW BUTTON */}
      <button
        className="view-btn"
        onClick={() => setShowList(!showList)}
      >
        {showList ? "Hide Habits" : "View Habits"}
      </button>

      {/* CONDITIONAL HABIT LIST */}
      {showList && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {habits.map((habit) => (
            <li key={habit.id} className="habit-card">
              <div className="habit-details">
                <strong>{habit.name}</strong> — {habit.category} ({habit.frequency})
                <div className="small-text">
                  Completed: {habit.completed ? "Yes" : "No"}
                </div>
              </div>

              <div>
                <button className="done-btn" onClick={() => toggleCompleted(habit)}>
                  {habit.completed ? "Undo" : "Done"}
                </button>
                <button className="delete-btn" onClick={() => deleteHabit(habit.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;
