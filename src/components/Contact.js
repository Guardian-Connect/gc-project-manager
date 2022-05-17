import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("key pressed");
    // or you can send data to backend
  };

  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="app">
      Contact
      <input onKeyPress={handleKeypress} />
    </div>
  );
};

export default Contact;
