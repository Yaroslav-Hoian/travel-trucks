import css from "./LayoutCatalog.module.css";

type CatalogLayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: CatalogLayoutProps) => {
  return (
    <section className={css.catalogContainer}>
      <div className={css.catalogSubContainer}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <div className={css.RVWrapper}>{children}</div>
      </div>
    </section>
  );
};

export default NotesLayout;
