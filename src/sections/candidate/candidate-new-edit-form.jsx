import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useMemo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fData } from 'src/utils/format-number';

import { countries } from 'src/assets/data';

import Label from 'src/components/label';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function UserNewEditForm({ currentUser }) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    company: Yup.string().required('Company is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    role: Yup.string().required('Role is required'),
    zipCode: Yup.string().required('Zip code is required'),
    avatarUrl: Yup.mixed().nullable().required('Avatar is required'),
    // Deepak added
    motherName: Yup.string().required('Mother Name is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    nationalId: Yup.string().required('National ID is required'),
    educationDegree: Yup.string().required('Education Degree is required'),
    lastCertificateFrom: Yup.string().required('Last Certificate From is required'),
    currentJobTitle: Yup.string().required('Current Job Title is required'),
    workingAt: Yup.string().required('Working At is required'),
    participateInList: Yup.string().required('Participate In List is required'),
    propertyAmount: Yup.string().required('Property Amount is required'),
    legalCase: Yup.string().required('Legal Case is required'),
    // not required
    status: Yup.string(),
    isVerified: Yup.boolean(),
  });

  // const defaultValues = useMemo(
  //   () => ({
  //     name: currentUser?.name || '',
  //     city: currentUser?.city || '',
  //     role: currentUser?.role || '',
  //     email: currentUser?.email || '',
  //     state: currentUser?.state || '',
  //     status: currentUser?.status || '',
  //     address: currentUser?.address || '',
  //     country: currentUser?.country || '',
  //     zipCode: currentUser?.zipCode || '',
  //     company: currentUser?.company || '',
  //     avatarUrl: currentUser?.avatarUrl || null,
  //     phoneNumber: currentUser?.phoneNumber || '',
  //     isVerified: currentUser?.isVerified || true,
  //   }),
  //   [currentUser]
  // );

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.name || '',
      city: currentUser?.city || '',
      role: currentUser?.role || '',
      email: currentUser?.email || '',
      state: currentUser?.state || '',
      status: currentUser?.status || '',
      address: currentUser?.address || '',
      country: currentUser?.country || '',
      zipCode: currentUser?.zipCode || '',
      company: currentUser?.company || '',
      avatarUrl: currentUser?.avatarUrl || null,
      phoneNumber: currentUser?.phoneNumber || '',
      isVerified: currentUser?.isVerified || true,
      motherName: currentUser?.motherName || '',
      dateOfBirth: currentUser?.dateOfBirth || '',
      gender: currentUser?.gender || '',
      nationalId: currentUser?.nationalId || '',
      educationDegree: currentUser?.educationDegree || '',
      lastCertificateFrom: currentUser?.lastCertificateFrom || '',
      currentJobTitle: currentUser?.currentJobTitle || '',
      workingAt: currentUser?.workingAt || '',
      participateInList: currentUser?.participateInList || '',
      propertyAmount: currentUser?.propertyAmount || '',
      legalCase: currentUser?.legalCase || '',
    }),
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     reset();
  //     enqueueSnackbar(currentUser ? 'Update success!' : 'Create success!');
  //     router.push(paths.dashboard.user.list);
  //     console.info('DATA', data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });
  const onSubmit = handleSubmit(async (data) => {
    try {
      // Use the correct API endpoint URL
      // const apiUrl = 'http://13.233.254.253/api/v1/add-profile-details';
      
      const apiUrl = 'http://localhost:3030/api/v1/candidate/add-profile-details';

      // Use the POST HTTP method for both new and updated users
      const httpMethod = 'POST';

      // Make the API request
      const response = await fetch(apiUrl, {
        method: httpMethod,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Parse the response JSON
      const responseData = await response.json();

      if (response.ok) {
        // Handle success
        reset();
        enqueueSnackbar(responseData.message, { variant: 'success' });
        router.push(paths.dashboard.user.list);
      } else {
        // Handle error
        enqueueSnackbar(responseData.message, { variant: 'error' });
      }

      console.info('API Response:', responseData);
    } catch (error) {
      console.error('API Error:', error);
    }
  });
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            {currentUser && (
              <Label
                color={
                  (values.status === 'active' && 'success') ||
                  (values.status === 'banned' && 'error') ||
                  'warning'
                }
                sx={{ position: 'absolute', top: 24, right: 24 }}
              >
                {values.status}
              </Label>
            )}

            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 3,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.disabled',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>

            {currentUser && (
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        {...field}
                        checked={field.value !== 'active'}
                        onChange={(event) =>
                          field.onChange(event.target.checked ? 'banned' : 'active')
                        }
                      />
                    )}
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Banned
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Apply disable account
                    </Typography>
                  </>
                }
                sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
              />
            )}

            <RHFSwitch
              name="isVerified"
              labelPlacement="start"
              label={
                <>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Email Verified
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Disabling this will automatically send the user a verification email
                  </Typography>
                </>
              }
              sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            />

            {currentUser && (
              <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                <Button variant="soft" color="error">
                  Delete User
                </Button>
              </Stack>
            )}
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="name" label="Full Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phoneNumber" label="Phone Number" />

              <RHFAutocomplete
                name="country"
                type="country"
                label="Country"
                placeholder="Choose a country"
                fullWidth
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
              />

              <RHFTextField name="state" label="State/Region" />
              <RHFTextField name="city" label="City" />
              <RHFTextField name="address" label="Address" />
              <RHFTextField name="zipCode" label="Zip/Code" />
              <RHFTextField name="company" label="Company" />
              <RHFTextField name="role" label="Role" />

              {/* Deepak added */}
              <RHFTextField name="motherName" label="Mother Name" />
              <RHFTextField name="dateOfBirth" label="Date of Birth" />
              <RHFTextField name="gender" label="Gender" />
              <RHFTextField name="nationalId" label="National ID" />
              <RHFTextField name="educationDegree" label="Education Degree" />
              <RHFTextField name="lastCertificateFrom" label="Last Certificate From" />
              <RHFTextField name="currentJobTitle" label="Current Job Title" />
              <RHFTextField name="workingAt" label="Working At" />
              {/* <RHFTextField name="participateInList" label="Participate In List" />
              <RHFTextField name="propertyAmount" label="Property Amount" />
              <RHFTextField name="legalCase" label="Legal Case" /> */}
              <RHFAutocomplete
                name="participateInList"
                label="Participate In List"
                placeholder="Choose an option"
                fullWidth
                options={['Option 1', 'Option 2', 'Option 3']} // Replace with your actual options
                getOptionLabel={(option) => option}
              />
              <RHFAutocomplete
                name="propertyAmount"
                label="Property Amount"
                placeholder="Choose an option"
                fullWidth
                options={['0 - 5 lakhs', '5 - 20 lakhs', '20 - 1 cr','1 cr above']} // Replace with your actual options
                getOptionLabel={(option) => option}
              />
              <RHFAutocomplete
                name="legalCase"
                label="Legal Case"
                placeholder="Choose an option"
                fullWidth
                options={['0 - 1 ', '1 - 10 ', '10 - 20 ']} // Replace with your actual options
                getOptionLabel={(option) => option}
              />
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!currentUser ? 'Create Candidate' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

UserNewEditForm.propTypes = {
  currentUser: PropTypes.object,
};
