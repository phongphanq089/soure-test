import { Avatar, Box, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Progressbar from "../sliderbars/progressbar";

const Uploadfile = ({
  text,
  icon1,
  icon2,
  mb,
  value,
  background,
  color,
  value1,
}) => {
  return (
    <Box className="UploadFile" >
      <Stack direction="row" alignItems={ "center" } justifyContent = "space-between" spacing ={2} >
        <Avatar sx={{ background: ColorStyles.primary[100] }}>
          <FeatherIcon icon={icon1} color={ColorStyles.primary[600]} />
        </Avatar>
        <Box width={"100%"}>
          <Stack direction={"column"}>
            <Typography variant="text5">{ text }</Typography>
            <Typography variant="text1">{ mb }</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            width={ "100%" }
          >
            <Box width={ "100%" }>
              <Progressbar value={value} />
            </Box>
            <Typography>{value1}</Typography>
          </Stack>
        </Box>
        <Avatar sx={{ background: background, width: "20px", height: "20px" }}>
          <FeatherIcon icon={icon2} color={color} />
        </Avatar>
      </Stack>
      </Box>
  );
};

export default Uploadfile;
