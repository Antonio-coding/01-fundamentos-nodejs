// /users/:id

export function buildRoutePath(path) {
  const routeParamentersRegex = /:([a-zA-Z]+)/g;

  const pathWithParams=  path.replaceAll(routeParamentersRegex, ' ([a-z0-9\-_]+)')

  console.log(pathWithParams)

  const test = /\/users\/([a-z0-9-_]+)/

  const pathRegex  = new RegExp ('^${pathWithParams}')
}
