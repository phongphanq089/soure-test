import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowLeft } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import { useRouter } from "next/router";
import { ColorStyles, TextStyles } from "../src/theme/Designs";

const Error = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Grid container textAlign="center" alignItems='center' justifyContent='center' px={ 3 } mb={ 16 }>
        <Grid item justifyContent="center" xs={ 12 } md={ 8 }>
          <Image src="/404.svg" alt="" width={ 440 } height={ 293 } />
          <Typography variant="h2" fontSize={ TextStyles.displayXl.bold } color={ ColorStyles.gray[ 900 ] }>
            Page not found
          </Typography>
          <Typography variant="body2" paragraph>
            { "The page you are looking for doesn't exist. Here are some helpful links:" }
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="center" spacing={ 2 }>
            <Button variant="secondary" onClick={ () => router.back() }><ArrowLeft /> Go back</Button>
            <Button variant="primary" onClick={ () => router.push( '/' ) }>Take me home</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
Error.layout = "Front";
export default Error;
