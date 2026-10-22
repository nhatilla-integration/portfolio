import { useEffect, useState } from 'react';
import * as pt from '../data/perfil';
import * as en from '../data/perfil.en';
import { IdiomaContext } from './idiomaContext';

const CONTEUDO = { pt, en };
const STORAGE_KEY = 'idioma';

// Ordem de prioridade: ?lang= na URL, escolha salva, idioma do navegador.
function idiomaInicial() {
  const daUrl = new URLSearchParams(window.location.search).get('lang');
  if (daUrl in CONTEUDO) return daUrl;

  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo in CONTEUDO) return salvo;
  } catch {
    // localStorage indisponível (aba anônima, cookies bloqueados)
  }

  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial);

  useEffect(() => {
    document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en';
    document.title = CONTEUDO[idioma].ui.tituloPagina;
    try {
      localStorage.setItem(STORAGE_KEY, idioma);
    } catch {
      // ignora: a escolha só não fica salva
    }
  }, [idioma]);

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma, conteudo: CONTEUDO[idioma] }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export default IdiomaProvider;
