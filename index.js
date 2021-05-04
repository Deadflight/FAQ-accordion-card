const d = document;

d.addEventListener("click", (e) => {
  displayParra(e);
});

function displayParra(e){
  switch (e.target.id) {
    case "invite":
      if(d.getElementById(`invite`).style.transform === "rotate(180deg)"){
        d.getElementById(`inviteP`).style.visibility = "hidden";
        d.getElementById(`inviteP`).style.opacity = "0";
        d.getElementById(`inviteP`).style.height = "0";
        d.getElementById(`invite`).style.transform = "rotate(0deg)";
        e.target.parentElement.querySelector("h2").style.color = "var(--Dark-grayish-blue)";
      }else{
        e.target.parentElement.querySelector("h2").style.color = "black";
        d.getElementById(`invite`).style.transform = "rotate(180deg)";
        d.getElementById(`inviteP`).style.visibility = "visible";
        d.getElementById(`inviteP`).style.opacity = "1";
        d.getElementById(`inviteP`).style.height = "auto";
      }

      break;

    case "upload":
      if(d.getElementById(`upload`).style.transform === "rotate(180deg)"){
        d.getElementById(`uploadP`).style.visibility = "hidden";
        d.getElementById(`uploadP`).style.opacity = "0";
        d.getElementById(`uploadP`).style.height = "0";
        d.getElementById(`upload`).style.transform = "rotate(0deg)";
        e.target.parentElement.querySelector("h2").style.color = "var(--Dark-grayish-blue)";
      }else{
        e.target.parentElement.querySelector("h2").style.color = "black";
        d.getElementById(`upload`).style.transform = "rotate(180deg)";
        d.getElementById(`uploadP`).style.visibility = "visible";
        d.getElementById(`uploadP`).style.opacity = "1";
        d.getElementById(`uploadP`).style.height = "auto";
      }

      break;
    case "password":
      if(d.getElementById(`password`).style.transform === "rotate(180deg)"){
        d.getElementById(`passwordP`).style.visibility = "hidden";
        d.getElementById(`passwordP`).style.opacity = "0";
        d.getElementById(`passwordP`).style.height = "0";
        d.getElementById(`password`).style.transform = "rotate(0deg)";
        e.target.parentElement.querySelector("h2").style.color = "var(--Dark-grayish-blue)";
      }else{
        e.target.parentElement.querySelector("h2").style.color = "black";
        d.getElementById(`password`).style.transform = "rotate(180deg)";
        d.getElementById(`passwordP`).style.visibility = "visible";
        d.getElementById(`passwordP`).style.opacity = "1";
        d.getElementById(`passwordP`).style.height = "auto";
      }

      break;
    case "subs":
      if(d.getElementById(`subs`).style.transform === "rotate(180deg)"){
        d.getElementById(`subsP`).style.visibility = "hidden";
        d.getElementById(`subsP`).style.opacity = "0";
        d.getElementById(`subsP`).style.height = "0";
        d.getElementById(`subs`).style.transform = "rotate(0deg)";
        e.target.parentElement.querySelector("h2").style.color = "var(--Dark-grayish-blue)";
      }else{
        e.target.parentElement.querySelector("h2").style.color = "black";
        d.getElementById(`subs`).style.transform = "rotate(180deg)";
        d.getElementById(`subsP`).style.visibility = "visible";
        d.getElementById(`subsP`).style.opacity = "1";
        d.getElementById(`subsP`).style.height = "auto";
      }

    break;
    case "support":
      if(d.getElementById(`support`).style.transform === "rotate(180deg)"){
        d.getElementById(`supportP`).style.visibility = "hidden";
        d.getElementById(`supportP`).style.opacity = "0";
        d.getElementById(`supportP`).style.height = "0";
        d.getElementById(`support`).style.transform = "rotate(0deg)";
        e.target.parentElement.querySelector("h2").style.color = "var(--Dark-grayish-blue)";
      }else{
        e.target.parentElement.querySelector("h2").style.color = "black";
        d.getElementById(`support`).style.transform = "rotate(180deg)";
        d.getElementById(`supportP`).style.visibility = "visible";
        d.getElementById(`supportP`).style.opacity = "1";
        d.getElementById(`supportP`).style.height = "auto";;
      }

    break;
    default:
      break;
  }
}