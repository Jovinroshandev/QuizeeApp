import cupImage from "../images/cup.png"
import Btn from "../components/btn"
import { useLocation } from "react-router-dom"
import { useData } from "../context/usercontext"
import { useNavigate } from "react-router-dom"
export default function Result() {
    const location = useLocation()
    const score = location.state.score
    const {userName} = useData()
    const name = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
    console.log(name,userName)
    return (
        <div className="relative flex flex-col items-center justify-start  bg-[#5f1ec1] h-screen overflow-hidden">
            <div className="absolute bg-[#904af8] w-full h-48 rounded-b-full">
            <div className="flex pl-3 pt-2 text-white font-medium">
            <a href="/"><i class="fa-solid fa-house"></i> Home</a>
            </div>
            </div>
            
            <h1 className="z-10 text-white text-center mt-6 text-4xl font-bold">Result</h1>
            <div className="relative items-center justify-center gap-5 flex flex-col z-10 bg-white mx-10 my-5 rounded-xl  px-4 w-72 h-[450px]">
                <img className="z-10 w-40" src={cupImage} alt="" />
                <h2 className="text-5xl font-medium">{name}</h2>
                <h2 className="text-8xl font-medium">{score}</h2>
                <Btn rootpath="/view-result" btnname="View Answer"/>
            </div>
        </div>

    )
}