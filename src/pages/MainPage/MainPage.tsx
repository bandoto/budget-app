import React from "react";
import { Container } from "../../UI/Container/Container";

import "./MainPage.scss";
import { BudgetValue } from "../../modules/BudgetForm";
import { BudgetList } from "../../modules/BudgetForm";

const MainPage: React.FC = () => {
  return (
    <section className="budget">
      <Container>
        <div className="budget__wrapper">
          <BudgetValue />
          <BudgetList />
        </div>
      </Container>
    </section>
  );
};

export default MainPage;
