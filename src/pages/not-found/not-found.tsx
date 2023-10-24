import { Link } from 'react-router-dom';
import styles from './not-found.module.css';
import { AppRoute } from '../../const';

export function NotFound (): JSX.Element {
  return (
    <div className={`page page--gray ${styles.notFound} `}>
      <div className={styles.linkContainer}>
        <div className="container">
          <Link
            className="header__logo-link"
            to={AppRoute.Root}
          >
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={81}
              height={41}
            />
          </Link>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div>
          <p className={styles.text}>404 Not Fount</p>
          <Link className={styles.link} to="/">Вернуться на главную страницу</Link>
        </div>
      </div>
    </div>
  );
}
