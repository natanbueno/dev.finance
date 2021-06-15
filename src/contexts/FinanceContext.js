import { createContext, useState } from 'react';
import { formatAmount, formatDate } from '../utils/formatUtils';

export const FinanceContext = createContext({});

export function FinanceProvider(props) {
    
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("dev.finances:transactions")) || []);
    const [income      , setIncome      ] = useState(getTotalRendimentos(transactions));
    const [expenses    , setExpenses    ] = useState(getTotalDespesas   (transactions));
    const [total       , setTotal       ] = useState(getTotalGeral      (transactions) );
    const [operation   , setOperation   ] = useState("none");


    function gerarBalanco(transactions) {
        let vRendimentos = getTotalRendimentos(transactions);
        let vDespesas    = getTotalDespesas(transactions);
        let vTotal       = getTotalGeral(transactions);
        
        setIncome(vRendimentos);
        setExpenses(vDespesas);
        setTotal(vTotal);
    }

    function saveStorage(newTransactions){
        localStorage.setItem("dev.finances:transactions", JSON.stringify(newTransactions))
    }

    function getTotalRendimentos(transactions) {
        let vIncome = 0;

        transactions.forEach(transaction => {
            if( transaction.amount > 0 ) {
                vIncome += transaction.amount;
            }
        })

        return vIncome;
    }

    function getTotalDespesas(transactions) {
        let vExpenses = 0;
        
        transactions.forEach(transaction => {
            if( transaction.amount < 0 ) {
                vExpenses += transaction.amount;
            }
        })

        return vExpenses;
    }

    function getTotalGeral(transactions) {
        let vtotal    = 0;
        let vIncomes  = getTotalRendimentos(transactions);
        let vExpenses = getTotalDespesas   (transactions);

        vtotal = vIncomes + vExpenses;

        return vtotal;
    }

    function addTransaction(transaction) {
      
        let descricao = transaction.description || "";
        let valor     = transaction.amount      || "";
        let data      = transaction.date        || "";

        if( descricao.trim() === "" || valor === "" || data === "" ) {
            throw new Error("Por favor, preencha todos os campos");
        }
        else {
             // Formatando os valores
            valor = formatAmount(valor)
            data  = formatDate(data)       
            
            let vTransactions = transactions;
            vTransactions.push(
                {
                    description: descricao,
                    amount: valor,
                    date: data
                }
            );

            
            setTransactions(vTransactions);
            saveStorage    (vTransactions);
            gerarBalanco   (vTransactions);
            setOperation("none");
        }
    }

    function removeTransaction(index) {

        let count = 0;
        let NewTransactions = [];

        transactions.forEach(transaction => {
            if (count !== index) {
                NewTransactions.push({
                    description: transaction.description, 
                    amount: transaction.amount,
                    date: transaction.date
                });   
            }
            count = count + 1;
        });
       
        setTransactions(NewTransactions);    
        saveStorage    (NewTransactions);
        gerarBalanco   (NewTransactions);     
    }

    return(
        <FinanceContext.Provider value={{ 
            transactions,
            income,
            expenses,
            total,
            removeTransaction,
            operation,
            setOperation,
            addTransaction
        }}>
            {props.children}
        </FinanceContext.Provider>
    )
}
