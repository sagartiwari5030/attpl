import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { VoterDetailsView } from 'src/sections/voter/view';

// ----------------------------------------------------------------------

export default function ProductDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Product Details</title>
      </Helmet>

      <VoterDetailsView id={`${id}`} />
    </>
  );
}
