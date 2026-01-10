"use client";

import css from "./SidebarForm.module.css";

import { useState } from "react";
import RVFilterLocation from "@/components/Catalog/CatalogFilter/RVFilterLocation/RVFilterLocation";
import RVFilterEquipment from "@/components/Catalog/CatalogFilter/RVFilterEquipments/RVFilterEquipments";
import RVFilterVehicleType from "@/components/Catalog/CatalogFilter/RVFilterVehicleType/RVFilterVehicleType";
import { RVForm } from "@/types/RV";
import { useRVDraftStore } from "@/lib/store/RVStore";

interface EquipmentFilters {
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
}

const CatalogSidebar = () => {
  const setFilters = useRVDraftStore((state) => state.setFilters);

  const [location, setLocation] = useState<string>("");
  const [filters, setLocalFilters] = useState<EquipmentFilters>({});
  const [vehicleType, setVehicleType] = useState<RVForm | null>(null);

  const toggleFilter = (key: keyof EquipmentFilters) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: prev[key] ? undefined : true,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({
      location,
      ...filters,
      form: vehicleType ?? undefined,
    });
  };

  return (
    <form className={css.sidebarForm} onSubmit={handleSubmit}>
      <RVFilterLocation location={location} setLocation={setLocation} />
      <div className={css.filtersContainer}>
        <h3 className={css.filtersTitle}>Filters</h3>
        <div className={css.filterSection}>
          <h4 className={css.filtersSectionTitle}>Vehicle equipment</h4>
          <span className={css.filtersSectionLine}></span>
          <div>
            <RVFilterEquipment
              label="AC"
              icon="AC"
              checked={!!filters.AC}
              onChange={() => toggleFilter("AC")}
            />
            <RVFilterEquipment
              label="kitchen"
              icon="Kitchen"
              checked={!!filters.kitchen}
              onChange={() => toggleFilter("kitchen")}
            />
            <RVFilterEquipment
              label="bathroom"
              icon="Bathroom"
              checked={!!filters.bathroom}
              onChange={() => toggleFilter("bathroom")}
            />
            <RVFilterEquipment
              label="TV"
              icon="TV"
              checked={!!filters.TV}
              onChange={() => toggleFilter("TV")}
            />
            <RVFilterEquipment
              label="radio"
              icon="Radio"
              checked={!!filters.radio}
              onChange={() => toggleFilter("radio")}
            />
            <RVFilterEquipment
              label="refrigerator"
              icon="Refrigerator"
              checked={!!filters.refrigerator}
              onChange={() => toggleFilter("refrigerator")}
            />
            <RVFilterEquipment
              label="microwave"
              icon="Microwave"
              checked={!!filters.microwave}
              onChange={() => toggleFilter("microwave")}
            />
          </div>
        </div>
        <div  className={css.filterSection}>
          <h4  className={css.filtersSectionTitle}>Vehicle type</h4>
          <span className={css.filtersSectionLine}></span>
          <div>
            <RVFilterVehicleType
              label="Van"
              icon="Van"
              value="panelTruck"
              selected={vehicleType}
              onSelect={setVehicleType}
            />
            <RVFilterVehicleType
              label="Fully Integrated"
              icon="Fully-Integrated"
              value="fullyIntegrated"
              selected={vehicleType}
              onSelect={setVehicleType}
            />
            <RVFilterVehicleType
              label="Alcove"
              icon="Alcove"
              value="alcove"
              selected={vehicleType}
              onSelect={setVehicleType}
            />
          </div>
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default CatalogSidebar;
