var dados = [
  {
    id: 1,
    nome: "Desenvolvimento Web",
    imgUrl: "imagens/ilustra-web.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
  {
    id: 2,
    nome: "Marketing Digital",
    imgUrl: "imagens/ilustra-marketing.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
  {
    id: 3,
    nome: "Consultoria UX",
    imgUrl: "imagens/ilustra-ux.png",
    descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti.",
  },
];

function populaTabela() {
  if (Array.isArray(dados)) {
    localStorage.setItem("__dados__", JSON.stringify(dados));
    // usando jquery para limpar a tabela
    $("#tblDados tbody").html("");
    dados.forEach((item) => {
      $("#tblDados tbody").append(`<tr>
      <td>${item.nome}</td>
      <td>
      <img src="${item.imgUrl}" class="img-fluid" />
      </td>
      <td>${item.descricao}</td>
      <td>
      <button class="btn btn-secondary m-1">editar</button>
      <button class="btn btn-danger m-1">excluir</button>
      </td>
      </tr>`);
    });
  }
}
populaTabela();
