import PropTypes from 'prop-types';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import WardReviewItem from './role-review-item';

// ----------------------------------------------------------------------

export default function RoleReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <WardReviewItem key={review.id} review={review} />
      ))}

      <Pagination
        count={10}
        sx={{
          mx: 'auto',
          [`& .${paginationClasses.ul}`]: {
            my: 5,
            mx: 'auto',
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

RoleReviewList.propTypes = {
  reviews: PropTypes.array,
};
