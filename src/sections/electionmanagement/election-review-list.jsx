import PropTypes from 'prop-types';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import ElectionReviewItem from './election-review-item';

// ----------------------------------------------------------------------

export default function ElectionReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <ElectionReviewItem key={review.id} review={review} />
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

ElectionReviewList.propTypes = {
  reviews: PropTypes.array,
};
