import React, { useState } from "react";
import API from "../services/api";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { questionText: "", type: "text" },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { questionText: "", type: "text" }]);
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/forms", { title, questions });
      alert(
        `Form created! Share this link: http://localhost:3000/form/${res.data.publicId}`
      );
    } catch (err) {
      alert("Failed to create form");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Feedback Form
        </h2>
        <input
          className="w-full p-2 border mb-4"
          placeholder="Form Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {questions.map((q, i) => (
          <div key={i} className="mb-4">
            <input
              className="w-full p-2 border"
              placeholder={`Question ${i + 1}`}
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
