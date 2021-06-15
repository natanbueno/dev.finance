import styles from './styles.module.scss';

import { Head } from "./Head";
import { Row  } from "./Row";

export function DataTable({data, head}) {
    
   const keys = Object.keys(data[0]) || {};
  
    return (
        <table className={styles.dataTable}>
            <thead>
                <Head keys={keys} head={head}/>  
            </thead>
            <tbody>
                {data.map(record => <Row values={record}/>)}
            </tbody>      
        </table>
    );
}
