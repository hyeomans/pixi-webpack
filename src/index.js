import './index.css'
import office from './office.png'
import { Application, Texture, Sprite } from 'pixi.js'

const view = document.getElementById('mycanvas')

const app = new Application({
  view,
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: true
})

const texture = Texture.from(office)
const img = new Sprite(texture)

img.x = app.renderer.width / 2
img.y = app.renderer.height / 2

img.anchor.x = 0.5
img.anchor.y = 0.5

app.stage.addChild(img)
