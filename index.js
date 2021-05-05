const d = document;

d.addEventListener("click", (e) => {
  if(e.target.matches('.arrow-btn')){
    if(!e.target.matches('.active-arrow')){
      e.target.classList.add('active-arrow');
      e.target.parentElement.querySelector("h2").classList.add('active-title');
      d.getElementById(`${e.target.id}P`).classList.remove('desactive-paragraph');
    }else{
      e.target.classList.remove('active-arrow');
      e.target.parentElement.querySelector("h2").classList.remove('active-title');
      d.getElementById(`${e.target.id}P`).classList.add('desactive-paragraph');
    }
  }
});