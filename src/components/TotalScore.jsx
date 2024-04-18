import React from 'react';

function TotalScore({ totalScore,calculateMinFinalExamScore }) {
  return (
    <div>
      {totalScore !== 0 && (
        <div className="mx-8">
        <p className="text-xl font-bold text-white text-center">Ağırlıklı Ortalama: {totalScore}</p>
        <div className="mt-4">
        <p className="text-white text-center">Geçmek için geren minimum final puanı: {calculateMinFinalExamScore}</p>
        </div>
        </div>
        
      )}
    </div>
  );
}

export default TotalScore;
