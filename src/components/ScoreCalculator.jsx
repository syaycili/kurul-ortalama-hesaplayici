import React, { useState } from 'react';
import ExamInput from './ExamInput';
import TotalScore from './TotalScore';

// Default AKTS values for each exam
const defaultExams = [
  { name: '1. Kurul', akts: 5, score: null},
  { name: '2. Kurul', akts: 8, score: null},
  { name: '3. Kurul', akts: 8, score: null},
  { name: '4. Kurul', akts: 8, score: null},
  { name: '5. Kurul', akts: 8, score: null},
  { name: '6. Kurul', akts: 8, score: null},
];
const toFixedWithoutZeros = (num, precision) =>
  `${1 * num.toFixed(precision)}`;

  
function ScoreCalculator() {
  const [exams, setExams] = useState(defaultExams);

  const handleScoreChange = (index, newScore) => {
    setExams((prevExams) => {
      const updatedExams = [...prevExams];
      updatedExams[index].score = newScore === '' ? null : newScore;
      return updatedExams;
    });
  };

  const calculateMinFinalExamScore = () => {
    const currentTotalScore = parseFloat(calculateTotalScore());
    const minFinalExamScore = (600 - (currentTotalScore * 6))/4;
    return toFixedWithoutZeros(minFinalExamScore, 3);
  };

  const calculateTotalScore = () => {
    const examsWithScores = exams.filter((exam) => exam.score !== null);
    if (examsWithScores.length === 0) return 0;
    const totalAkts = examsWithScores.reduce((acc, { akts }) => acc + parseInt(akts), 0);
    const totalScore = examsWithScores.reduce((acc, { score, akts }) => acc + score * akts, 0) / totalAkts;
    return isNaN(totalScore) ? 0 : toFixedWithoutZeros(totalScore, 3);
  };

  return (
    <div>
    <h1 className="text-3xl font-bold text-white mb-7 text-center">Kurul Ortalama Hesaplama</h1>
    <div className="flex bg-gray-800 px-8 pt-8 pb-4 rounded-lg shadow-lg max-w-xl w-full">
    <div>
      {exams.map((exam, index) => (
        <ExamInput key={index} name={exam.name} score={exam.score === null ? '' : exam.score} akts={exam.akts} onScoreChange={(newScore) => handleScoreChange(index, newScore)} />
    ))}
    </div>
    
      <TotalScore totalScore={calculateTotalScore()} calculateMinFinalExamScore={calculateMinFinalExamScore()}/>
      
    </div>
    <p className='text-sm font-semibold text-white mt-4 text-center'>Developed by Sarp.</p>
    </div>
    
  );
}

export default ScoreCalculator;
