// src/services/KPIService.ts
import api from "./api";

interface IKPI {
  id?: string;
  name: string;
  description: string;
  formula: string; // Ex: "150 / 200 * 100"
  target: number;
  unit: string; // Ex: "percent"
  category: string; // Ex: "MARKETING"
}

class KPIService {
  static async createKPI(kpiData: IKPI) {
    const response = await api.post("/kpis", kpiData);
    return response.data;
  }

  static async getKPIs() {
    const response = await api.get("/kpis");
    return response.data;
  }

  static async getKPIById(id: string) {
    const response = await api.get(`/kpis/${id}`);
    return response.data;
  }

  static async updateKPI(id: string, kpiData: IKPI) {
    const response = await api.put(`/kpis/${id}`, kpiData);
    return response.data;
  }

  static async deleteKPI(id: string) {
    await api.delete(`/kpis/${id}`);
  }
}

export default KPIService;
