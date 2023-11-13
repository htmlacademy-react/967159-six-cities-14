export function capitalize (str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function addPluralEnding (count: number): string {
  return count === 1 ? '' : 's';
}

export function formateDate (date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
