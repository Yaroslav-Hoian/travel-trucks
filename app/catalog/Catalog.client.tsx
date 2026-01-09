"use client";

import RVList from "@/components/Catalog/CatalogGrid/RVList/RVList";
import { fetchRV } from "@/lib/api";
import { useRVDraftStore } from "@/lib/store/RVStore";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const CatalogClient = () => {
  const { rv, page, limit, filters, setRVs, addRVs, nextPage } =
    useRVDraftStore();

  const filtersKey = JSON.stringify(filters);

  const { data } = useQuery({
    queryKey: ["campers", page, filtersKey],
    queryFn: () =>
      fetchRV({
        page,
        limit,
        ...filters,
      }),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setRVs(data.items, data.total);
    } else {
      addRVs(data.items);
    }
  }, [data, page, setRVs, addRVs]);
  console.log(rv);
  return rv.length > 0 && <RVList items={rv} />;
};

export default CatalogClient;
