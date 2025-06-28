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
- ✅ Use **ReactJS** (with **Redux Toolkit** for state management).
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

![Image](https://github.com/user-attachments/assets/5b6d7a25-28ed-4d98-a8b2-1e0f38b6d963)

![Image](https://github.com/user-attachments/assets/69dfbbe3-bc19-43c1-b64d-518a559e02af)

![Image](https://github.com/user-attachments/assets/fdfa2c2e-d551-4e94-a3b6-d787c090e6e9)

![Image](https://github.com/user-attachments/assets/047cd850-5a10-491b-bd1e-6c2c30ab605f)

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
