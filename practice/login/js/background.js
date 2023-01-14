const image = ["0.jpeg", "1.jpeg", "2.jpeg"]
const randomimages = image[Math.floor(Math.random() * image.length)]
const bgimg = document.createElement("img")

bgimg.src = `img/${randomimages}`

document.body.appendChild(bgimg)