import React from 'react';

function TotalScore({ totalScore }) {
  return (
    <div>
      {totalScore !== 0 && (
        <div className="mx-8">
        <p className="text-xl font-bold text-white text-center">Total Score: {totalScore}</p>
        </div>
      )}
    </div>
  );
}

export default TotalScore;
