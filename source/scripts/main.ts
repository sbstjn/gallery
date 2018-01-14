declare var images: string[]
declare var position: number

const CONFIG_THRESHOLD = 100
const IMAGES_RELOAD = 10

function checkForLoading() {
  if (position >= images.length) {
    return
  }

  const maxHeight = document.documentElement.scrollHeight
  const curHeight = window.scrollY + window.innerHeight

  if (Math.abs(maxHeight - curHeight) <= CONFIG_THRESHOLD) {
    const next = images.slice(position, position + IMAGES_RELOAD)
    const node = document.querySelector('#gallery')

    if (next.length > 0 && node) {
      node.innerHTML += next.map(image => `<figure><img src="${image}" /></figure>`).join('')
      position += IMAGES_RELOAD
    }
  }
  
  window.requestAnimationFrame(checkForLoading)
}

document.body.onload = () => window.requestAnimationFrame(checkForLoading)

