import './styles.scss'

let canvas = document.getElementById('app')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// canvas.style.cursor = 'none'
// initial mouse location
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

let color = 'red'

addEventListener('mousemove', e => {
  mouse.x = e.clientX
  mouse.y = e.clientY
})
addEventListener('resize', e => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

addEventListener('mousedown', e => {
  color = 'green'
  console.log(color)
})

addEventListener('mouseup', e => {
  color = 'red'
  console.log(color)
})

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = color
  ctx.fillRect(mouse.x, mouse.y, 100, 100)
}

animate()