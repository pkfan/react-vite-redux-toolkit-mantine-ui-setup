import {
  FullWidthContainer,
  TabNavigation,
  RecipeReviewCard,
} from "@/components/common";
import { Container } from "@mui/material";
import { FindJobs, JobsContainer } from "@/views/jobs/components";

const componentRenderedList = [JobsContainer, RecipeReviewCard].map(
  (Component, index) => {
    return <Component key={index} />;
  }
);

function HomePage() {
  return (
    <>
      <FullWidthContainer>
        {/* find jobs container */}
        <Container maxWidth="lg">
          <FindJobs />
          {/* main container */}
        </Container>
      </FullWidthContainer>
      <FullWidthContainer>
        <TabNavigation
          tabNameList={["Job Feed", "Recent Searches"]}
          components={componentRenderedList}
        />
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
