import css from "./CamperIdBooking.module.css";
import * as Yup from "yup";

interface CamperFormValuesProps {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

const initialFormValues: CamperFormValuesProps = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const CampersFormShema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name is too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.string().required("Booking date is required"),
  comment: Yup.string().max(400, "Comment is too long"),
});

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
