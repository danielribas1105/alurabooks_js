const btnFiltrarLivros = document.querySelectorAll('.btn');
btnFiltrarLivros.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosTela(livrosFiltrados);
    if (categoria == 'disponivel'){
        /* let valorTotal = 0.0;
        livrosFiltrados.forEach(livro => {
            valorTotal = valorTotal + livro.preco;
        }) */
        let valorTotal = somarValorTotalLivros(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveis(valorLivros){
    valorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorLivros}</span></p>
        </div>
    `;
}