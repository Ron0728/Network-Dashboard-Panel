import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/sendData", {
        data: data,
      });
      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="data"
          >
            Data
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="data"
            type="text"
            value={data}
            onChange={handleChange}
            placeholder="Enter data"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
