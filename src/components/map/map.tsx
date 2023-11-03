
type TMapProps = {
  activePin: string | null;
}

export function Map ({ activePin }: TMapProps): JSX.Element {
  return (
    <>
      <section className="cities__map map" />
      <span className="visually-hidden">{activePin}</span>
    </>
  );
}

//TODO: убрать <span className="visually-hidden">{activePin}</span>
