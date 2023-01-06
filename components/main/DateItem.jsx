import { StyledDateItem } from "../../styles/main/Calendar.styled";
import { useRouter } from "next/router";

const DateItem = ({ commit }) => {
  const time = commit.commit?.date.slice(11, 16);
  const router = useRouter();

  const clickHandler = () => {
    if (commit.commit) {
      router.push(`/${commit.commit?.id}`);
    }
  };

  return (
    <StyledDateItem
      isThisMonth={commit.day}
      isEmpty={commit.isEmpty}
      onClick={clickHandler}
    >
      <p>{commit.day}</p>
      {commit.commit && !commit.isEmpty && (
        <div>
          <p>{time}:</p>
          <p>{commit.commit?.message}</p>
        </div>
      )}
    </StyledDateItem>
  );
};

export default DateItem;
