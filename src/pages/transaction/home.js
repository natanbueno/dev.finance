
import { useContext} from "react";

import { Header          } from "../../components/Header";
import { MyContainer     } from "../../components/Container";
import { Balance         } from "../../components/Balance"
import { Footer          } from "../../components/Footer";
import { Card            } from "../../components/Card";
import { Transaction     } from "../../components/Transaction";
import { Button          } from "../../components/Button";
import { ModalOverlay    } from "../../components/ModalOverlay";
import { FinanceContext  } from "../../contexts/FinanceContext";
import { formatCurrency  } from "../../utils/formatUtils";
import { FormTransaction } from "./form";
import { ListTransaction } from "./list";


export function HomeTransaction() {
    const {income, expenses, total, operation, setOperation} = useContext(FinanceContext);

    function newTransaction(){
        setOperation("new");    
    }

    return (
        <>
            <Header />
            <MyContainer>

                <Balance>
                    <Card
                        title="Entradas"
                        img="./icons/income.svg"
                        description={formatCurrency(income)}
                    />
                    <Card
                        title="Saídas"
                        img="./icons/expense.svg"
                        description={formatCurrency(expenses)}
                    />
                    <Card
                        title="Total"
                        img="./icons/total.svg"
                        description={formatCurrency(total)}
                        card_destaque={true}
                    />
                </Balance>

                <Transaction>
                    <Button
                        title="+ Nova Transação"
                        typeButton="small"
                        onClick={newTransaction}
                    />
                    <ListTransaction />
                </Transaction>

            </MyContainer>

            <ModalOverlay active={operation === "new"}>
               <FormTransaction/>
            </ModalOverlay>
            <Footer />
        </>
    )
}