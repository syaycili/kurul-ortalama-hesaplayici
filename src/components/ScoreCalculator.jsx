import React, { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import ExamInput from './ExamInput';
import TotalScore from './TotalScore';

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
    <h1 className="text-xl font-semibold text-white p-4 text-center">Kurul Ortalama Hesaplama</h1>
    <Card className="p-4 w-full">
      <CardHeader className="flex items-center gap-3">
      <h1 className="text-md">Notlarınızı Giriniz:</h1>
      </CardHeader>
      <Divider/>
      <CardBody>
      <div className='grid gap-4'>
      {exams.map((exam, index) => (
        <ExamInput key={index} name={exam.name} score={exam.score === null ? '' : exam.score} akts={exam.akts} onScoreChange={(newScore) => handleScoreChange(index, newScore)} />
    ))}
    </div>
      </CardBody>
      <Divider/>
      <CardFooter className='flex justify-center'>
      <TotalScore totalScore={calculateTotalScore()} calculateMinFinalExamScore={calculateMinFinalExamScore()}/>
      </CardFooter>
    </Card>
    <p className='text-sm font-semibold text-white p-4 text-center'>Developed by Sarp.</p>

    </div>
  );
}

export default ScoreCalculator;
