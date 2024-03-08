import { app } from './src/app.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').innerHTML = app()
})