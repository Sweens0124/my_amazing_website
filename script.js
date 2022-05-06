const h2 = document.createElement("h2")
h2.textContent = "A little code about me!"

document.querySelector("body").appendChild(h2)

function show () {
  document.getElementById('image')
    .style.display = "block"

  document.getElementById('btnID')
    .style.display = "none"

}