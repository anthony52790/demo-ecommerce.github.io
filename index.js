import { app } from './app.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').innerHTML = app()
})