import React from 'react';
import SonucModal from './SonucModal';

function TotalScore({ totalScore,calculateMinFinalExamScore }) {
  return (
    <div>
      {totalScore !== 0 && (
        <SonucModal totalScore={totalScore} calculateMinFinalExamScore={calculateMinFinalExamScore}/>            
      )}
    </div>
  );
}

export default TotalScore;
