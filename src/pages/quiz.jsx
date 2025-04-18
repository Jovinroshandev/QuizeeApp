
import reactQuiz from "../data/quizdata"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Quiz() {
    const navigate = useNavigate()
    const [currentQesIndex, setcurrentQesIndex] = useState(0)
    const [btnDisply, setBtnDisplay] = useState(false)
    const [activateSubmit, setactivateSubmit] = useState(false)
    const currentQuestion = reactQuiz[currentQesIndex]
    const optionLables = ["A", "B", "C", "D"]
    const correctAnswer = currentQuestion.answer
    const [selectedAns, setselectedAns] = useState(null)
    const [active, setactive] = useState(false)
    const [result, setResult] = useState(0)
    const [answers, setAnswers] = useState(Array(reactQuiz.length).fill(null));

    useEffect(() => {
        if (reactQuiz.length - 1 === currentQesIndex) {
            setactivateSubmit(true)
        }
        if (currentQesIndex > 0) {
            setBtnDisplay(true)
        }
        else {
            setBtnDisplay(false)
        }
        setactive(false)
        return () => {

        }
    }, [currentQesIndex])

    function handleNext() {
        setcurrentQesIndex((prev) => prev + 1)
    }
    function handlePrev() {
        setcurrentQesIndex(currentQesIndex - 1)
    }
    function handlesubmit() {
        navigate("/result" ,{state:{score:result}})
    }

    function handleAns(evt) {
        const selected = evt.target.value;
        const updatedAnswers = [...answers];

        // Only allow first-time selection
        if (updatedAnswers[currentQesIndex] === null) {
            updatedAnswers[currentQesIndex] = selected;
            setAnswers(updatedAnswers);
            setselectedAns(selected);

            if (selected === correctAnswer) {
                setResult((prev) => prev + 1);
            }
        }
    }


    useEffect(() => {
        return () => {
            setactive(true)
        }
    }, [selectedAns])
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
                            <li>
                                <button
                                    style={{
                                        background: selectedAns === option ? "black" : "",
                                        color: selectedAns === option ? "white" : ""
                                    }}
                                    disabled={active}
                                    value={option}
                                    onClick={handleAns}
                                    className="bg-gray-200 pl-4 my-2 rounded-3xl p-2 w-[100%] text-left"
                                >
                                    {optionLables[index]}. {option}
                                </button>

                            </li>
                        )
                    })}
                </ul>

                <div style={{ display: activateSubmit ? "none" : "block" }}>
                    <div style={{ display: btnDisply ? "block" : "none" }}>
                        <button onClick={handlePrev} className="absolute bottom-2 left-5 rounded-xl bg-[#904af8] text-white py-1 px-5">
                            Prev Quiz
                        </button>
                        <button onClick={handleNext} className="absolute bottom-2 right-5 rounded-xl bg-[#904af8] text-white py-1 px-5">
                            Next Quiz
                        </button>
                    </div>
                    <div style={{ display: btnDisply ? "none" : "block" }}>
                        <button onClick={handleNext} className="absolute bottom-2 right-5  rounded-xl bg-[#904af8] text-white py-1 px-5">
                            Next Quiz
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-2 right-5 flex" style={{ display: activateSubmit ? "flex" : "none" }}>
                    <button onClick={handlesubmit} className="bg-red-500 text-white font-medium px-5 py-1 rounded-2xl">Submit</button>
                </div>
            </div>
        </div>

    )
}