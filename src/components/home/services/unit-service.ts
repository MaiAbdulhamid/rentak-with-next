import axios from "axios";

export function getUnits() {
  return axios.get(`/api/units`);
}
