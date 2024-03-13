import PropTypes from 'prop-types';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import BoothReviewItem from './candidate-review-item';

// ----------------------------------------------------------------------

export default function CandidateReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <BoothReviewItem key={review.id} review={review} />
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

CandidateReviewList.propTypes = {
  reviews: PropTypes.array,
};
