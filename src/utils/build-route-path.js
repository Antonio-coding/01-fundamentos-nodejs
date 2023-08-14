// /users/:id

export function buildRoutePath(path) {
  const routeParamentersRegex = /:([a-zA-Z]+)/g;

  console.log(Array.from(path.matchAll(routeParamentersRegex)));
}
