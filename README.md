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

_Add a screenshot of the dashboard here once complete._

CustomerType -> https://github.com/user-attachments/assets/c60425c9-3865-4fab-924b-69d9ba4f6768

TeamType    -> https://github.com/user-attachments/assets/7f53587d-9a5d-4570-bd32-9f9c7a1a5593


---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run dev   # Or npm start after building
