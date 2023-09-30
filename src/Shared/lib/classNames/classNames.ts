type Mods = Record<string, boolean>

export function classNames(cls?: string, mods?: Mods, additional?: string[]) {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(' ')
}
