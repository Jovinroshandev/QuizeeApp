import { useNavigate } from "react-router-dom"

export default function Btn(props){
    const navigate = useNavigate()

    function HandleNext(){
        navigate(props.rootpath)
    }
    return (
        <div className="flex justify-center">
                <button onClick={HandleNext} className="bg-orange-500 px-10 py-2 my-2 text-white font-medium">{props.btnname}</button>
            </div>
    )
}