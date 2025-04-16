import { useState } from "react"
import { useData } from "../context/usercontext"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const { setUserName } = useData()
    const [value, setValue] = useState()
    const handleInput = ((evt) => {
        setValue(evt.target.value)
    })
    const navigate = useNavigate()
    const HandleNext = () => {
        setUserName(value)
        navigate("/instruction")
    }
    return (
        <div className="relative flex flex-col items-center justify-start  bg-[#5f1ec1] h-screen overflow-hidden">
            <div className="absolute bg-[#f3a239] w-full h-48 rounded-b-full">
            <div className="flex pl-3 pt-2 text-white font-medium">
            
            </div>
            </div>
            
            <div className="relative items-center  gap-5 flex flex-col z-10 bg-white mx-10 my-20 rounded-xl  px-4 w-80 h-[300px]">
                <h1 className="z-10 text-[#904af8] text-center mt-6 text-4xl font-bold">QiuzeeApp</h1>
                <div className="flex flex-col items-center">
                <div className="flex mt-10 gap-4 justify-center items-center">
                    <h3 className="text-lg font-medium">Name</h3>
                    <input onChange={handleInput} className="bg-[#edd3ff] rounded-lg p-2" style={{ border: "solid 2px black" }} type="text" placeholder="Enter Your Name" />
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center mt-5">
                        <button onClick={HandleNext} className="bg-orange-500 rounded-xl px-10 py-2 my-2 text-white font-medium">START</button>
                    </div>
                </div>
            </div>
            </div>
        </div>

           

        


    )
}