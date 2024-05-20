import axios from "@/lib/axios";

export function contactUs(formData: any) {
  return axios.post("/contact-us/create", formData);
}
