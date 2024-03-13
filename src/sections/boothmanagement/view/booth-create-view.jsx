import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import BoothNewEditForm from '../booth-new-edit-form';

// ----------------------------------------------------------------------

export default function BoothCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new booth"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Booth Management',
            href: paths.dashboard.boothmanagement.root,
          },
          { name: 'New Booth' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <BoothNewEditForm />
    </Container>
  );
}
