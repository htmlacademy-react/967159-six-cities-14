export function capitalize (str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function addPluralEnding (count: number): string {
  return count === 1 ? '' : 's';
}
