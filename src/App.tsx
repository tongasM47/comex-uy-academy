import { HashRouter, Route, Routes } from 'react-router-dom'
import { ProgressProvider } from './lib/ProgressContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ModulePage, NotFound, Temario } from './pages/Study'
import { LessonPage } from './pages/Lesson'
import { Practice } from './pages/Practice'
import { Exam } from './pages/Exam'
import { Flashcards } from './pages/Flashcards'
import { CasePage, CasesList } from './pages/Cases'
import { Interview } from './pages/Interview'
import { DocumentPage, DocumentsList, Glossary, Podcasts, ProgressPage, Tools } from './pages/Resources'

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temario" element={<Temario />} />
            <Route path="/modulo/:id" element={<ModulePage />} />
            <Route path="/leccion/:id" element={<LessonPage />} />
            <Route path="/documentos" element={<DocumentsList />} />
            <Route path="/documentos/:id" element={<DocumentPage />} />
            <Route path="/herramientas" element={<Tools />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/practica" element={<Practice />} />
            <Route path="/examen" element={<Exam />} />
            <Route path="/casos" element={<CasesList />} />
            <Route path="/casos/:id" element={<CasePage />} />
            <Route path="/entrevista" element={<Interview />} />
            <Route path="/glosario" element={<Glossary />} />
            <Route path="/progreso" element={<ProgressPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ProgressProvider>
  )
}
