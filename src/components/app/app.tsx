import { Main } from '../../pages/main';
import { Header } from '../header';


type AppOfferProps = {
  offersCount: number;
}

export function App ({offersCount}: AppOfferProps): JSX.Element {
  return (
    <>
      <Header />
      <Main
        offersCount={offersCount}
      />
    </>
  );
}
