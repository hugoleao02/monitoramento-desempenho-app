import React from "react";
import {
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface KpiFormProps {
  name: string;
  description: string;
  calculationFormula: string;
  target: number;
  measurementUnit: string;
  category: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  categories: string[];
}

const KpiForm: React.FC<KpiFormProps> = ({
  name,
  description,
  calculationFormula,
  target,
  measurementUnit,
  category,
  onChange,
  onSubmit,
  categories,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Nome"
        name="name"
        value={name}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        label="Descrição"
        name="description"
        value={description}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        label="Fórmula de Cálculo"
        name="calculationFormula"
        value={calculationFormula}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        label="Alvo"
        type="number"
        name="target"
        value={target || ""}
        onChange={(e) => {
          const value = e.target.value;
          onChange({
            target: { name: "target", value: value ? Number(value) : 0 },
          } as unknown as React.ChangeEvent<HTMLInputElement>);
        }}
        required
        fullWidth
      />
      <TextField
        label="Unidade de Medida"
        name="measurementUnit"
        value={measurementUnit}
        onChange={onChange}
        required
        fullWidth
      />
      <FormControl fullWidth required>
        <InputLabel>Categoria</InputLabel>
        <Select name="category" value={category} onChange={onChange}>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar KPI
      </Button>
    </form>
  );
};

export default KpiForm;
