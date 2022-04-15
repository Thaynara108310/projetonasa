
document.getElementById('formulario').addEventListener('submit', projetoNasa)

function projetoNasa(e){
  e.preventDefault() // e.preventDefault para não enviar o formulario.
  let data = document.querySelector('input').value// vai resgatar o valor, por meio do value.
       console.log(data) //vai receber o valor.
  fetch(`https://api.nasa.gov/planetary/apod?date=${data}&hd=true&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)// O primeiro parâmetro é a url.
    .then(res => res.json()) //.then para pegar o resultado quando for resolvida.
    .then(response => { // response é um objeto que contém algumas informações que o fetch trouxe.
      console.log(response) 
        document.querySelector('h2').innerText=response.title;
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }
    document.getElementById('descrição').innerText= response.explanation;
    })
}
