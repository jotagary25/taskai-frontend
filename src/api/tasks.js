import { API_URL } from "../config/config";

export async function get_tasks_api(token) {  
  const res = await fetch(API_URL + "/tasks", {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`,
    }
  });
  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    return false
  }
}