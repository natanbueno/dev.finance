import styles from './styles.module.scss';

export function MyContainer (props) {
    return(
        <main className={styles.container}>    
            {props.children}
        </main>
    );
}