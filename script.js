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

function EditaRegistro(id) {
  $("#modalRegistro").modal("show")

  dados.forEach(function(item) {
    if (item.id == id) {
      $("#hdID").val(item.id)
      $("#txtNome").val(item.nome)
      $("#img").val(item.imagem)
      $("#txtDescricao").val(item.descricao)
    }
  })
}

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
      <button class="btn btn-secondary m-1" onclick="EditaRegistro(${item.id})">editar</button>
      <button class="btn btn-danger m-1" onclick="ApagaRegistro(${item.id})">excluir</button>
      </td>
      </tr>`);
    });
  }
}

$(function () {
  if (dados) {
    populaTabela();
  }

  $("#btnSalvar").click(function () {
    //Evento click do botão salvar

    let _id = $("#hdID").val();
    let nome = $("#txtNome").val();
    let imagem = $("#img").val();
    let descricao = $("#txtDescricao").val();
    
    let registro = {};

    registro.nome = nome;
    registro.descricao = descricao;
    registro.imgUrl = imagem;

    if(!_id || _id == "0") {
      registro.id = dados.length + 1;
      dados.push(registro);      
    }
    else {
      dados.forEach(function(item) {
        if (item.id == _id) {
          item.nome = nome
          item.imagem = imagem
          item.descricao = descricao
        }
      })
    }

    // teste
    console.log(registro);

    alert("Registro salvo com sucesso");
    $("#modalRegistro").modal("hide");

    //Limpeza dos campos
    $("#txtNome").val("");
    $("#img").val("");
    $("#txtDescricao").val("");

    populaTabela();
  });
});




