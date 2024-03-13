import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useGetProduct } from 'src/api/product';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import VoterNewEditForm from '../voter-new-edit-form';

// ----------------------------------------------------------------------

export default function VoterEditView({ id }) {
  const settings = useSettingsContext();

  const { product: currentProduct } = useGetProduct(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Voter"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'voter',
            href: paths.dashboard.voter.root,
          },
          { name: 'Edit Voter' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <VoterNewEditForm currentProduct={currentProduct} />
    </Container>
  );
}

VoterEditView.propTypes = {
  id: PropTypes.string,
};
