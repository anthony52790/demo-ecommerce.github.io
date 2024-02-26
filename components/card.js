export const card = ({
  id,
  title,
  description,
  image,
  price
}) => {

  return `<div class="card group relative cursor-pointer" data-type="product" id=${id}>
    <div class="image aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img src=${image} loading="lazy" class="h-full w-full object-center lg:h-full lg:w-full" />
    </div>
    <div class="description mt-4 flex flex-col">
      <h1 class="text-sm text-gray-700 line-clamp-1">${title}</h1>
      <p class="mt-1 text-sm text-gray-500 line-clamp-2">${description}</p>
      <span class="text-sm font-medium text-gray-900">$ ${price}</span>
    </div>
  </div>`
}