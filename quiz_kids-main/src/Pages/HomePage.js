import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();
  const handleroutes = () => {
    navigate('/quizpageone');
  };
  const words = [
    "pencil", "teacher", "speak", "blue", "zoo",
    "silly", "quickly", "school", "leaf", "enormous"
  ];

  const correctAnswers = ["pencil", "teacher", "zoo", "school", "leaf"];

  const [selectedWords, setSelectedWords] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [bottomMessage, setBottomMessage] = useState(""); // 🐻 Teddy bear message

  const toggleWord = (word) => {
    const isAlreadySelected = selectedWords.includes(word);
    if (isAlreadySelected) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
      setBottomMessage(""); // Clear teddy message on unselect
    } else {
      setSelectedWords([...selectedWords, word]);

      const isCorrectAnswer = correctAnswers.includes(word);
      const message = isCorrectAnswer
        ? "🎉 Wow! Correct answer"
        : "❌ Oops! That's not correct";

      const bottomMsg = isCorrectAnswer
        ? "✅ Yes, the answer is correct."
        : "❌ Your answer is not correct.";

      setFeedbackMessage(message);
      setBottomMessage(bottomMsg);

      setTimeout(() => {
        setFeedbackMessage("");
      }, 3000);
    }
  };

  const isCorrect = (word) => correctAnswers.includes(word);

  return (
    <div className="min-h-screen overflow-auto bg-white flex flex-col font-sans">

      {/* Top bar */}
      <div className="h-10 w-full px-6 sm:px-4 md:px-6 flex items-center justify-between text-sm">
        <p className="text-gray-700">Rahul</p>
        <p className="font-bold uppercase text-right text-xs sm:text-sm md:text-base">Nouns for person, place or thing</p>
      </div>

      {/* Header */}
      <div
        style={{ backgroundImage: "url('/Frame (2).png')" }}
        className="w-full py-6 px-6 flex items-center justify-between relative bg-cover bg-center"
      >
        <div className="flex items-end space-x-4">
          <img src="/igloo (1) 1.png" alt="Igloo" className="w-12 h-12" />
          <button className="text-black absolute left-2 bottom-1 font-semibold">HOME</button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-black">
          <h1 className="text-lg font-semibold">
            A Noun is a word that names a person, place or thing.
          </h1>
          <div className="flex justify-center gap-4 mt-2 text-sm font-bold">
            <p>DOCTOR <span className="text-xs font-normal">(PERSON)</span></p>
            <p>PARK <span className="text-xs font-normal">(PLACE)</span></p>
            <p>TABLE</p>
            <p>SPOON</p>
            <p>BALL <span className="text-xs font-normal">(THINGS)</span></p>
          </div>
        </div>
        <button className="border-2 border-[#41AABA] text-black font-semibold bg-white px-6 h-[54px] w-[200px] hover:bg-gray-100 ">
          QUESTION 1/4
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-6 overflow-hidden">
        {/* Left Image */}
        <div className="flex max-h-[600px] flex-col items-center justify-center relative">
          {/* Feedback message above teddy bear */}
          {feedbackMessage && (
            <div className="absolute top-[-60px] bg-white px-4 py-2 rounded shadow-md border text-sm font-semibold text-gray-800 animate-bounce z-10">
              {feedbackMessage}
            </div>
          )}
{/* Group 20.png */}
          <img
            src="/all gif.gif"
            alt="Polar Bear"
            className="w-full max-w-[500px] h-auto object-contain"
          />

          {/* ✅❌ Bottom teddy feedback message */}
          {bottomMessage && (
            <div className="absolute bottom-4 w-full text-center">
              <p className={`text-lg font-semibold ${bottomMessage.includes("not") ? "text-red-600" : "text-green-600"}`}>
                {bottomMessage}
              </p>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 text-center">
          <p className="text-black text-base lg:text-lg mb-4 font-sans">
            <span className="font-bold">1.</span>{' '}
            <span className="relative inline-block align-middle mx-1">
              <span className="relative z-10 italic mr-1 ml-1 px-1">Circle </span>
              <svg
                className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
                width="75"
                height="30"
                viewBox="0 0 75 30"
              >
                <ellipse
                  cx="37.5"
                  cy="15"
                  rx="34"
                  ry="12"
                  fill="none"
                  stroke="#f4a72b"
                  strokeWidth="3"
                />
              </svg>
            </span>
             the <span className="font-bold">nouns</span> below.
          </p>

          <div className="bg-white border-2 border-gray-300 rounded-[25px] p-6 flex flex-wrap justify-center gap-3 max-w-md mx-auto">
            {words.map((word) => {
              const isSelected = selectedWords.includes(word);
              const correct = isSelected && isCorrect(word);
              const wrong = isSelected && !isCorrect(word);

              return (
                <span
                  key={word}
                  onClick={() => toggleWord(word)}
                  className={`px-4 py-2 border-2 rounded-full text-sm cursor-pointer transition duration-200
                    ${isSelected ? 'font-bold' : 'text-black'}
                    ${correct ? 'border-green-600 text-green-700' : ''}
                    ${wrong ? 'border-red-500 text-red-600' : ''}
                    ${!isSelected ? 'hover:bg-blue-100 border-gray-300' : ''}
                  `}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end px-12 gap-6 py-4">
        <button className="border-2 border-blue-200 px-5 py-2 font-semibold hover:bg-gray-100">
          PREVIOUS QUESTION
        </button>
        <button onClick={handleroutes} className="bg-[#00AEEF] text-white px-9 py-2 font-semibold rounded hover:bg-blue-600">
          NEXT QUESTION
        </button>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full">
        <img src="/Group 21.png" alt="Ice Decoration" className="w-full" />
      </div>
    </div>
  );
}








