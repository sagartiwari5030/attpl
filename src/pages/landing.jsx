import { Helmet } from 'react-helmet-async';

import { LandingView } from 'src/sections/landing/view';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title> EMS: Election Management Service</title>
      </Helmet>

      <LandingView />
    </>
  );
}
