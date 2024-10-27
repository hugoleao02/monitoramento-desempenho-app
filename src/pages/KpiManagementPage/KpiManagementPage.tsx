// src/pages/KpiManagementPage.tsx
import React from "react";
import KpiFormContainer from "../../components/KPI/KpiFormContainer";

const KpiManagementPage: React.FC = () => {
  return (
    <div>
      <h1>Gerenciar KPIs</h1>
      <KpiFormContainer />
    </div>
  );
};

export default KpiManagementPage;
