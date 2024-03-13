import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import WardNewEditForm from '../ward-new-edit-form';

// ----------------------------------------------------------------------

export default function WardCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new ward"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Ward Management',
            href: paths.dashboard.wardmanagement.root,
          },
          { name: 'New Ward' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <WardNewEditForm />
    </Container>
  );
}
