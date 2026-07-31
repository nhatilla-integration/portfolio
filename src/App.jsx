import Header from './components/Header';
import Hero from './components/Hero';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import Educacao from './components/Educacao';
import Contato from './components/Contato';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1523]">
      <Header />
      <main>
        <Hero />
        <Experiencia />
        <Projetos />
        <Skills />
        <Educacao />
        <Contato />
      </main>
    </div>
  );
}

export default App;
