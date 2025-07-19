import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const Dashboard = () => {
  const { id } = useParams();
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    API.get(`/responses/${id}`).then((res) => setResponses(res.data));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Responses Dashboard
        </h2>
        {responses.map((res, i) => (
          <div key={i} className="mb-6 p-4 border rounded bg-gray-50">
            <p className="font-semibold mb-2">Response #{i + 1}</p>
            <ul className="list-disc pl-6">
              {res.answers.map((ans, j) => (
                <li key={j}>
                  <strong>{ans.questionText}</strong>: {ans.answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
