import css from "./CamperIdBooking.module.css";

const CamperIdBooking = () => {
  return (
    <div className={css.booking}>
      <div className={css.bookingContainer}>
        <h3 className={css.bookingTitle}>Book your campervan now</h3>
        <p className={css.bookingText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.bookingForm}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <textarea />
      </form>
      <div className={css.btnBox}>
        <button className={css.sendBtn}>Send</button>
      </div>
    </div>
  );
};

export default CamperIdBooking;
