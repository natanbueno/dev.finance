import styles       from './styles.module.scss';
import stylesTitles from '../../styles/titles.module.scss';

export function Balance (props) {
    return(
        <section className={styles.balance}>
            <h2 className={stylesTitles.sr_only}>
                Balanço
            </h2>
            {props.children}
        </section>
    )
}