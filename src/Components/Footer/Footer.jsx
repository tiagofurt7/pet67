import './Footer.css';

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__texto">© {ano} Pet Shop Patinhas. Todos os direitos reservados.</p>

      <nav className="footer__links" aria-label="Links do rodapé">
        <a href="#ajuda">Ajuda</a>
        <a href="#privacidade">Privacidade</a>
        <a href="#contato">Contato</a>
      </nav>
    </footer>
  );
}
