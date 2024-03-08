export const getRoutes = () => {
  document.querySelector('body').addEventListener('click', function (ev) {
    ev.preventDefault()
    if (ev.target.tagName.toLowerCase() === 'a') {
      route(ev)
    }
  }, false)

  const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({ id: event.target.dataset.type }, "", event.target.href);
    handleLocation();
  };

  const handleLocation = async () => {
    const path = window.location.pathname;
    const type = window.history?.state?.id || (path === '/' || path.includes('github') ? 'home' : 'notfound')
    const pageName = path.replace('/', '')
    const page = PC.pages[type]
    let loader

    switch (type) {
      case 'category':
        loader = page.renderHtml({ category: pageName })
        break;

      case 'home':
        loader = page.renderHtml()
        break;

      case 'notfound':
        loader = page.renderHtml()
        break;

      default:
        break;
    }

    loader.then((data) => {
      document.getElementById("content").innerHTML = data
    })
  };

  window.onpopstate = handleLocation;
  window.route = route;

  window.addEventListener('popstate', e => {
    console.log(e)
  })

  handleLocation();
}