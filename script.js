
let callCounter = 0

async function showCatImage(){

  if(callCounter < 6){

  const response = await fetch('https://api.thecatapi.com/v1/images/search')
  const catArray = await response.json()
  const catImg = catArray[0];

  const sectionCat = document.querySelector('#sectionCat')
  const createImg = document.createElement('img')
  createImg.src = catImg.url
  createImg.alt = catImg.id

  sectionCat.append(createImg)

  callCounter++

  } else {
    alert('Limite de fotos atingido!')
  }
  

}