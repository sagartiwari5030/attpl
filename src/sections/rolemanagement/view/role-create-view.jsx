import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import RoleNewEditForm from '../role-new-edit-form';

// ----------------------------------------------------------------------

export default function RoleCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a New Role Managment"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Role Management',
            href: paths.dashboard.rolemanagement.root,
          },
          { name: 'New Role' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <RoleNewEditForm />
    </Container>
  );
}
