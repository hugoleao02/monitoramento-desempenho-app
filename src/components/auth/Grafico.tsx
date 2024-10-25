import { Box } from "@mui/material";

const Grafico = () => {
  return (
    <Box className="flex justify-around items-end w-full h-full">
      <Box className="h-3/5 w-1/12 bg-indigo-600 rounded-lg relative" />
      <Box className="h-4/5 w-1/12 bg-red-600 rounded-lg relative" />
      <Box className="h-2/5 w-1/12 bg-green-600 rounded-lg relative" />
    </Box>
  );
};

export default Grafico;
