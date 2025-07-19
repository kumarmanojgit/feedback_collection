// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import API from "../services/api";

// const SubmitForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState(null);
//   const [answers, setAnswers] = useState([]);

//   useEffect(() => {
//     API.get(`/forms/${id}`).then((res) => {
//       setForm(res.data);
//       setAnswers(
//         res.data.questions.map((q) => ({
//           questionText: q.questionText,
//           answer: "",
//         }))
//       );
//     });
//   }, [id]);

//   const handleSubmit = async () => {
//     try {
//       await API.post(`/responses`, { formId: form._id, answers });
//       toast.success("Form created successfully!");
//       setTimeout(() => navigate(`/dashboard/${form._id}`), 1500);
//     } catch (error) {
//       toast.error("Failed to submit");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded">
//         <h2 className="text-2xl font-bold mb-4 text-center">{form?.title}</h2>
//         {form?.questions.map((q, i) => (
//           <div key={i} className="mb-4">
//             <label className="block mb-1 font-medium">{q.questionText}</label>
//             <input
//               className="w-full p-2 border"
//               onChange={(e) => {
//                 const newAns = [...answers];
//                 newAns[i].answer = e.target.value;
//                 setAnswers(newAns);
//               }}
//             />
//           </div>
//         ))}
//         <button
//           className="w-full bg-green-600 text-white py-2 rounded"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubmitForm;

// Update SubmitForm API call to use formId in the URL to match backend
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../services/api";

const SubmitForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    API.get(`/forms/${id}`).then((res) => {
      setForm(res.data);
      setAnswers(
        res.data.questions.map((q) => ({
          questionText: q.questionText,
          answer: "",
        }))
      );
    });
  }, [id]);

  const handleSubmit = async () => {
    try {
      await API.post(`/responses/${form._id}`, { answers });
      toast.success("Form submitted successfully!");
      setTimeout(() => navigate(`/dashboard/${form._id}`), 1500);
    } catch (error) {
      toast.error("Failed to submit");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">{form?.title}</h2>
        {form?.questions.map((q, i) => (
          <div key={i} className="mb-4">
            <label className="block mb-1 font-medium">{q.questionText}</label>
            <input
              className="w-full p-2 border"
              onChange={(e) => {
                const newAns = [...answers];
                newAns[i].answer = e.target.value;
                setAnswers(newAns);
              }}
            />
          </div>
        ))}
        <button
          className="w-full bg-green-600 text-white py-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SubmitForm;
