import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Artifacts from './pages/Artifacts.jsx'
import Chat from './pages/Chat.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artifacts" element={<Artifacts />} />
      <Route path="/artifacts/chat" element={<Chat />} />
    </Routes>
  )
}
