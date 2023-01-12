import { NavBar, Footer, FullWidthContainer } from "@/components/common";
import HomePage from "@/views/jobs/pages/HomePage";

function IndeedLayout() {
  return (
    <>
      <FullWidthContainer>
        <NavBar />
      </FullWidthContainer>
      <FullWidthContainer>
        {/* Outlet of react router will render here */}
        <HomePage />
      </FullWidthContainer>
      <FullWidthContainer>
        <Footer />
      </FullWidthContainer>
    </>
  );
}

export default IndeedLayout;
