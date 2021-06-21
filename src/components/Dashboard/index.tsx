import { memo } from "react";
import { Summary } from "../Summary";
import TransactionTable from "../TransactionTable";
import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}

export default memo(Dashboard);