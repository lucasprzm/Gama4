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
// Função para apagar um curso e depois refazer a tabela.
function ApagaRegistro(id) {
  let _confirm = confirm("Deseja realmente excluir este registro?");

  if (_confirm) {
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].id == id) {
        dados.splice(i, 1);
      }
    }

    populaTabela();
  }
}
// Função para editar o curso.
function EditaRegistro(id) {
  $("#modalRegistro").modal("show");

  dados.forEach(function (item) {
    if (item.id == id) {
      $("#hdID").val(item.id);
      $("#txtNome").val(item.nome);
      $("#img").val(item.imagem);
      $("#txtDescricao").val(item.descricao);
    }
  });
}
// Função para montar a tabela de cursos.
function populaTabela() {
  if (Array.isArray(dados)) {
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
      <button class="btn btn-secondary m-1" onclick="EditaRegistro(${item.id})">editar</button>
      <button class="btn btn-danger m-1" onclick="ApagaRegistro(${item.id})">excluir</button>
      </td>
      </tr>`);
    });
  }
}
// Criação da variável imagem que será usada no objeto registro para novos cursos.
let imagem = "";
// Função que é chamada ao escolher uma imagem no modal, atribuí o valor de imagem como reader.result que gera um código base64 da imagem.
function imagemURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    imagem = reader.result;
  };
  reader.readAsDataURL(file);
}
// O $() antes dessa função permite chamar a função a função anônima com o jQuery.
$(function () {
  if (dados) {
    populaTabela();
  }

  $("#btnSalvar").click(function () {
    //Evento click do botão salvar
    let _id = $("#hdID").val();
    let nome = $("#txtNome").val();
    let descricao = $("#txtDescricao").val();
    // Criando o objeto registro e suas propriedades
    let registro = {};
    registro.id = dados.length + 1;
    registro.nome = nome;
    registro.descricao = descricao;
    registro.imgUrl = imagem;

    if (!_id || _id == "0") {
      // Adicionando o novo objeto no array de cursos
      registro.id = dados.length + 1;
      dados.push(registro);
    } else {
      dados.forEach(function (item) {
        if (item.id == _id) {
          item.nome = nome;
          item.imgUrl = imagem;
          item.descricao = descricao;
        }
      });
    }
    // Alerta de registro salvo com sucesso
    alert("Registro salvo com sucesso");
    // Escondendo o modal utilizando jQuery
    $("#modalRegistro").modal("hide");
    //Limpeza dos campos
    $("#txtNome").val("");
    $("#img").val("");
    $("#txtDescricao").val("");
    // Chamando a função novamente para re-exibir os cursos com o novo curso adicionado.
    populaTabela();
  });
});
