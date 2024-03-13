import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { VoterEditView } from 'src/sections/voter/view';

// ----------------------------------------------------------------------

export default function ProductEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Product Edit</title>
      </Helmet>

      <VoterEditView id={`${id}`} />
    </>
  );
}
