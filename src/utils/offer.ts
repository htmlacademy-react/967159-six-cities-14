export function getRatingWidth (rating: number): string {
  const FIFTH_PART = 20;
  return `${Math.round(rating) * FIFTH_PART}%`;
}
