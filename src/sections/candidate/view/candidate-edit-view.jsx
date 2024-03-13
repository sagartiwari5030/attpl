import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useGetProduct } from 'src/api/product';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import  CandidateNewEditForm from '../candidate-new-edit-form';

// ----------------------------------------------------------------------

export default function CandidateEditView({ id }) {
  const settings = useSettingsContext();

  const { product: currentProduct } = useGetProduct(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          // { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: ' Candidate M',
            href: paths.dashboard.candidate.root,
          },
          { name: currentProduct?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      < CandidateNewEditForm currentProduct={currentProduct} />
    </Container>
  );
}

 CandidateEditView.propTypes = {
  id: PropTypes.string,
};
