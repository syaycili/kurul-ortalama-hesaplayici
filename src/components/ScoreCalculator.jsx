import React, { useState } from 'react';
import ExamInput from './ExamInput';
import TotalScore from './TotalScore';

// Default AKTS values for each exam
const defaultExams = [
  { name: 'Exam 1', akts: 5, score: null},
  { name: 'Exam 2', akts: 8, score: null},
  { name: 'Exam 3', akts: 8, score: null},
  { name: 'Exam 4', akts: 8, score: null},
  { name: 'Exam 5', akts: 8, score: null},
  { name: 'Exam 6', akts: 8, score: null},
];

function ScoreCalculator() {
  const [exams, setExams] = useState(defaultExams);

  const handleScoreChange = (index, newScore) => {
    setExams((prevExams) => {
      const updatedExams = [...prevExams];
      updatedExams[index].score = newScore === '' ? null : parseInt(newScore);
      return updatedExams;
    });
  };

  const calculateTotalScore = () => {
    const examsWithScores = exams.filter((exam) => exam.score !== null);
    if (examsWithScores.length === 0) return 0;
    const totalAkts = examsWithScores.reduce((acc, { akts }) => acc + parseInt(akts), 0);
    const totalScore = examsWithScores.reduce((acc, { score, akts }) => acc + score * akts, 0) / totalAkts;
    return isNaN(totalScore) ? 0 : totalScore.toFixed(2);
  };

  return (
    <div>
    <h1 className="text-3xl font-bold text-white mb-7 text-center">Score Calculator</h1>
    <div className="flex bg-gray-800 px-5 py-8 rounded-lg shadow-lg max-w-xl w-full">
    <div>
      {exams.map((exam, index) => (
        <ExamInput key={index} name={exam.name} score={exam.score === null ? '' : exam.score} akts={exam.akts} onScoreChange={(newScore) => handleScoreChange(index, newScore)} />
    ))}
    </div>
      <TotalScore totalScore={calculateTotalScore()} />
    </div>
    </div>
  );
}

export default ScoreCalculator;
