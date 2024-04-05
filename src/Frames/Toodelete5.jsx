import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the data to the backend
    sendDataToBackend(text);
  };

  const sendDataToBackend = (text) => {
    // Make an HTTP POST request to the backend endpoint
    fetch("/data2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful
          console.log("Data sent to the backend");
          // Handle any further actions or responses from the backend
        } else {
          // Request failed
          console.log( text );
          console.error("Failed to send data to the backend");
        }
      })
      .catch((error) => {
        console.error("An error occurred", error);
      });
  };

  return (
    <div className=" p-2">
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          className="bg-gray-400 p-2 rounded-xl outline-none shadow-black shadow-inner"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="bg-black rounded-xl text-white p-2 shadow-md shadow-black "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
