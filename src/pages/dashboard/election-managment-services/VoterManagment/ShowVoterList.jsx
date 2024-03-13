import { Helmet } from 'react-helmet-async';

import { VoterListView } from 'src/sections/voter/view';

// ----------------------------------------------------------------------

export default function ProductListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Voter List</title>
      </Helmet>

      <VoterListView />
    </>
  );
}
