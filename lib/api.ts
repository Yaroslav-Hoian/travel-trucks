// import { RV, RVFilterParams } from "@/types/RV";
// import axios from "axios";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// interface fetchRV {
//   total: number;
//   items: RV[];
// }

// export async function fetchRV(filter: RVFilterParams): Promise<fetchRV> {
//   const response = await axios.get<fetchRV>("", { params: filter });
//   return response.data;
// }

// export async function fetchRVById(id: string): Promise<RV> {
//   const res = await axios.get<RV>("" + "/" + id);
//   return res.data;
// }

import { campers } from "@/data";
import { RV, RVFilterParams } from "@/types/RV";

interface FetchRVResponse {
  total: number;
  items: RV[];
}

type EquipmentKey =
  | "AC"
  | "bathroom"
  | "kitchen"
  | "TV"
  | "radio"
  | "refrigerator"
  | "microwave";

export async function fetchRV(
  filters: RVFilterParams,
): Promise<FetchRVResponse> {
  let result = [...campers];

  // 🔹 location
  if (filters.location) {
    result = result.filter((rv) =>
      rv.location.toLowerCase().includes(filters.location!.toLowerCase()),
    );
  }

  // 🔹 form (vehicle type)
  if (filters.form) {
    result = result.filter((rv) => rv.form === filters.form);
  }

  // 🔹 equipment filters (тільки якщо true)
  const equipmentKeys: EquipmentKey[] = [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
  ];

  equipmentKeys.forEach((key) => {
    if (filters[key]) {
      result = result.filter((rv) => rv[key] === true);
    }
  });

  const page = filters.page ?? 1;
  const limit = filters.limit ?? 4;
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    total: result.length,
    items: result.slice(start, end),
  };
}

export async function fetchRVById(id: string): Promise<RV> {
  const rv = campers.find((item) => item.id === id);

  if (!rv) {
    throw new Error("RV not found");
  }

  return rv;
}
