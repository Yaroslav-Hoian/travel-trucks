"use client";

import RVList from "@/components/Catalog/CatalogGrid/RVList/RVList";
import { fetchRV } from "@/lib/api";
import { useRVDraftStore } from "@/lib/store/RVStore";
import css from "./Catalog.client.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "../loading";
import RVFilter from "@/components/Catalog/CatalogFilter/RVFilter";

const CatalogClient = () => {
  const { rv, page, limit, filters, setRVs, addRVs, nextPage, total } =
    useRVDraftStore();

  const filtersKey = JSON.stringify(filters);

  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["campers", page, filtersKey],
    queryFn: () =>
      fetchRV({
        page,
        limit,
        ...filters,
      }),
    placeholderData: keepPreviousData
  });

  useEffect(() => {
    if (!data || isPlaceholderData) return;

    if (page === 1) {
      setRVs(data.items, data.total);
    } else {
      addRVs(data.items);
    }
  }, [data, page, setRVs, addRVs, isPlaceholderData]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  const loadMore = rv.length < total;
  return (
    <section className={css.catalogClientContainer}>
      <RVFilter />
      <div className={css.catalogClientSubContent}>
        {rv.length > 0 && <RVList items={rv} />}
        {loadMore && (
          <button
            type="button"
            className={css.loadMoreBtn}
            onClick={nextPage}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogClient;
