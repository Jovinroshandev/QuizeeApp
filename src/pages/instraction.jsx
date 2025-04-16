import Btn from "../components/btn";
export default function Instraction(){
    const instructions = [
        {
            title: "Read Each Question Carefully",
            description: "Make sure to understand the question before selecting your answer."
        },
        {
            title: "Time Limit",
            description: "Each quiz may have a time limit. Keep an eye on the timer!"
        },
        {
            title: "One Attempt Only",
            description: "You are allowed only one attempt per quiz unless stated otherwise."
        },
        {
            title: "Navigation",
            description: 'You can move between questions using the "Next" and "Previous" buttons.'
        },
        {
            title: "Auto-Submit",
            description: "The quiz will be automatically submitted when the time runs out."
        },
        {
            title: "Submit When Done",
            description: "Click the Submit button after completing all questions."
        },
        {
            title: "Results",
            description: "Your score will be shown immediately after submitting the quiz."
        },
        {
            title: "Internet Connection",
            description: "Please ensure a stable internet connection during the quiz."
        },
        {
            title: "Do Not Refresh or Close the Tab",
            description: "Refreshing or closing may result in loss of progress."
        },
    ];
    return(
        <div>
            <h1 className="my-3 text-orange-500 text-2xl font-bold mb-3 text-center">Quiz Instructions</h1>
            <div className="flex justify-center">
            <ol className="text-sm pl-5 list-decimal list-inside">
                {
                    instructions.map(
                        (item)=>(
                        <>
                        <li className="font-medium">{item.title}</li>
                        <p className="pl-4 mb-3">{item.description}</p>
                        </>
                )
                    )
                }
                
                
            </ol>
            </div>
            <div className="flex gap-5 justify-between md:mx-28">
            <Btn btnname="Back" rootpath="/"/>
            <Btn btnname="Next" rootpath="/quiz"/>
            </div>
        </div>
    )
}