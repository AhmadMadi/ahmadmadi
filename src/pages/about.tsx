import { Card, Box, Grid, styled, Link, LinearProgress } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

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
          <h4 style={{ marginBottom: "1rem" }}>{"<Info />"}</h4>
          <p>
            I am a Software Engineer from Lebanon. I have a passion for learning
            new technologies and building cool stuff. I am currently working as
            a Software Engineer at Washmen.
          </p>
          <Grid container sx={{ mt: "1rem", gap: "0.2rem" }}>
            <LocationOnIcon sx={{ fontSize: "1.1rem" }} />
            <span style={{ fontSize: "0.9rem" }}>Istanbul, Turkey</span>
          </Grid>
          <Grid container sx={{ mt: "1rem", gap: "0.2rem" }}>
            <PhoneIcon sx={{ fontSize: "1rem" }} />
            <span style={{ fontSize: "0.9rem" }}>
              <Link underline="none" href="tel:+905521580988">
                +90 552 158 09 88
              </Link>
            </span>
          </Grid>
          <Grid container sx={{ mt: "1rem", gap: "0.2rem" }}>
            <LinkedInIcon sx={{ fontSize: "1.1rem" }} />
            <span style={{ fontSize: "0.9rem" }}>
              <Link
                underline="none"
                href="https://www.linkedin.com/in/ahmad-madi-0b2a85162/"
                target="_blank"
                rel="noopener"
              >
                Ahmad Madi
              </Link>
            </span>
          </Grid>
        </CustomCard>
      </Box>
      <Box className="skillsCard">
        <CustomCard>
          <h4 style={{ marginBottom: "1rem" }}>{"<Skills />"}</h4>
          <Grid
            direction={"column"}
            container
            sx={{ mt: "1rem", gap: "0.2rem" }}
          >
            <h5>HTML</h5>
            <LinearProgress variant="determinate" value={70} />
          </Grid>
          <Grid
            direction={"column"}
            container
            sx={{ mt: "1rem", gap: "0.2rem" }}
          >
            <h5>CSS</h5>
            <LinearProgress variant="determinate" value={60} />
          </Grid>
          <Grid
            direction={"column"}
            container
            sx={{ mt: "1rem", gap: "0.2rem" }}
          >
            <h5>Javascript</h5>
            <LinearProgress variant="determinate" value={70} />
          </Grid>
          <Grid
            direction={"column"}
            container
            sx={{ mt: "1rem", gap: "0.2rem" }}
          >
            <h5>NodeJS</h5>
            <LinearProgress variant="determinate" value={70} />
          </Grid>
          <Grid
            direction={"column"}
            container
            sx={{ mt: "1rem", gap: "0.2rem" }}
          >
            <h5>ReactJS</h5>
            <LinearProgress variant="determinate" value={60} />
          </Grid>
          <Grid
            direction={"column"}
            container
            sx={{ mt: "1rem", gap: "0.2rem" }}
          >
            <h5>Java/SprintBoot</h5>
            <LinearProgress variant="determinate" value={30} />
          </Grid>
        </CustomCard>
      </Box>
      <Box className="workExperienceCard">
        <CustomCard>
          <h4 style={{ marginBottom: "1rem" }}>{"<Work />"}</h4>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0,
              },
              p: 0,
            }}
          >
            <TimelineItem sx={{}}>
              <TimelineOppositeContent
                sx={{
                  p: 0,
                  width: "7rem",
                }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{}} />
              </TimelineSeparator>
              <TimelineContent sx={{ fontFamily: "Poppins" }}>
                Washmen
                <br />
                <span style={{ fontSize: "0.9rem" }}>Software Engineer</span>
                <br />
                <span style={{ fontSize: "0.7rem" }}>2019 - present</span>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CustomCard>
      </Box>
      <Box className="educationCard">
        <CustomCard>
          <h4>{"<Education />"}</h4>
          <br />
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0,
              },
              p: 0,
            }}
          >
            <TimelineItem sx={{}}>
              <TimelineOppositeContent
                sx={{
                  p: 0,
                  width: "7rem",
                }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{}} />
              </TimelineSeparator>
              <TimelineContent sx={{ fontFamily: "Poppins" }}>
                Lebanese Internal University
                <br />
                <span style={{ fontSize: "0.7rem" }}>2018 - 2021</span>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
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
