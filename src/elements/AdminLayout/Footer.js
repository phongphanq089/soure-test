import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
    return (
        <Box className="footer-admin" sx={ { py: 2, textAlign: 'center' } } >
            <Typography variant="text5">
                © 2022 All rights reserved by{ ' ' }
                <Link href='https://dealershipone.com'>
                    dealershipone.com
                </Link>{ ' ' }
            </Typography>
        </Box>
    );
};

export default Footer;