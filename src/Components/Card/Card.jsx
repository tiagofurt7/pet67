import React, { useState } from 'react'

const Card = (props) => {
    const [favoritos, setFavoritos] = useState({});
    const alternarFavorito = (id) =>
        setFavoritos((atual) => ({ ...atual, [id]: !atual[id] }));

    return (
        <>
            <article className={props.styler}>
                <div className="card__capa" aria-hidden="true">
                    <span className="card__icone">{props.icon}</span>
                </div>
                <div className="card__corpo">
                    <div className="card__topo">
                        <h3 className="card__titulo">{props.title}</h3>
                        <button
                            type="button"
                            className="card__favorito"
                            aria-pressed={!!favoritos.racao}
                            aria-label={favoritos.racao ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                            onClick={() => alternarFavorito('racao')}
                        >
                            {favoritos.racao ? '♥' : '♡'}
                        </button>
                    </div>
                    <p className="card__descricao">{props.description}</p>
                    <div className="card__rodape">
                        <strong className="card__destaque">{props.price}</strong>
                        <span className="card__rotulo">Em estoque</span>
                    </div>
                    <button type="button" className="card__acao" onClick={() => console.log('Ver detalhes: Ração premium para cães')}>
                        Ver detalhes
                    </button>
                </div>
            </article>
        </>
    )
}

export default Card
