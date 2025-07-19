# Feedback Collection Platform

A full-stack **Feedback Collection Platform** built using **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB** for database storage.  
Admins can **register, log in, create feedback forms**, share links with users, collect responses, and view results in a **dashboard**.

## 📂 Folder Structure

<br>
frontend/<br>
├── src/<br>
│   ├── components/   <br>      
│   ├── pages/<br>
│   │   ├── Login.js<br>
│   │   ├── CreateForm.js<br>
│   │   ├── SubmitForm.js<br>
│   │   └── Dashboard.js<br>
│   ├── services/  <br>         
│   │   └── api.js<br>
│   ├── App.js<br>
│   └── index.js<br>
└── package.json<br>
<br>

#Backend <br>

backend/<br>
├── controllers/<br>
│ ├── authController.js<br>
│ ├── formController.js<br>
│ └── responseController.js<br>
├── models/<br>
│ ├── Admin.js<br>
│ ├── Form.js<br>
│ └── Response.js<br>
├── routes/<br>
│ ├── authRoutes.js<br>
│ ├── formRoutes.js<br>
│ └── responseRoutes.js<br>
├── middleware/<br>
│ └── authMiddleware.js<br>
└── app.js<br>
<br>

## Installation & Setup<br>

### 1. **Clone the Repository**<br>

1.git clone <repo-url><br>
2.cd feedback-collection<br>

# backend<br>

3.cd backend<br>
4.npm install<br>
5.nodemon app.js/ node app.js<br>

# frontend<br>

cd frontend<br>
npm run dev<br>

#Create a .env file inside server:<br>
MONGO_URI=<your-mongodb-connection-string><br>
PORT=5000<br>
JWT_SECRET=<your-secret-key><br>

## 🚀 Features<br>

### 1. **Admin Authentication**<br>

- Register and login with **JWT-based authentication**.<br>
- Passwords are securely hashed with **bcrypt**.<br>
- Prevents duplicate user registration.<br>

### 2. **Feedback Form Creation**<br>

- Admin can create forms with:<br>
  - A **form title**.<br>
  - **Multiple questions** (text type).<br>
- Redirects to the generated **form page**.<br>

### 3. **Feedback Submission**<br>

- Users can access and fill the form via `form/:id`.<br>
- Submissions stored in MongoDB.<br>
- Toast notifications for submission success or failure.<br>

### 4. **Responses Dashboard**<br>

- Admin views all responses in `/dashboard/:formId`.<br>
- Displays each user’s answers.<br>
- Ready for **CSV export functionality**.<br>

### 5. **Responsive Design**<br>

- UI styled with **TailwindCSS** for a mobile-first layout.<br>

## System Design<br>

### **Frontend**<br>

- Pages:<br>
  - `Register` → Admin sign-up.<br>
  - `Login` → Admin login.<br>
  - `CreateForm` → Create feedback form.<br>
  - `SubmitForm` → Public form submission.<br>
  - `Dashboard` → View collected responses.<br>
- Tools:<br>
  - **React Router DOM** for navigation.<br>
  - **Axios** for API requests.<br>
  - **React Toastify** for notifications.<br>

### **Backend**<br>

- **Routes:**<br>
  - `/api/auth` → Registration and login.<br>
  - `/api/forms` → Form creation and fetching.<br>
  - `/api/responses` → Submit and fetch form responses.<br>
- **Controllers**:<br>
  - Handles form creation, responses, CSV export.<br>
- **MongoDB Models**:<br>
  - `Admin`: `{ username, email, password }`<br>
  - `Form`: `{ title, questions: [{ questionText, type }], createdBy }`<br>
  - `Response`: `{ formId, answers: [{ questionText, answer }] }`<br>
