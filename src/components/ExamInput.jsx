import React from 'react';

function ExamInput({ name, score, akts, onScoreChange }) {
  const handleScoreChange = (e) => {
    const newScore = e.target.value;
    onScoreChange(newScore);
  };

  return (
    <div className="mb-4 mx-4">
      <label className="block text-white mb-2">{name}</label>
      <div className="flex items-center">
        <input
          type="number"
          className="bg-gray-700 rounded-md py-2 px-3 text-white w-32 mr-2"
          placeholder="Not"
          value={score}
          min={-50}
          max={100}
          onChange={handleScoreChange}
        />
        <span className="text-white mr-2">x</span>
        <span className="text-white mr-2">AKTS</span>
        <input
          type="number"
          className="bg-gray-700 rounded-md py-2 text-white w-10 text-center"
          placeholder="AKTS"
          value={akts}
          readOnly
          disabled
        />
      </div>
    </div>
  );
}

export default ExamInput;
