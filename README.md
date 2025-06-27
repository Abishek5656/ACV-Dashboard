# ACV Dashboard Assignment

This project visualizes business data using a full-stack application. The backend serves structured JSON data via API, and the frontend displays that data using interactive charts and Material UI components.

---

## 📁 Dataset

The data is provided as JSON slices:

- `Customer type.json`
- `Account Industry.json`
- `Team.json`
- `ACV Range.json`

---

## 🛠️ Backend Tasks

- ✅ Read the data from JSON files.
- ✅ Structure and organize the data for frontend consumption.
- ✅ Expose the structured data through REST API endpoints using **Node.js + TypeScript/JavaScript**.

> Example API endpoints:
- `/api/v1/customer`
- `/api/v1/account-industry`
- `/api/v1/team`
- `/api/v1/acv-range`

---

## 💻 Frontend Tasks

- ✅ Consume the API endpoints from the backend.
- ✅ Use **ReactJS** (with optional **Redux** for state management).
- ✅ Display each data slice in a **Material UI Card**.
- ✅ Visualize data using **D3.js** charts:
  - Bar Charts
  - Doughnut Charts (as shown in the assignment screenshot)

---

## 🧪 Technologies Used

- **Frontend:**
  - ReactJS
  - Material UI
  - D3.js
  - Redux Toolkit

- **Backend:**
  - Node.js
  - Express
  - TypeScript/JavaScript
  - JSON file system read

---

## 📸 Screenshots

![customerType](https://github.com/user-attachments/assets/b3f9cd45-9d89-431c-9e4c-6e099b862c64)

![TeamType](https://github.com/user-attachments/assets/faf461ad-66ac-4de4-a0c3-9a6de417de0a)

![AccountType](https://github.com/user-attachments/assets/f86ad78e-5d43-4cb7-8ad0-7c57b7a65ad8)

![ACVType](https://github.com/user-attachments/assets/3e3a191d-5b92-4c95-a067-c7797d0eaff0)


---
Video

https://github.com/user-attachments/assets/adcbefa8-4f5d-45a4-ab90-1567794bb2e0

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run dev   # Or npm start after building

cd frontend
npm install
npm run dev
