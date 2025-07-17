import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubmitForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/forms/${id}`).then((res) => {
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
    await axios.post(`http://localhost:5000/api/responses/${form._id}`, {
      answers,
    });
    alert("Feedback submitted");
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
    </div>
  );
};

export default SubmitForm;
