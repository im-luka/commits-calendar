import {
  StyledContainer,
  StyledImage,
  StyledInfo,
} from "../../styles/details/Details.styled";
import { Button } from "../../styles/shared/Button.styled";
import { DateTime } from "luxon";
import { useRouter } from "next/router";

const Details = ({ commit }) => {
  const router = useRouter();

  const datetime = DateTime.fromISO(commit.date, { locale: "en" });
  const date = `${datetime.weekdayLong} ${datetime.day}, ${datetime.monthLong} ${datetime.year}`;

  const backHandler = () => {
    router.back();
  };

  return (
    <StyledContainer>
      <StyledImage>
        <div>
          <img src={commit.image_url} alt={commit.username} />
        </div>

        <div>
          <Button onClick={backHandler}>Go Back</Button>
        </div>
      </StyledImage>

      <StyledInfo>
        <header>
          <h1>{commit.username}</h1>
          <Button>
            <a href={commit.profile_url} target="_blank" rel="noreferrer">
              See Profile
            </a>
          </Button>
        </header>

        <p>
          Message : <br /> {commit.message}
        </p>

        <span>
          Created at : <br /> {date}
        </span>

        <div>
          <p>{commit.name}</p>
          <p>|</p>
          <p>{commit.email}</p>
        </div>
      </StyledInfo>
    </StyledContainer>
  );
};

export default Details;
