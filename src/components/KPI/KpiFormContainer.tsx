import React, { useState } from "react";
import KpiForm from "./KpiForm";
import KPIService from "../../services/KPIService";
import { SelectChangeEvent } from "@mui/material";
import { IKPI } from "../../interfaces/KPI";

const KpiFormContainer: React.FC = () => {
  const [formData, setFormData] = useState<IKPI>({
    name: "",
    description: "",
    calculationFormula: "",
    target: 0,
    measurementUnit: "",
    category: "",
    formula: "",
    unit: "",
  });

  const categories = ["Financeiro", "Operacional", "Estratégico"];

  const handleChange = (
    e:
      | SelectChangeEvent<string>
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await KPIService.createKPI(formData);
      setFormData({
        name: "",
        description: "",
        calculationFormula: "",
        target: 0,
        measurementUnit: "",
        category: "",
        formula: "",
        unit: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar KPI:", error);
    }
  };

  return (
    <KpiForm
      name={formData.name}
      description={formData.description}
      calculationFormula={formData.calculationFormula}
      target={formData.target}
      measurementUnit={formData.measurementUnit}
      category={formData.category}
      onChange={handleChange}
      onSubmit={handleSubmit}
      categories={categories}
    />
  );
};

export default KpiFormContainer;
