const localInserirLivros = document.getElementById("livros");
const valorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosTela(listaLivros){
    valorTotalLivrosDisponiveis.innerHTML = "";
    localInserirLivros.innerHTML = "";
    listaLivros.forEach(livro => {
        let disponibilidadeLivros = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
        localInserirLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidadeLivros}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>
            </div>`
    });
}