# feedback_collection

<br>
frontend/<br>
├── src/<br>
│   ├── components/   <br>      # Reusable UI components (if needed)
│   ├── pages/<br>
│   │   ├── Login.js<br>
│   │   ├── CreateForm.js<br>
│   │   ├── SubmitForm.js<br>
│   │   └── Dashboard.js<br>
│   ├── services/  <br>         # Axios config and API calls
│   │   └── api.js<br>
│   ├── App.js<br>
│   └── index.js<br>
└── package.json<br>
<br>

#Backend design<br>

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
