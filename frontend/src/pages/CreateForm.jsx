import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../services/api";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { questionText: "", type: "text" },
  ]);

  const navigate = useNavigate(); // ✅ Hook used correctly at top

  const addQuestion = () => {
    setQuestions([...questions, { questionText: "", type: "text" }]);
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/forms", { title, questions });
      const publicId = res.data.publicId || res.data._id;
      toast.success("Form created successfully!");
      setTimeout(() => navigate(`/form/${publicId}`), 1500); // ✅ use navigate, not useNavigate()
    } catch (err) {
      toast.error("Failed to create form");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Feedback Form
        </h2>
        <input
          className="w-full p-2 border mb-4"
          placeholder="Form Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {questions.map((q, i) => (
          <div key={i} className="mb-4">
            <input
              className="w-full p-2 border"
              placeholder={`Question ${i + 1}`}
              value={q.questionText}
              onChange={(e) => {
                const newQ = [...questions];
                newQ[i].questionText = e.target.value;
                setQuestions(newQ);
              }}
            />
          </div>
        ))}
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          onClick={addQuestion}
        >
          Add Question
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
