const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "MySQL",
  "React Native",
];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoveCurso = document.getElementById("btnRemoverCurso");

const btnAdicionarNovoCursoAntes = document.getElementById(
  "btnAdicionarNovoCursoAntes"
);
const btnAdicionarNovoCursoDepois = document.getElementById(
  "btnAdicionarNovoCursoDepois"
);
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  })
}

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener('click', (event) => {
    tirarSelecao()
    event.target.classList.toggle('selecionado')
  })

  return novoElemento;
};

cursos.map((curso) => {
  const novoElemento = criarNovoCurso(curso);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

const cursoSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
  return cursosSelecionados[0];
};

btnCursoSelecionado.addEventListener("click", (event) => {
  try {
    alert("Curso selecionado: " + cursoSelecionado().innerHTML);
  } catch (err) {
    alert("Selecione um curso");
  }
});

btnRemoveCurso.addEventListener("click", (event) => {
  const cs = cursoSelecionado();
  if (cs != undefined) {
    cs.remove();
  } else {
    alert("Selecione um curso");
  }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (event) => {
  try {
    if (nomeCurso.value) {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
    } else {
      alert("Digite o nome do curso");
    }
  } catch (err) {
    alert("Selecione um curso");
  }
});

btnAdicionarNovoCursoDepois.addEventListener("click", (event) => {
  try {
    if (nomeCurso.value) {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
    } else {
      alert("Digite o nome do curso");
    }
  } catch (err) {
    alert("Selecione um curso");
  }
});
