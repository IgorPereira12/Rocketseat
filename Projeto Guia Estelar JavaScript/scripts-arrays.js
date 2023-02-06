const categoriasFilmes = [
    {
        categoria: "Ação",
        filmes: [
            {
                titulo: "The Dark Knight",
                diretor: "Christopher Nolan",
            },
            {
                titulo: "The Lord of the Rings: The Return of the King",
                diretor: "Peter Jackson",
            },
            {
                titulo: "John Wick",
                diretor: "Chad Stahelski"
            },
        ],
    },
    {
        categoria: "Suspense",
        filmes: [
            {
                titulo: "Inception",
                diretor: "Christopher Nolan",
            },
            {
                titulo: "The Silence of the Lambs",
                diretor: "Jonathan Demme",
            },
            {
                titulo: "Fight Club",
                diretor: "David Fincher"
            }
        ],
    },
];

const totalCategorias = categoriasFilmes.length

for(let categoria of categoriasFilmes) {
    console.log('Total de filmes da categoria: ', categoria.categoria)
    console.log(categoria.filmes.length)
}

function contagemDiretores() {
    let diretores = [];

    for(let categoria of categoriasFilmes) {
        for(let filmes of categoria.filmes) {
            if(diretores.indexOf(filme.diretor) == -1) {
                diretores.push(filme.titulo)
            }
        }
    }

    console.log("Total de diretores: ", diretores.length)
}

contagemDiretores();

function filmesChristopherNolan() {
    let filmes = [];

    for(let categoria of categoriasFilmes) {
        for(let filmes of categoria.filmes) {
            if(filme.diretor === 'Christopher Nolan') {
                filmes.push(filme.titulo)
            }
        }
    }

    console.log("Filmes do diretor: ", filmes)
}

filmesChristopherNolan();

function filmesDiretor(diretor) {
    let filmes = [];

    for(let categoria of categoriasFilmes) {
        for(let filmes of categoria.filmes) {
            if(filme.diretor === diretor) {
                filmes.push(filme.titulo)
            }
        }
    }

    console.log(`Filmes do diretor ${diretor}: ${filmes.join(",")}`)
}

filmesDiretor('');



