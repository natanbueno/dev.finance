import styles from './styles.module.scss';

export function ModalOverlay(props) {
    
    return(
        <>
            { 
                props.active ? (
                    <div className= {styles.modalOverlay}>
                        <div className={styles.modal}>
                            {props.children}
                        </div>
                    </div> 
                ) : 
                ( 
                    <></>
                ) 
            }
        </>

                   
    );
}


