import React, { useState } from 'react';
import TopBar from '../Compontes/TopBar';
import { useNavigate } from 'react-router-dom';




const allWords = [
    'table', 'river', 'ball', 'teacher', 'castle',
    'train', 'girl', 'playground', 'flower', 'bird'
];

const correctCategories = {
    people: ['farmer', 'teacher', 'girl'],
    places: ['castle', 'river', 'playground'],
    things: ['table', 'ball', 'train', 'flower', 'bird']
};

const QuizPageTwo = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/quizpagethree');
    };
    const [categories, setCategories] = useState({
        people: ['farmer'],
        places: [],
        things: []
    });

    const [droppedWords, setDroppedWords] = useState([]);
    const [feedback, setFeedback] = useState({});

    const handleDrop = (word, category) => {
        if (droppedWords.includes(word)) return;

        setCategories(prev => ({
            ...prev,
            [category]: [...prev[category], word]
        }));

        setDroppedWords(prev => [...prev, word]);

        const isCorrect = correctCategories[category].includes(word);
        setFeedback(prev => ({
            ...prev,
            [word]: isCorrect ? 'correct' : 'incorrect'
        }));
    };

    const handleTryAgain = () => {
        setCategories({
            people: ['farmer'],
            places: [],
            things: []
        });
        setDroppedWords([]);
        setFeedback({});
    };

    const renderDraggableWord = (word) => (
        <span
            key={word}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', word)}
            className={`mx-1 cursor-move ${
                feedback[word] === 'correct' ? 'text-green-600 font-bold' :
                feedback[word] === 'incorrect' ? 'text-red-500 font-bold' : 'text-gray-700'
            }`}
        >
            {word}
        </span>
    );

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const onDrop = (e, category) => {
        const word = e.dataTransfer.getData('text');
        handleDrop(word, category);
    };

    return (
        <div
            className='h-screen flex flex-col '
            style={{ background: 'linear-gradient(to right, #42A1D1, #8DDAF2)' }}
        >
            {/* header */}
            <TopBar />

            {/* body section */}
            <div className='flex flex-1 mx-2 my-2 bg-white rounded-br-[20px] relative overflow-y-auto'>

                {/* LEFT SIDE - 70% */}
                <div className='w-[70%] flex flex-col items-center justify-start px-6 py-6'>

                    {/* Instructions */}
                    <div className='mb-6 text-center'>
                        <p className='text-[22px] leading-relaxed'>
                            <span className='font-bold'>2.</span>&nbsp;Read the 10 words below. Drag each word into the correct box:&nbsp;
                            <span className='font-bold'>People</span>, <span className='font-bold'>Places</span> or <span className='font-bold'>Things</span>.&nbsp;
                            <span className='italic'>(The first one is done for you.)</span>
                        </p>
                    </div>

                    {/* Original Word List UI (with drag support) */}
                    <div className='flex flex-col items-center gap-4 mb-8'>
                        <div className='border border-gray-300 rounded-full py-2 px-6 inline-block max-w-max'>
                            <p className='text-gray-700'>
                                {['table', 'river', 'ball', 'teacher', 'castle'].map(renderDraggableWord)}
                            </p>
                        </div>
                        <div className='border border-gray-300 rounded-full py-2 px-6 inline-block max-w-max'>
                            <p className='text-gray-700'>
                                {['train', 'girl', 'playground', 'flower', 'bird'].map(renderDraggableWord)}
                            </p>
                        </div>
                    </div>

                    {/* Category boxes */}
                    <div class="flex flex-col md:flex-row gap-4 gap-6 justify-center mb-10">
                        {/* People */}
                        <div
                            className="w-[200px] h-[300px] p-2 pt-10 bg-[#eaf9fc] rounded-lg shadow-md relative"
                            onDrop={(e) => onDrop(e, 'people')}
                            onDragOver={allowDrop}
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white font-semibold py-1 px-4 rounded-full text-center w-fit">
                                People
                            </div>
                            <div className="mt-8 flex flex-col gap-2 items-center">
                                {categories.people.map(word => (
                                    <span
                                        key={word}
                                        className={`text-sm ${
                                            feedback[word] === 'correct' ? 'text-green-600 font-bold' :
                                            feedback[word] === 'incorrect' ? 'text-red-500 font-bold' : ''
                                        }`}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Places */}
                        <div
                            className="w-[200px] h-[300px] p-2 pt-10 bg-[#e8e9f0] rounded-lg shadow-md relative"
                            onDrop={(e) => onDrop(e, 'places')}
                            onDragOver={allowDrop}
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1f1b52] text-white font-semibold py-1 px-4 rounded-full text-center w-fit">
                                Places
                            </div>
                            <div className="mt-8 flex flex-col gap-2 items-center">
                                {categories.places.map(word => (
                                    <span
                                        key={word}
                                        className={`text-sm ${
                                            feedback[word] === 'correct' ? 'text-green-600 font-bold' :
                                            feedback[word] === 'incorrect' ? 'text-red-500 font-bold' : ''
                                        }`}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Things */}
                        <div
                            className="w-[200px] h-[300px] p-2 pt-10 bg-[#fff7ec] rounded-lg shadow-md relative"
                            onDrop={(e) => onDrop(e, 'things')}
                            onDragOver={allowDrop}
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#fbbd3c] text-white font-semibold py-1 px-4 rounded-full text-center w-fit">
                                Things
                            </div>
                            <div className="mt-8 flex flex-col gap-2 items-center">
                                {categories.things.map(word => (
                                    <span
                                        key={word}
                                        className={`text-sm ${
                                            feedback[word] === 'correct' ? 'text-green-600 font-bold' :
                                            feedback[word] === 'incorrect' ? 'text-red-500 font-bold' : ''
                                        }`}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Buttons - LEFT ALIGNED */}
                    <div className='flex gap-4 relative bottom-4 left-16'>
                        <button
                            className='border-2 border-cyan-500 text-cyan-500 font-bold py-2 px-6 rounded-[16px]'
                            onClick={handleTryAgain}
                        >
                            Try Again
                        </button>
                        <button onClick={handleNext} className='bg-green-500 text-white font-bold py-2 px-6 rounded-[16px]'>
                            Next Activity
                        </button>
                    </div>
                </div>


               
            </div>
             {/* Page number */}
             <div className='absolute bottom-2 right-6 text-2xl font-bold text-blue-500'>
                    2
                </div>
        </div>
    );
};

export default QuizPageTwo;




