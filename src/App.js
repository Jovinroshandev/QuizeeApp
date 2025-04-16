import Home from "./pages/home"
import Instraction from "./pages/instraction"
import Quiz from "./pages/quiz"
import Result from "./pages/result"
import ViewResult from "./pages/viewresult"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/usercontext"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/instruction" element={<Instraction />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/view-result" element={<ViewResult />} />
            </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}