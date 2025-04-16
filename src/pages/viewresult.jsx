
import reactQuiz from "../data/quizdata"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function ViewResult() {
    const navigate = useNavigate()
    const [currentQesIndex, setcurrentQesIndex] = useState(0)
    const currentQuestion = reactQuiz[currentQesIndex]
    const optionLables = ["A", "B", "C", "D"]
    const correctAnswer = currentQuestion.answer

    

    function handleNext() {
        setcurrentQesIndex((prev) => prev + 1)
    }
    function handlePrev() {
        setcurrentQesIndex(currentQesIndex - 1)
    }
    function handlesubmit(){
        navigate("/")
    }

    

    return (
        <div className="relative flex flex-col items-center justify-start  bg-[#5f1ec1] h-screen overflow-hidden">
            <div className="absolute bg-[#904af8] w-full h-48 rounded-b-full">

            </div>
            <h1 className="z-10 text-white text-center text-4xl font-bold mt-9">Quiz</h1>
            <div className="relative flex flex-col z-10 bg-white mx-10 my-5 rounded-xl pt-4  px-4 w-72 h-[450px]">
                <p>{currentQuestion.id}. {currentQuestion.question}</p>
                <ul className="mt-5">
                    {currentQuestion.options.map((option, index) => {
                        return (
                            <li><button disabled='true' value={option} className="bg-gray-200 pl-4  my-2 rounded-3xl p-2 w-[100%] text-left">{optionLables[index]}. {option} {option == correctAnswer? <i className="fa-solid fa-circle-check text-xl" style={{color: "#03e294"}}/> : <i className="fa-solid fa-circle-xmark fa-shake text-xl" style={{color: "#ff0000"}}/>}</button></li>
                        )
                    })}
                </ul>

                <div >
                    <div>
                        <button onClick={handlePrev} className="absolute bottom-2 left-5 rounded-xl bg-[#904af8] text-white py-1 px-5">
                            Prev Quiz
                        </button>
                        <button onClick={handleNext} className="absolute bottom-2 right-5 rounded-xl bg-[#904af8] text-white py-1 px-5">
                            Next Quiz
                        </button>
                    </div>
                    <div>
                        <button onClick={handleNext} className="absolute bottom-2 right-5  rounded-xl bg-[#904af8] text-white py-1 px-5">
                            Next Quiz
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-2 right-5 flex">
                    <button onClick={handlesubmit} className="bg-red-500 text-white font-medium px-5 py-1 rounded-2xl">Go to Home</button>
                </div>
            </div>
        </div>

    )
}