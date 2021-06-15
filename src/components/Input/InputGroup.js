import styles    from './styles.module.scss';
import styTitles from '../../styles/titles.module.scss';

import { useEffect, useState } from 'react';

export function InputGroup (props){
       
    const [isDescription, setDescription] = useState(false);
    const [isType       , setIsType     ] = useState(false);

    useEffect(()=>{
        let description = props.help || "";
        let type        = props.type || "";

        if (description !== "") {
            setDescription(true);
        }

        if (type !== "") {
            setIsType(true);
        }
    },[]);
    
    return(
        <>
            { isType ? (
                <div className={styles.inputGroup}>
                    <label className={styTitles.sr_only}>
                        {props.labelTitle}
                    </label>
                    <input 
                        type        = {props.type} 
                        id          = {props.id} 
                        name        = {props.name}
                        placeholder = {props.placeholder}
                        onChange    = {props.onChange   }
                    />
                    { isDescription && <small className={styles.help}>{props.help}</small> }
                </div>
            ) : (   
                <div className={`${styles.inputGroup} ${styles.actions}`}>
                    {props.children}
                </div>
            )}
        </>
    )
}

