import 'bootstrap';
import '/style.css';

const GenerateList = () => {
  //write your code here
  const pronoun = ['this', 'my', 'the', 'that'];
  const adj = ['great', 'big', 'small', 'huge'];
  const noun = ['jogger', 'racoon', 'murderer'];
  const domain = ['.com', '.net', '.info', '.org', '.biz', '.edu']
  const list = pronoun.flatMap(pronoun =>
    adj.flatMap(adj =>
      noun.flatMap(noun =>
        domain.map(domain => `${pronoun}${adj}${noun}${domain}`)
      )
    )
  )
  return list
};
const SelectedList = (id) => {
  const DomList = GenerateList();
  const resultado = document.getElementById('list');
  document.getElementById('list').innerHTML = ""
  const filtrados = DomList.filter(item => item.includes(`.${id}`));
  if (filtrados.length > 0) {
    resultado.innerHTML = `
      <h3>Dominios acabados en ${id}:</h3>
      <ul class="overflow-y-scroll" id="listado">
        ${filtrados.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    document.getElementById("list").classList.add("border","border-secondary","rounded-3","border-3");
  } else {
    resultado.innerHTML = `<p>No se encontraron resultados para <strong>${id}</strong>.</p>`;
  }
}
const Opciones = document.querySelectorAll('.btn');
Opciones.forEach((opc) => {
  opc.addEventListener("click", (event) => {
    let id = event.target.id;
    document.getElementById("list").style.display = "block"
    SelectedList(id)
  });
});

    document.getElementById("list").style.display = "none"