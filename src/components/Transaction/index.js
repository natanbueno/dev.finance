import styles       from './styles.module.scss';
import stylesTitles from '../../styles/titles.module.scss';

export function Transaction (props) {
    return(
        <section className={styles.transaction}>
            <h2 className={stylesTitles.sr_only}>
                Transações
            </h2>
            {props.children}
        </section>
    )
}