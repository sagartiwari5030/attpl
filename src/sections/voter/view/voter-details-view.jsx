import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

import { useGetProduct } from 'src/api/product';

import { useSettingsContext } from 'src/components/settings';

import ProductDetailsDescription from '../voter-details-description';

// ----------------------------------------------------------------------

export default function VoterDetailsView({ id }) {
  const { product } = useGetProduct(id);

  const settings = useSettingsContext();

  const renderProduct = (
    <Card>
      <ProductDetailsDescription description={product?.description} />
    </Card>
  );

  return <Container maxWidth={settings.themeStretch ? false : 'lg'}>{renderProduct}</Container>;
}

VoterDetailsView.propTypes = {
  id: PropTypes.string,
};
