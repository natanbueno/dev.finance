import styles from './styles.module.scss';

export function Card(props) {

    return(
        <>
            { 
                props.card_destaque ? (
                    <div className={`${styles.card} ${styles.total} `}>
                        <h3>
                            <span>{props.title}</span>
                            <img src={props.img} alt=""/>
                        </h3>
                        <p>{props.description}</p>
                    </div>
                ) : 
                ( 
                    <div className={styles.card}>
                        <h3>
                            <span>{props.title}</span>
                            <img src={props.img} alt=""/>
                        </h3>
                        <p>{props.description}</p>
                    </div>
                ) 
            }
        </>
    );
}


