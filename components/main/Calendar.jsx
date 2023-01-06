import { useReducer } from "react";
import {
  StyledCalendar,
  StyledDates,
  StyledSwitcher,
  StyledPicker,
  StyledDays,
  StyledGrid,
} from "../../styles/main/Calendar.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "../../styles/shared/Button.styled";
import { DAYS_OF_WEEK, CURRENT_DATE } from "../../helper/dates";
import { DateTime } from "luxon";
import { useSelector, useDispatch } from "react-redux";
import DateItem from "./DateItem";
import { showModal } from "../../context/modal/modalSlice";

function setDateObject(date) {
  return {
    date: date,
    firstDayOfMonth: DateTime.fromObject(
      {
        day: 1,
        month: date.month,
      },
      { locale: "en" }
    ).weekdayLong,
    daysInMonth: date.daysInMonth,
  };
}

const initialState = setDateObject(CURRENT_DATE);

const reducer = (state, action) => {
  if (action.type === "NEXT_MONTH") {
    const nextDate = state.date.plus({ month: 1 });
    return setDateObject(nextDate);
  }

  if (action.type === "PREVIOUS_MONTH") {
    const previousDate = state.date.minus({ month: 1 });
    return setDateObject(previousDate);
  }

  return initialState;
};

const Calendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { commits } = useSelector((store) => store.commits);
  const dispatchModal = useDispatch();

  const setDaysInMonth = () => {
    let array = [],
      counter = 0;
    let startingIndex = DAYS_OF_WEEK.findIndex(
      (day) => day === state.firstDayOfMonth
    );

    for (let index = 0; index < 42; index++) {
      if (index >= startingIndex && index < startingIndex + state.daysInMonth) {
        const currentDay = DateTime.fromObject({
          day: ++counter,
          month: state.date.month,
          year: state.date.year,
        })
          .toISO()
          .slice(0, 10);

        const currentCommit = commits.find(
          (elem) => elem.date.slice(0, 10) === currentDay
        );

        array[index] = {
          day: counter,
          commit: currentCommit,
          isEmpty: currentCommit ? false : true,
        };
      } else {
        array[index] = {};
      }
    }

    return array;
  };

  const calendarDays = setDaysInMonth();

  return (
    <StyledCalendar>
      <StyledSwitcher>
        <StyledPicker>
          <FaArrowLeft
            onClick={() => {
              dispatch({ type: "PREVIOUS_MONTH" });
            }}
          />
          {`${state.date.monthLong} ${state.date.year}`}
          <FaArrowRight
            onClick={() => {
              dispatch({ type: "NEXT_MONTH" });
            }}
          />
        </StyledPicker>

        <Button
          onClick={() => {
            dispatchModal(showModal());
          }}
        >
          Add New
        </Button>
      </StyledSwitcher>

      <StyledDates>
        <StyledDays>
          {DAYS_OF_WEEK.map((day, index) => (
            <p key={index}>{day}</p>
          ))}
        </StyledDays>

        <StyledGrid>
          {calendarDays.map((elem, index) => (
            <DateItem key={index} commit={elem} />
          ))}
        </StyledGrid>
      </StyledDates>
    </StyledCalendar>
  );
};

export default Calendar;
