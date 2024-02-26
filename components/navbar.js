import { getAllCategories } from '../services/index.js'

export const navbar = async () => {
  const data = await getAllCategories()

  let html = ''
  if (data.length) {
    for (let i = 0; i < data.length; i++) {
      html += `<li>
        <a class="p-3 block capitalize" data-type="category" href="/${encodeURIComponent(data[i])}">${data[i]}</a>
      </li>`
    }
  }

  const ul = `<ul class="flex shadow rounded">${html}</ul>`
  document.getElementById('navbar').innerHTML = ul
}