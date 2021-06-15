
import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <img src="./icons/logo.svg" alt="Logo Dev Finance"/>
        </header>
    );
}