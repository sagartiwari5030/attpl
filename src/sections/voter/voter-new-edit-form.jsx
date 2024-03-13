import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { VOTER_AFFILIATION_OPTIONS, VOTER_CITIZENSHIP_OPTIONS } from 'src/_mock';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFMultiCheckbox } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function VoterNewEditForm({ currentProduct }) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    images: Yup.array().min(1, 'Images is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().moreThan(0, 'Price should not be $0.00'),
    description: Yup.string().required('Description is required'),
    // not required
    taxes: Yup.number(),
    newLabel: Yup.object().shape({
      enabled: Yup.boolean(),
      content: Yup.string(),
    }),
    saleLabel: Yup.object().shape({
      enabled: Yup.boolean(),
      content: Yup.string(),
    }),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      description: currentProduct?.description || '',
      subDescription: currentProduct?.subDescription || '',
      images: currentProduct?.images || [],
      //
      code: currentProduct?.code || '',
      sku: currentProduct?.sku || '',
      price: currentProduct?.price || 0,
      quantity: currentProduct?.quantity || 0,
      priceSale: currentProduct?.priceSale || 0,
      tags: currentProduct?.tags || [],
      taxes: currentProduct?.taxes || 0,
      gender: currentProduct?.gender || '',
      category: currentProduct?.category || '',
      colors: currentProduct?.colors || [],
      sizes: currentProduct?.sizes || [],
      newLabel: currentProduct?.newLabel || { enabled: false, content: '' },
      saleLabel: currentProduct?.saleLabel || { enabled: false, content: '' },
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentProduct ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.voter.list);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <Grid xs={12} md={8}>
      <Card>
        <Stack spacing={3} sx={{ p: 4 }}>
          <RHFTextField name="name" label="Voter Name" />
          <RHFTextField name="dob" label="Date of Birth" />
          <RHFTextField name="residentialAddress" label="Residential Address" multiline rows={4} />
          <RHFTextField name="mailingAddress" label="Mailing Address" />
          <RHFTextField name="phoneNumber" label="Phone Number" />
          <RHFTextField name="whatsappNumber" label="WhatsApp Number" />
          <RHFTextField name="adharNumber" label="Adhar Number" />
          <RHFTextField name="email" label="Email" />
          <RHFTextField name="wardIdNumber" label="Ward Id Number" />
          <RHFTextField name="whatsappNumber" label="Voter Id Number" />
          <RHFTextField name="stateIdNumber" label="State Id Number" />
          <RHFTextField name="whatsappNumber" label="WhatsApp Number" />
          <RHFTextField name="upiId" label="UPI Id" />
          <RHFTextField name="socialSecurityNumber" label="Social Security Number" />
          <Stack spacing={1}>
            <Typography variant="subtitle2">Political Party Affiliation</Typography>
            <RHFMultiCheckbox row name="gender" spacing={2} options={VOTER_AFFILIATION_OPTIONS} />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Citizenship Status</Typography>
            <RHFMultiCheckbox row name="gender" spacing={2} options={VOTER_CITIZENSHIP_OPTIONS} />
          </Stack>
          <RHFTextField name="signature" label="Signature" />
        </Stack>
      </Card>
    </Grid>
  );

  const renderActions = (
    <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', width: '200px' }}>
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
        sx={{ width: '100%' }}
      >
        {!currentProduct ? 'Create Voter' : 'Save Changes'}
      </LoadingButton>
    </Grid>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}
        {renderActions}
      </Grid>
    </FormProvider>
  );
}

VoterNewEditForm.propTypes = {
  currentProduct: PropTypes.object,
};
