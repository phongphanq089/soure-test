import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography
} from "@mui/material";
import { Stack } from "@mui/system";
import { ColorStyles, TextStyles } from "@theme/Designs";
import {
  AlignJustify,
  AlignLeft,
  Link2,
  UploadCloud
} from "feather-icons-react/build/IconComponents";
import CountrySelect from "./autoselected/AutoCountry";
import SelectedDatetime from "./autoselected/SelectedDatetime";
import SelectNormal from "./autoselected/SelectNormal";
import Uploadfile from "./Uploadfile";

const Mydetails = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box>
      {/* ------------------------------------------- */}
      {/*  Profile */}
      {/* ------------------------------------------- */}
      <Grid container className="boderBottom" py={3}>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction={"column"}>
            <Typography
              variant="text3"
            >
              Profile
            </Typography>
            <Typography variant="text1" mb="7px">
              Update your photo and personal details here.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ justifyContent: { md: "flex-end", xs: "flex-start" } }}
            spacing={2}
          >
            <Button variant="outlined">cancel</Button>
            <Button type="submit" variant="primary">
              save
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit} noValidate >
        {/* ------------------------------------------- */}
        {/*   Name*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Typography variant="text5" mb="6px">
              Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box
              display={"flex"}
              alignItems="center"
              sx={{ flexDirection: { md: "row", xs: "column" } }}
            >
              <FormControl
                sx={ {
                  width:"100%",
                  padding: { md: "0px 20px", xs: "10px 0px" },
                }}
              >
                <Typography
                  variant="text5"
                  sx={{ display: { md: "none", xs: "flex" } }}
                >
                  First name
                </Typography>
                <OutlinedInput   required={true} defaultValue="Oliva" />
              </FormControl>
              <FormControl
                sx={{
                  width: "100%",
                  padding: { md: "0px 20px", xs: "10px 0px" },
                }}
              >
                <Typography
                  variant="text5"
                  sx={{ display: { md: "none", xs: "flex" } }}
                >
                  Last name
                </Typography>
                <OutlinedInput required={true} defaultValue="Rhye" />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/*  Email address*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              mb="6px"
              variant="text5"
            >
              Email address
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput
                  required={true}
                  defaultValue="olivia@untitledui.com"
                />
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/*   Your photo  This will be displayed on your profile.*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom">
          <Grid item xs={12} sm={12} md={5}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"space-between"}
              py={2}
            >
              <Stack direction={"column"}>
                <Typography
                  variant="text5"
                >
                  Your photo
                </Typography>
                <Typography variant="text1">
                  This will be displayed on your profile.
                </Typography>
              </Stack>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.jpg"
                sx={{ width: 64, height: 64 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
              <Stack className="boder" direction={ "column" } alignItems="center" py={ "16px" } px={ "24px" }>
                <UploadCloud />
                <Typography
                  variant="text1"
                  mt={ 2 }
                >
                  <span>Click to upload</span>or drag and drop
                </Typography>
                <Typography fontSize={ TextStyles.textSm.normal }>
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </Typography>
              </Stack>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/*   Roles*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              variant="text5"
              mb="6px"
            >
              Roles
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput
                  required={true}
                  defaultValue="Product Designer"
                />
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/*    Country*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              variant="text5"
              mb="6px"
            >
              Country
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <FormControl sx={{ width: "100%" }}>
              <CountrySelect />
            </FormControl>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/*  Timezone*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              variant="text5"
              mb="6px"
            >
              Timezone
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <FormControl sx={{ width: "100%" }}>
              <SelectedDatetime />
            </FormControl>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/*  Bio*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Stack direction={"column"}>
              <Typography
                variant="text5"
              >
                Bio
              </Typography>
              <Typography variant="text1" mb="6px">
                Write a short introduction.
              </Typography>
           </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} mb={1}>
              <SelectNormal />
              <Typography variant="h4" color={ColorStyles.gray[400]}>
                B
              </Typography>
              <Typography variant="h4" color={ColorStyles.gray[400]}>
                I
              </Typography>
              <Link2 color={ColorStyles.gray[400]} />
              <AlignJustify color={ColorStyles.gray[400]} />
              <AlignLeft color={ColorStyles.gray[400]} />
            </Stack>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                defaultValue={
                  "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design"
                }
                multiline={true}
                minRows={4}
                fullWidth
              />
              <Typography variant="text1" px={1}>
                275 characters lef
              </Typography>
            </FormControl>
          </Grid>
        </Grid>
        {/* ------------------------------------------- */}
        {/* Portfolio projects*/}
        {/* ------------------------------------------- */}
        <Grid container className="boderBottom" py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Stack direction={"column"}>
              <Typography
                variant="text5"
              >
                Portfolio projects
              </Typography>
              <Typography variant="text1" mb="6px">
                Share a few snippets of your work.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Stack className="boder" direction={"column"} alignItems= "center" py={"16px"} px={"24px"}>
              <UploadCloud />
              <Typography
                variant="text1"
                mt={2}
              >
                <span>Click to upload</span>or drag and drop
              </Typography>
              <Typography fontSize={TextStyles.textSm.normal}>
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography>
            </Stack>
            <Uploadfile
              text={"Tech design requirements.pdf"}
              mb={"200 KB"}
              icon1="file"
              icon2="check"
              value={100}
              value1={"100%"}
              background={ColorStyles.primary[600]}
              color={ColorStyles.base.white}
            />
            <Uploadfile
              text={"Dashboard recording.mp4"}
              mb={"16 Mb"}
              icon1="file"
              icon2="trash-2"
              value={50}
              background={ColorStyles.base.white}
              color={ColorStyles.gray[600]}
              value1={"40%"}
            />
            <Uploadfile
              text={"Tech design requirements.pdf"}
              mb={"200 KB"}
              icon1="file"
              icon2="trash-2"
              value={80}
              value1={"80%"}
              background={ColorStyles.base.white}
              color={ColorStyles.gray[600]}
            />

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="flex-end"
              my={3}
            >
              <Button variant="outlined">cancel</Button>
              <Button type="submit" variant="primary">
                save
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Mydetails;
