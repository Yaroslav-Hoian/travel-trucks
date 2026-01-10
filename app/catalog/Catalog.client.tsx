"use client";

import RVList from "@/components/Catalog/CatalogGrid/RVList/RVList";
import { fetchRV } from "@/lib/api";
import { useRVDraftStore } from "@/lib/store/RVStore";
import css from "./Catalog.client.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "../loading";

const CatalogClient = () => {
  const { rv, page, limit, filters, setRVs, addRVs, nextPage, total } =
    useRVDraftStore();

  const filtersKey = JSON.stringify(filters);

  const { data, isFetching } = useQuery({
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

  if (!rv.length && isFetching) {
    return <Loading />;
  }

  const loadMore = rv.length < total;
  return (
    <>
      {rv.length > 0 && <RVList items={rv} />}
      {loadMore && (
        <button
          type="button"
          className={css.loadMoreBtn}
          onClick={nextPage}
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default CatalogClient;
