import { Card, Box, styled } from "@mui/material";

const About = () => {
  return (
    <Wrapper sx={{ gap: "1rem", p: { md: 4, xs: 0.5 } }}>
      <Box
        sx={{ justifySelf: "center", textAlign: "end", alignSelf: "center" }}
        className="name"
      >
        <p>Ahmad Madi</p>
      </Box>
      <Box className="infoCard">
        <CustomCard>
          <h4>Info</h4>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur nobis impedit fugiat fuga deleniti tempore rerum
            cupiditate soluta earum similique vel repellat quasi quia voluptate,
            voluptatum ipsa, architecto necessitatibus?
          </p>
        </CustomCard>
      </Box>
      <Box className="skillsCard">
        <CustomCard>
          <h4>Skills</h4>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur nobis impedit fugiat fuga deleniti tempore rerum
            cupiditate soluta earum similique vel repellat quasi quia voluptate,
            voluptatum ipsa, architecto necessitatibus? Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Numquam consequuntur nobis
            impedit fugiat fuga deleniti tempore rerum cupiditate soluta earum
            similique vel repellat quasi quia voluptate, voluptatum ipsa,
            architecto necessitatibus? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Numquam consequuntur nobis impedit fugiat fuga
            deleniti tempore rerum cupiditate soluta earum similique vel
            repellat quasi quia voluptate, voluptatum ipsa, architecto
            necessitatibus?
          </p>
        </CustomCard>
      </Box>
      <Box className="workExperienceCard">
        <CustomCard>
          <h4>Work</h4>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur nobis impedit fugiat fuga deleniti tempore rerum
            cupiditate soluta earum similique vel repellat quasi quia voluptate,
            voluptatum ipsa, architecto necessitatibus?
          </p>
        </CustomCard>
      </Box>
      <Box className="educationCard">
        <CustomCard>
          <h4>Education</h4>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur nobis impedit fugiat fuga deleniti tempore rerum
            cupiditate soluta earum similique vel repellat quasi quia voluptate,
            voluptatum ipsa, architecto necessitatibus?
          </p>
        </CustomCard>
      </Box>
    </Wrapper>
  );
};

export default About;

const CustomCard = styled(Card)`
  padding: 1rem;
  -webkit-box-shadow: var(--card-shadow);
  -moz-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
`;

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 100%;
  margin-bottom: 4rem;

  .name {
    grid-area: 1 / 1 / 2 / 2;
    font-size: 2rem;
    font-weight: 500;
  }
  .infoCard {
    grid-area: 2 / 1 / 3 / 2;
  }
  .skillsCard {
    grid-area: 3 / 1 / 4 / 2;
  }
  .workExperienceCard {
    grid-area: 4 / 1 / 5 / 2;
  }
  .educationCard {
    grid-area: 5 / 1 / 6 / 2;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .name {
      grid-area: 1 / 1 / 2 / 2;
      font-size: 2rem;
      font-weight: 200;
      text-transform: uppercase;
    }

    .skillsCard {
      grid-area: 1 / 2 / 3 / 4;
    }
    .infoCard {
      grid-area: 2 / 1 / 5 / 2;
    }
    .workExperienceCard {
      grid-area: 3 / 2 / 5 / 3;
    }
    .educationCard {
      grid-area: 3 / 3 / 5 / 4;
    }
  }
`;
