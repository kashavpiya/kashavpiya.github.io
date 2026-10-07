import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Chat from './pages/Chat.jsx'
import FlockSafetyReport from './pages/FlockSafetyReport.jsx'
import NeuralNetworks from './pages/NeuralNetworks.jsx'
import DiscussionPost from './pages/DiscussionPost.jsx'
import ByteSizedNewsletter from './pages/ByteSizedNewsletter.jsx'
import Kas4b from './pages/Kas4b.jsx'
import F1Austin from './pages/F1Austin.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artifacts/chat" element={<Chat />} />
      <Route path="/artifacts/flock-safety" element={<FlockSafetyReport />} />
      <Route path="/artifacts/neural-networks" element={<NeuralNetworks />} />
      <Route path="/artifacts/discussion-post" element={<DiscussionPost />} />
      <Route path="/artifacts/byte-sized-newsletter" element={<ByteSizedNewsletter />} />
      <Route path="/artifacts/kas-4b" element={<Kas4b />} />
      <Route path="/f1-austin" element={<F1Austin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
