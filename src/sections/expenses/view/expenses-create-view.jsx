import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ExpensesNewEditForm from '../expenses-new-edit-form';

// ----------------------------------------------------------------------

export default function ExpensesCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Expenses"
        links={[
          // {
          //   name: 'Dashboard',
          //   href: paths.dashboard.root,
          // },
          {
            name: 'Expenses',
            href: paths.dashboard.expenses.root,
          },
          {
            name: 'New Expenses',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ExpensesNewEditForm />
    </Container>
  );
}
