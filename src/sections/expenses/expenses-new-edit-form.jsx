import * as Yup from 'yup';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { _addressBooks } from 'src/_mock';

import FormProvider from 'src/components/hook-form';

import ExpensesNewEditDetails from './expenses-new-edit-details';
import ExpensesNewEditAddress from './expenses-new-edit-address';
import ExpensesNewEditStatusDate from './expenses-new-edit-status-date';

// ----------------------------------------------------------------------

export default function ExpensesNewEditForm({ currentExpenses }) {
  const router = useRouter();

  const loadingSave = useBoolean();

  const loadingSend = useBoolean();

  const NewExpensesSchema = Yup.object().shape({
    expensesTo: Yup.mixed().nullable().required('Expenses to is required'),
    createDate: Yup.mixed().nullable().required('Create date is required'),
    dueDate: Yup.mixed()
      .required('Due date is required')
      .test(
        'date-min',
        'Due date must be later than create date',
        (value, { parent }) => value.getTime() > parent.createDate.getTime()
      ),
    items: Yup.lazy(() =>
      Yup.array().of(
        Yup.object({
          title: Yup.string().required('Title is required'),
          service: Yup.string().required('Service is required'),
          quantity: Yup.number()
            .required('Quantity is required')
            .min(1, 'Quantity must be more than 0'),
        })
      )
    ),
    // not required
    taxes: Yup.number(),
    status: Yup.string(),
    discount: Yup.number(),
    shipping: Yup.number(),
    expensesFrom: Yup.mixed(),
    totalAmount: Yup.number(),
    expensesNumber: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      expensesNumber: currentExpenses?.expensesNumber || 'INV-1990',
      createDate: currentExpenses?.createDate || new Date(),
      dueDate: currentExpenses?.dueDate || null,
      taxes: currentExpenses?.taxes || 0,
      shipping: currentExpenses?.shipping || 0,
      status: currentExpenses?.status || 'draft',
      discount: currentExpenses?.discount || 0,
      expensesFrom: currentExpenses?.expensesFrom || _addressBooks[0],
      expensesTo: currentExpenses?.expensesTo || null,
      items: currentExpenses?.items || [
        {
          title: '',
          description: '',
          service: '',
          quantity: 1,
          price: 0,
          total: 0,
        },
      ],
      totalAmount: currentExpenses?.totalAmount || 0,
    }),
    [currentExpenses]
  );

  const methods = useForm({
    resolver: yupResolver(NewExpensesSchema),
    defaultValues,
  });

  const {
    reset,

    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleSaveAsDraft = handleSubmit(async (data) => {
    loadingSave.onTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSave.onFalse();
      router.push(paths.dashboard.expenses.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSave.onFalse();
    }
  });

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSend.onFalse();
      router.push(paths.dashboard.expenses.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSend.onFalse();
    }
  });

  return (
    <FormProvider methods={methods}>
      <Card>
        <ExpensesNewEditAddress />

        <ExpensesNewEditStatusDate />

        <ExpensesNewEditDetails />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          color="inherit"
          size="large"
          variant="outlined"
          loading={loadingSave.value && isSubmitting}
          onClick={handleSaveAsDraft}
        >
          Save as Draft
        </LoadingButton>

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend.value && isSubmitting}
          onClick={handleCreateAndSend}
        >
          {currentExpenses ? 'Update' : 'Create'} & Send
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

ExpensesNewEditForm.propTypes = {
  currentExpenses: PropTypes.object,
};
