import styles from './styles.module.scss';

export function Form(props) {
    return(
        <div className={styles.form}>
            <h2>{props.title}</h2>
            <form>         
                {props.children}
            </form>
        </div>
    )
}