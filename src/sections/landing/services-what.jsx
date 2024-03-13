import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

import { useResponsive } from 'src/hooks/use-responsive';

// import { fPercent } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ------------------------------------------------------------------
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [20, 40, 60][index],
}));

// ----------------------------------------------------------------------

export default function ServicesWhat() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const lightMode = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  //   var items = [
  //     {
  //       name: 'Random Name #1',
  //       description: 'Probably the most random thing you have ever seen!',
  //       image:
  //         'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  //     },
  //     {
  //       name: 'Random Name #2',
  //       description: 'Hello World!',
  //       image:
  //         'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  //     },
  //   ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    // <Container
    //   component={MotionViewport}
    //   sx={{
    //     py: { xs: 10, md: 15 },
    //     textAlign: { xs: 'center', md: 'unset' },
    //   }}
    // >
    //   <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">

    //   </Grid>
    // </Container>
    // </Box>
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={responsive.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="/assets/images/services/candidate.png"
              alt="candidate"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Read more
              </Button>
              {/* <Typography gutterBottom variant="h5" component="div">
                Candidate Registration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Register candidates for upcoming elections, manage their information, and track
                their progress through the registration process.
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="/assets/images/services/voter.png"
              alt="voter"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Read more
              </Button>
              {/* <Typography gutterBottom variant="h5" component="div">
                Voter Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Efficiently manage voter information, including registration details, polling
                locations, and voting history. and voting history.
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="/assets/images/services/booth.png"
              alt="booth"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Read more
              </Button>
              {/* <Typography gutterBottom variant="h5" component="div">
                Booth Committee Setup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create and manage committees responsible for overseeing election booths, ensuring
                fair and secure voting processes.
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="/assets/images/services/electionsetup.png"
              alt="election setup"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Read more
              </Button>
              {/* <Typography gutterBottom variant="h5" component="div">
                Election Setup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Set up elections by defining electoral districts, assigning polling locations, and
                configuring ballot options.
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="/assets/images/services/wards.png"
              alt="wards"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Read more
              </Button>
              {/* <Typography gutterBottom variant="h5" component="div">
                Ward Setup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Establish electoral wards, delineate boundaries, and manage administrative tasks
                related to local government representation.
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Carousel>
    </Container>
  );
}
