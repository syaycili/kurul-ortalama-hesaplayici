import React, { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import ExamInput from './ExamInput';
import TotalScore from './TotalScore';

const defaultExams = [
  { name: 'Sinir Sistemi', akts: 14, score: null},
  { name: 'Kalp-Damar Sistemi', akts: 11, score: null},
  { name: 'Beslenme ve Metabolizma', akts: 7, score: null},
  { name: 'Endokrin ve Ürogenital', akts: 9, score: null},
  { name: 'Kliniğe Giriş', akts: 9, score: null},
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
    <p className='text-xs text-white pb-4'><i>2024-2025 Tıp Fakültesi Dönem 2 için güncellenmiştir. </i></p>
    
    <Card className="p-4 w-full">
      <CardHeader className="flex items-center gap-3">
      <h1 className="text-md">Notlarınızı Giriniz:</h1>
      </CardHeader>
      <Divider/>
      <CardBody>
      <div className='flex justify-center grid gap-4'>
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
