import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Compontes/TopBar';

const QuizPageOne = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/quizpagetwo');
    };
    const [selectedWords, setSelectedWords] = useState({});
    const correctAnswers = ['pencil', 'teacher', 'zoo', 'school', 'leaf'];

    const handleWordClick = (word) => {
        if (selectedWords[word]) return; // prevent re-click after answered

        const isCorrect = correctAnswers.includes(word);
        setSelectedWords(prev => ({
            ...prev,
            [word]: isCorrect ? 'correct' : 'wrong'
        }));
    };

    const resetQuiz = () => {
        setSelectedWords({});
    };

    const getBorderClass = (word) => {
        if (selectedWords[word] === 'correct') return 'border-green-500';
        if (selectedWords[word] === 'wrong') return 'border-red-500';
        return 'border-gray-300';
    };

    const getBgClass = (word) => {
        if (selectedWords[word] === 'correct') return 'bg-green-100';
        if (selectedWords[word] === 'wrong') return 'bg-red-100';
        return 'bg-gray-100';
    };

    return (
        <div className='relative'>
            {/* Header section */}
            <TopBar />
            {/* End of Header section */}

            <div className="flex">
                <div className="w-3/4 p-6">
                    <div className="flex items-center mb-8 mt-2">
                        <div className="text-xl font-bold mr-2">1.</div>
                        <div className="relative">
                            <span className="font-bold text-xl">Circle</span>
                            <div className="absolute -top-1 left-0 w-full h-full">
                                <svg width="70" height="30" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 20C15 5 40 5 65 20" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-xl ml-2">the <strong>nouns</strong> below.</span>
                    </div>


                    <div className="border-2 border-gray-800 rounded-3xl mt-[50px] p-6 max-w-3xl">
                        {/* First row: 3 items */}
                        <div className="grid grid-cols-3  mb-4">
                            {['pencil', 'teacher', 'speak'].map((word) => (
                                <div key={word} className="flex justify-center">
                                    <button
                                        onClick={() => handleWordClick(word)}
                                        className={`px-6 py-2 rounded-full border ${getBorderClass(word)} ${getBgClass(word)}`}
                                    >
                                        {word}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Second row: 4 items */}
                        <div className="grid grid-cols-4  mb-4">
                            {['blue', 'zoo', 'silly', 'school'].map((word) => (
                                <div key={word} className="flex justify-center">
                                    <button
                                        onClick={() => handleWordClick(word)}
                                        className={`px-6 py-2 rounded-full border ${getBorderClass(word)} ${getBgClass(word)}`}
                                    >
                                        {word}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Third row: 3 items */}
                        <div className="grid grid-cols-3 ">
                            {['leaf', 'quickly', 'enormous'].map((word) => (
                                <div key={word} className="flex justify-center">
                                    <button
                                        onClick={() => handleWordClick(word)}
                                        className={`px-6 py-2 rounded-full border ${getBorderClass(word)} ${getBgClass(word)}`}
                                    >
                                        {word}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </div>

            {/* Bottom fixed buttons */}
            <div className="fixed bottom-0 left-0 w-full bg-white px-8 py-4 shadow-md">
                <div className='flex gap-4'>
                    <button
                        className="w-[110px] h-[38px] rounded-[10px] border-2 border-sky-400 text-sky-500 font-bold text-sm"
                        onClick={resetQuiz}
                    >
                        Try Again
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-[110px] h-[38px] rounded-[10px] bg-green-500 text-white font-bold text-sm"
                    >
                        Next Activity
                    </button>
                </div>
            </div>
            {/* rigt corner number*/}
            <div></div>
        </div>
    );
};

export default QuizPageOne;






