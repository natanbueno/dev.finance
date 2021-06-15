import { Form       } from "../../components/Form";
import { InputGroup } from "../../components/Input/InputGroup";
import { Button     } from "../../components/Button";
import { useContext, useState } from "react";
import { FinanceContext } from "../../contexts/FinanceContext";

export function FormTransaction() {

    const [descricao, setDescricao] = useState('');
    const [valor    , setValor    ] = useState('');
    const [data     , setData     ] = useState('');
    
    const {setOperation, addTransaction} = useContext(FinanceContext);

    function saveTransactionClick(e){
        e.preventDefault();  
        
        try {
            
            addTransaction(
                {
                    description: descricao,
                    amount: valor,
                    date: data
                }
            );
        } catch (error) {
            alert(error)
        }
    }

    function cancelOperation(e) {
        e.preventDefault();
        setOperation("none");
    }

    return (
        <Form title="Nova Transação">
            <InputGroup
                type="text"
                name="descricao"
                placeholder="Descrição"
                onChange={e => setDescricao(e.target.value)}
            />

            <InputGroup
                type="number"
                name="amount"
                placeholder="0,00"
                onChange={e => setValor(e.target.value)}
                help="Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais"
            />

            <InputGroup
                type="date"
                id="date"
                name="date"
                onChange={e => setData(e.target.value)}
            />

            <InputGroup>
                <Button
                    typeButton="cancel"
                    title="Cancelar"
                    onClick = {cancelOperation}
                />
                <Button
                    typeButton="confirm"
                    title     ="Salvar"
                    onClick   ={saveTransactionClick}
                />
            </InputGroup>

        </Form>
    );
}