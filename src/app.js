import { navbar } from './components/navbar.js'
import { getRoutes } from './routes/index.js'
import { viewCategories } from './views/categories.js'
import { home } from './views/home.js'

export const app = () => {
  navbar()
  viewCategories()
  home()
  getRoutes()

  return (
  `<div class="container mx-auto mt-9">
    <nav id="navbar" class="flex"></nav>
    <div id="content" class="my-5"></div>
   </div>`
  )
}