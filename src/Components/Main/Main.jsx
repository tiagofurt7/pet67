import { useState } from 'react';
import './Main.css';
import Card from '../Card/Card';

const ABAS = [
    { id: 'produtos', rotulo: 'Produtos', icone: '🛍️' },
    { id: 'categorias', rotulo: 'Categorias', icone: '🐾' },
];

export default function Main() {
    const [abaAtiva, setAbaAtiva] = useState('produtos');
    const [favoritos, setFavoritos] = useState({});
    const indice = ABAS.findIndex((aba) => aba.id === abaAtiva);

    const alternarFavorito = (id) =>
        setFavoritos((atual) => ({ ...atual, [id]: !atual[id] }));

    return (
        <main className="main">
            <section className="main__intro">
                <div>
                    <h2 className="main__titulo">
                        {abaAtiva === 'produtos' ? 'Produtos da loja' : 'Categorias da loja'}
                    </h2>
                    <p className="main__texto">
                        {abaAtiva === 'produtos'
                            ? 'Acompanhe preço e estoque de tudo que seu pet precisa.'
                            : 'Veja como os produtos estão organizados por tipo de pet.'}
                    </p>
                </div>

                <button type="button" className="main__novo">
                    + {abaAtiva === 'produtos' ? 'Novo produto' : 'Nova categoria'}
                </button>
            </section>

            {/* ---------- Abas ---------- */}
            <div className="abas" role="tablist" aria-label="Seções do painel" data-ativa={indice}>
                <span className="abas__indicador" aria-hidden="true" />
                {ABAS.map((aba) => (
                    <button
                        key={aba.id}
                        type="button"
                        role="tab"
                        id={`aba-${aba.id}`}
                        aria-selected={abaAtiva === aba.id}
                        aria-controls={`painel-${aba.id}`}
                        className="abas__botao"
                        onClick={() => setAbaAtiva(aba.id)}
                    >
                        <span aria-hidden="true">{aba.icone}</span> {aba.rotulo}
                    </button>
                ))}
            </div>

            {/* ---------- Painel: Produtos ---------- */}
            {abaAtiva === 'produtos' && (
                <section className="grade" role="tabpanel" id="painel-produtos" aria-labelledby="aba-produtos">
                    {/* TODO: percorrer a lista real de produtos aqui depois */}

                    <Card
                        styler="card card--azul"
                        icon="🦴"
                        title="Ração premium para cães"
                        description="Frango e arroz, indicada para cães adultos de porte médio."
                        price="R$ 189,90"
                    />

                    <Card
                        styler="card card--coral"
                        icon="🐱"
                        title="Arranhador para gatos"
                        description="Torre com sisal, toca e brinquedo suspenso."
                        price="R$ 229,00"
                    />
                    <Card
                        styler="card card--verde"
                        icon="🦜"
                        title="Aves"
                        description="Gaiolas, sementes, poleiros e brinquedos para aves."
                        price="14 produtos"
                        label="Ativa"
                        action="Abrir categoria"
                    />
                    <Card
                        styler="card card--amarelo"
                        icon="🐟"
                        title="Peixes"
                        description="Aquários, filtros, alimentos e produtos de limpeza."
                        price="11 produtos"
                        label="Rascunho"
                        action="Abrir categoria"
                    />
                    <article className="card card--verde">
                        <div className="card__capa" aria-hidden="true">
                            <span className="card__icone">🦮</span>
                        </div>
                        <div className="card__corpo">
                            <div className="card__topo">
                                <h3 className="card__titulo">Coleira com guia</h3>
                                <button
                                    type="button"
                                    className="card__favorito"
                                    aria-pressed={!!favoritos.coleira}
                                    aria-label={favoritos.coleira ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    onClick={() => alternarFavorito('coleira')}
                                >
                                    {favoritos.coleira ? '♥' : '♡'}
                                </button>
                            </div>
                            <p className="card__descricao">Ajustável e refletiva, para passeios seguros à noite.</p>
                            <div className="card__rodape">
                                <strong className="card__destaque">R$ 79,90</strong>
                                <span className="card__rotulo">Em estoque</span>
                            </div>
                            <button type="button" className="card__acao" onClick={() => console.log('Ver detalhes: Coleira com guia')}>
                                Ver detalhes
                            </button>
                        </div>
                    </article>
                    <article className="card card--amarelo">
                        <div className="card__capa" aria-hidden="true">
                            <span className="card__icone">🐠</span>
                        </div>
                        <div className="card__corpo">
                            <div className="card__topo">
                                <h3 className="card__titulo">Kit aquário completo</h3>
                                <button
                                    type="button"
                                    className="card__favorito"
                                    aria-pressed={!!favoritos.aquario}
                                    aria-label={favoritos.aquario ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    onClick={() => alternarFavorito('aquario')}
                                >
                                    {favoritos.aquario ? '♥' : '♡'}
                                </button>
                            </div>
                            <p className="card__descricao">Aquário de 40 litros com filtro, iluminação e termostato.</p>
                            <div className="card__rodape">
                                <strong className="card__destaque">R$ 459,00</strong>
                                <span className="card__rotulo">Esgotado</span>
                            </div>
                            <button type="button" className="card__acao" onClick={() => console.log('Ver detalhes: Kit aquário completo')}>
                                Ver detalhes
                            </button>
                        </div>
                    </article>
                </section>
            )}

            {/* ---------- Painel: Categorias ---------- */}
            {abaAtiva === 'categorias' && (
                <section className="grade" role="tabpanel" id="painel-categorias" aria-labelledby="aba-categorias">
                    {/* TODO: percorrer a lista real de categorias aqui depois */}
                    <article className="card card--azul">
                        <div className="card__capa" aria-hidden="true">
                            <span className="card__icone">🐶</span>
                        </div>
                        <div className="card__corpo">
                            <div className="card__topo">
                                <h3 className="card__titulo">Cães</h3>
                                <button
                                    type="button"
                                    className="card__favorito"
                                    aria-pressed={!!favoritos.caes}
                                    aria-label={favoritos.caes ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    onClick={() => alternarFavorito('caes')}
                                >
                                    {favoritos.caes ? '♥' : '♡'}
                                </button>
                            </div>
                            <p className="card__descricao">Rações, petiscos, camas, roupas e acessórios de passeio.</p>
                            <div className="card__rodape">
                                <strong className="card__destaque">32 produtos</strong>
                                <span className="card__rotulo">Ativa</span>
                            </div>
                            <button type="button" className="card__acao" onClick={() => console.log('Abrir categoria: Cães')}>
                                Abrir categoria
                            </button>
                        </div>
                    </article>
                    <article className="card card--coral">
                        <div className="card__capa" aria-hidden="true">
                            <span className="card__icone">🐱</span>
                        </div>
                        <div className="card__corpo">
                            <div className="card__topo">
                                <h3 className="card__titulo">Gatos</h3>
                                <button
                                    type="button"
                                    className="card__favorito"
                                    aria-pressed={!!favoritos.gatos}
                                    aria-label={favoritos.gatos ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    onClick={() => alternarFavorito('gatos')}
                                >
                                    {favoritos.gatos ? '♥' : '♡'}
                                </button>
                            </div>
                            <p className="card__descricao">Areias, arranhadores, brinquedos e rações específicas.</p>
                            <div className="card__rodape">
                                <strong className="card__destaque">27 produtos</strong>
                                <span className="card__rotulo">Ativa</span>
                            </div>
                            <button type="button" className="card__acao" onClick={() => console.log('Abrir categoria: Gatos')}>
                                Abrir categoria
                            </button>
                        </div>
                    </article>
                    <article className="card card--verde">
                        <div className="card__capa" aria-hidden="true">
                            <span className="card__icone">🦜</span>
                        </div>
                        <div className="card__corpo">
                            <div className="card__topo">
                                <h3 className="card__titulo">Aves</h3>
                                <button
                                    type="button"
                                    className="card__favorito"
                                    aria-pressed={!!favoritos.aves}
                                    aria-label={favoritos.aves ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    onClick={() => alternarFavorito('aves')}
                                >
                                    {favoritos.aves ? '♥' : '♡'}
                                </button>
                            </div>
                            <p className="card__descricao">Gaiolas, sementes, poleiros e brinquedos para aves.</p>
                            <div className="card__rodape">
                                <strong className="card__destaque">14 produtos</strong>
                                <span className="card__rotulo">Ativa</span>
                            </div>
                            <button type="button" className="card__acao" onClick={() => console.log('Abrir categoria: Aves')}>
                                Abrir categoria
                            </button>
                        </div>
                    </article>
                    <article className="card card--amarelo">
                        <div className="card__capa" aria-hidden="true">
                            <span className="card__icone">🐟</span>
                        </div>
                        <div className="card__corpo">
                            <div className="card__topo">
                                <h3 className="card__titulo">Peixes</h3>
                                <button
                                    type="button"
                                    className="card__favorito"
                                    aria-pressed={!!favoritos.peixes}
                                    aria-label={favoritos.peixes ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    onClick={() => alternarFavorito('peixes')}
                                >
                                    {favoritos.peixes ? '♥' : '♡'}
                                </button>
                            </div>
                            <p className="card__descricao">Aquários, filtros, alimentos e produtos de limpeza.</p>
                            <div className="card__rodape">
                                <strong className="card__destaque">11 produtos</strong>
                                <span className="card__rotulo">Rascunho</span>
                            </div>
                            <button type="button" className="card__acao" onClick={() => console.log('Abrir categoria: Peixes')}>
                                Abrir categoria
                            </button>
                        </div>
                    </article>
                </section>
            )}
        </main>
    );
}
