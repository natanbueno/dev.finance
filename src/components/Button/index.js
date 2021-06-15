import styles from "./styles.module.scss";

export function Button (props) {
    
    const hasSmallButton  = props.typeButton === "small";
    const hasButtonCancel = props.typeButton === "cancel";
    const hasButtonNew    = props.typeButton === "confirm";
    
    return (
        <>
            { 
                hasSmallButton ? (
                    <a className={styles.buttonSmall} onClick={props.onClick} >{props.title}</a>
                ) : 
                ( 
                    <>  
                        { hasButtonNew    && <button className={styles.buttonNew}     onClick={props.onClick}> {props.title}</button> } 
                        { hasButtonCancel && <button className={styles.buttonCancel}  onClick={props.onClick}> {props.title}</button> } 
                    </>
                    
                ) 
            }
        </>
    )
    
    
}