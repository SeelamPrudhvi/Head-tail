import React, { useState } from "react";

function HeadTail() {
  const [selectedValue, setSelectedValue] = useState("");
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (selectedValue === "") {
      setErrorMessage("Please select a value from the dropdown.");
      return;
    }

    setResult((prevResult) => {
      const lastRow = prevResult[prevResult.length - 1];

      if (lastRow && lastRow[lastRow.length - 1] === selectedValue) {
        // If the last row has the same value, add to the same row
        return prevResult.map((row, index) =>
          index === prevResult.length - 1 ? [...row, selectedValue] : [...row]
        );
      } else {
        // If it's a new value, create a new row
        return [...prevResult, [selectedValue]];
      }
    });

    setSelectedValue("");
  };

  return (
    <div>
      <h2>Head & Tail</h2>
      <div>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="" disabled>
            Select Value
          </option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        {result.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((value, index) => (
              <span key={index}>{value} </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadTail;
