// const figuras = ['♥︎','♠︎','♣︎'].sort( (a,b) => Math.floor(Math.random() - .5) )
const figuras = ['🐶','🦊','🐹','🦁','🐵','🐮','🐼','🐷'].sort( (a,b) => Math.floor(Math.random() - .5) )

// const contenedor = document.getElementById('app')
const contenedor = document.querySelector('#app')
const elegida = figuras[Math.floor(Math.random() * figuras.length)]

const span = document.querySelector('span')
span.textContent = elegida

function ver(id) {
  const cartaSeleccionada = document.getElementById(id)
  cartaSeleccionada.classList.remove('reverso')
  cartaSeleccionada.textContent = id
  if( id === elegida) {
    cartaSeleccionada.classList.add('rojo')
    contenedor.innerHTML += `<div id='gameover'><span>Ganaste</span></div>`
    const gameover = document.getElementById('gameover')
    const fireworks = new Fireworks(gameover,{
      delay:{min:10, max:15},
      trace: 5,
      speed:0.5,
      particles: 200,
      sound:{
        enable:true,
        files:['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
        volume: {min: 1, max: 2}
      }
    })

    fireworks.start();
  } else {
    contenedor.innerHTML += `<div id='gameover'>Perdiste</div>`
  }
  const gameover = document.querySelector('#gameover')
  gameover.addEventListener('click', () => {
    gameover.setAttribute('hidden', true)
    location.reload()
  })
}

figuras.forEach( (item) => {
  contenedor.innerHTML += `<h3 id='${item}' class='reverso' onclick='ver("${item}")'></h3>`
})