import { Main } from '../../pages/main';


type AppOfferProps = {
  offersCount: number;
}

export function App ({offersCount}: AppOfferProps): JSX.Element {
  return (
    <Main
      offersCount={offersCount}
    />
  );
}
