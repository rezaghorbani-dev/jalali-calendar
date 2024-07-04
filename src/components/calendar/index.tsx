import { useApp } from "../../context";
import style from "./calendar.module.scss";
import { CalendarProps } from "./calendar.types";

const Calendar = (_props: CalendarProps) => {
  const { dir } = useApp();

  return <div className={style.calendar} dir={dir}></div>;
};

export default Calendar;
