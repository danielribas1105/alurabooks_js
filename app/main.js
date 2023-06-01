let livros = [];
const endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosApi(){
    const resp = await fetch(endPointApi);
    livros = await resp.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosTela(livrosComDesconto);
}

getBuscarLivrosApi();