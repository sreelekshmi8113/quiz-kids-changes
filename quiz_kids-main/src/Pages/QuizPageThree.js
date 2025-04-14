import React, { useState } from 'react';
import TopBar from '../Compontes/TopBar';
import { useNavigate } from 'react-router-dom';

const QuizPageThree = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/quizpagefour');
  };
  const sentences = [
    {
      id: 'a',
      text: ['The', 'lion', 'roared', '.'],
      correctNouns: [1],
    },
    {
      id: 'b',
      text: ['The', 'baby', 'is', 'crying', '.'],
      correctNouns: [1],
    },
    {
      id: 'c',
      text: ['The', 'castle', 'is', 'on', 'hill', '.'],
      correctNouns: [1, 4],
    },
    {
      id: 'd',
      text: ['A', 'butterfly', 'landed', 'on', 'the', 'flower', '.'],
      correctNouns: [1, 5],
    },
    {
      id: 'e',
      text: ['The', 'teacher', 'sat', 'on', 'a', 'bench', '.'],
      correctNouns: [1, 5],
    },
    {
      id: 'f',
      text: ['My', 'cat', 'chased', 'a', 'mouse', 'in', 'the', 'garden', '.'],
      correctNouns: [1, 4, 7],
    },
    {
      id: 'g',
      text: ['Sarah', 'and', 'Tom', 'read', 'books', 'in', 'the', 'library', '.'],
      correctNouns: [0, 2, 4, 7],
    },
  ];

  const [userSelections, setUserSelections] = useState(
    sentences.map(sentence => ({
      id: sentence.id,
      selectedWords: Array(sentence.text.length).fill(false)
    }))
  );

  const [isChecking, setIsChecking] = useState(false);

  const toggleWordSelection = (sentenceIndex, wordIndex) => {
    if (isChecking) return;

    setUserSelections(prev => {
      const newSelections = [...prev];
      newSelections[sentenceIndex] = {
        ...newSelections[sentenceIndex],
        selectedWords: [...newSelections[sentenceIndex].selectedWords]
      };
      newSelections[sentenceIndex].selectedWords[wordIndex] = !newSelections[sentenceIndex].selectedWords[wordIndex];
      return newSelections;
    });
  };

  const isCorrect = (sentenceIndex, wordIndex) => {
    if (!isChecking) return null;
    const isSelected = userSelections[sentenceIndex].selectedWords[wordIndex];
    const shouldBeSelected = sentences[sentenceIndex].correctNouns.includes(wordIndex);
    
    if (isSelected) {
      return shouldBeSelected ? "correct" : "incorrect";
    }
    return null;
  };

  const resetQuiz = () => {
    setIsChecking(false);
    setUserSelections(
      sentences.map(sentence => ({
        id: sentence.id,
        selectedWords: Array(sentence.text.length).fill(false)
      }))
    );
  };

  const checkAnswers = () => {
    setIsChecking(true);
  };

  return (
    <div
      className="h-screen flex flex-col"
      style={{ background: 'linear-gradient(to right, #42A1D1, #8DDAF2)' }}
    >
      <TopBar />

      <div className="flex flex-1 mx-2 my-2 bg-white rounded-br-lg relative overflow-y-auto">
        <div className="flex w-full font-sans">
          <div className="w-3/4 p-8 text-black">
            <p className="text-lg font-semibold">
              <span className="font-bold">3. <u>Underline all the nouns</u></span> in each sentence. <span className="font-normal">(There may be more than one)</span>
            </p>

            <p className="mt-4">
              <span className="font-semibold">Example:</span> The <span className="font-bold underline text-green-700">dog</span> is barking.
            </p>

            <ul className="mt-4 space-y-6 text-base pb-10">
              {sentences.map((sentence, sentenceIndex) => (
                <li key={sentence.id} className="flex items-start">
                  <span className="mr-2">{sentence.id}.</span>
                  <div>
                    {sentence.text.map((word, wordIndex) => {
                      const status = isCorrect(sentenceIndex, wordIndex);
                      return (
                        <span
                          key={wordIndex}
                          onClick={() => toggleWordSelection(sentenceIndex, wordIndex)}
                          className={`cursor-pointer mx-1 relative ${
                            userSelections[sentenceIndex].selectedWords[wordIndex]
                              ? 'underline font-medium'
                              : ''
                          } ${
                            status === 'correct'
                              ? 'text-green-600'
                              : status === 'incorrect'
                              ? 'text-red-600'
                              : ''
                          }`}
                        >
                          {word}
                          {status === 'incorrect' && (
                            <span className="absolute -top-2 -right-2 text-red-600 font-bold">
                              ✗
                            </span>
                          )}
                        </span>
                      );
                    })}

                    {/* Bulb + Tooltip only for sentence c */}
                    {sentence.id === 'c' && (
                      <div className="relative group ml-2 inline-block">
                        <span className="cursor-pointer text-yellow-500 text-xl">💡</span>
                        <div className="absolute hidden group-hover:block bg-yellow-200 text-black text-sm px-3 py-2 rounded-xl shadow-lg -top-16 left-0 w-52 z-20 font-semibold border-2 border-yellow-400">
                          🎉 Great clue! This sentence has <span className="text-blue-600 font-bold">2 nouns</span>! Try to find them! 🌟
                          <div className="absolute left-4 -bottom-2 w-4 h-4 bg-yellow-200 rotate-45 border-l-2 border-b-2 border-yellow-400"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative bottom-4 left-18 flex gap-4">
              <button 
                onClick={resetQuiz}
                className="px-6 py-2 rounded-lg border-2 border-cyan-400 text-cyan-500 font-bold bg-white hover:bg-cyan-100"
              >
                Try Again
              </button>
              <button 
                onClick={checkAnswers}
                className="px-6 py-2 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600"
              >
                Check Answers
              </button>
              <button 
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600"
              >
                Next Activity
              </button>
            </div>
          </div>

          <div className="w-1/4  flex items-center justify-center">
            <div className="text-center">
              <img src='/Group 20.png' className="w-[500px] h-[400px]" alt="Polar bear" />
            </div>
          </div>
        </div>
       
      </div>
      <h2 className='text-4xl font-bold text-red-500 absolute bottom-2 right-3'>3</h2>
    </div>
  );
};

export default QuizPageThree;

