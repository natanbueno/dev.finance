import styleTable from '../../components/DataTable/styles.module.scss';
import styles     from './styles.module.scss';

import { useContext      } from "react";
import { formatCurrency  } from "../../utils/formatUtils";
import { FinanceContext  } from "../../contexts/FinanceContext";

export function ListTransaction() {

    const {transactions, removeTransaction} = useContext(FinanceContext);
  
    function getTableDataAmount(amount) {
        if (amount > 0) {
            return <td className={styles.income}>{formatCurrency(amount)}</td>
        } else {
            return <td className={styles.expense}>{formatCurrency(amount)}</td> 
        }
    }

    return (
        <table className={styleTable.dataTable}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transactions.indexOf(transaction)}>
                        <td className={styles.description}>{transaction.description}</td>
                        {getTableDataAmount(transaction.amount)}
                        <td>{transaction.date}</td>
                        <td>
                            <img src="./icons/minus.svg" alt="Remover transação" onClick={ ()=>{ removeTransaction(transactions.indexOf(transaction))}}/>
                        </td>
                    </tr>
                ))}
        </tbody>

        </table>
    )
}