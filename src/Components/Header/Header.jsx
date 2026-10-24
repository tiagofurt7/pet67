import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [tema, setTema] = useState('claro');
  const escuro = tema === 'escuro';

  // O tema é aplicado no <html>, assim Main e Footer também mudam de cor
  useEffect(() => {
    document.documentElement.dataset.tema = tema;
  }, [tema]);

  const alternarTema = () => setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'));

  return (
    <header className="header">
      <div className="header__marca">
        <span className="header__logo" aria-hidden="true">🐾</span>
        <div>
          <h1 className="header__titulo">Pet Shop Patinhas</h1>
          <p className="header__subtitulo">Cuidado com carinho para o seu pet</p>
        </div>
      </div>

      <div className="header__acoes">
        <button
          type="button"
          className="header__tema"
          onClick={alternarTema}
          aria-pressed={escuro}
          aria-label={escuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          <span className="header__tema-trilho">
            <span className="header__tema-bolinha">{escuro ? '🌙' : '☀️'}</span>
          </span>
          <span className="header__tema-texto">{escuro ? 'Escuro' : 'Claro'}</span>
        </button>

        <div className="header__usuario" title="Sua conta">
          <span className="header__avatar">LS</span>
        </div>
      </div>
    </header>
  );
} 
