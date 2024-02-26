import { card } from '../components/card.js'
import { getOneCategory } from '../services/index.js'

export const viewCategories = () => {
  PC.pages.category = {}
  PC.pages.category.renderHtml = async function (params) {
    const elements = await getOneCategory(params.category)

    let html = ''
    elements.map(item => {
      html += card(item)
    })

    return `<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">${html}</div>`
  }
}