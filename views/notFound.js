export const notFound = () => {
  PC.pages.notfound = {}
  PC.pages.notfound.renderHtml = function() {
    return Promise.resolve(
      `<div>NOT FOUND</div>`
    )
  }
}