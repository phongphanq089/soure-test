import { PoliciesMenus, SitemapMenus } from "@configs/menuItems";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ColorStyles, TextStyles } from "@theme/Designs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
	const router = useRouter();

	return (
		<Box sx={ { bgcolor: "#1D2939" } } mt={ 7 } padding="23px 0">
			<Container maxWidth="lg" >
				<Grid container alignItems="flex-start" justifyContent="center">

					<Grid item xs={ 12 } md={ 3 } lg={ 4 } padding={ "40px 0" }>
						<Image src="/logo_footer.svg" width={ 142 } height={ 32 } alt="Logo" />
					</Grid>

					<Grid item xs={ 12 } md={ 4 } lg={ 4 } mb="32px">
						<Grid container alignItems="flex-start" justifyContent="center" spacing={ 1 }>
							<Grid item xs={ 12 } sm={ 6 } md={ 7 }>
								<Typography mb={ 2 } fontSize={ TextStyles.textSm.medium } color={ ColorStyles.gray[ 400 ] }>
									Sitemap
								</Typography>
								{ SitemapMenus && SitemapMenus.map( ( sitemap, index ) => (
									<Link key={ index } href={ sitemap.url } style={ { textDecoration: "none" } }>
										<Typography fontSize={ TextStyles.textMd.medium } color={ ColorStyles.gray[ 200 ] } paragraph>
											{ sitemap.title }
										</Typography>
									</Link>
								) ) }
							</Grid>

							<Grid item xs={ 12 } sm={ 6 } md={ 5 }>
								<Typography mb={ 2 } fontSize={ TextStyles.textSm.medium } color={ ColorStyles.gray[ 400 ] }>
									Social
								</Typography>
								<Typography fontSize={ TextStyles.textMd.medium } color={ ColorStyles.gray[ 200 ] } paragraph>
									Facebook
								</Typography>
								<Typography fontSize={ TextStyles.textMd.medium } color={ ColorStyles.gray[ 200 ] } paragraph>
									Twitter
								</Typography>
								<Typography fontSize={ TextStyles.textMd.medium } color={ ColorStyles.gray[ 200 ] } paragraph>
									Youtube
								</Typography>
							</Grid>

						</Grid>
					</Grid>
					<Grid item xs={ 12 } md={ 5 } lg={ 4 }>
						<Typography fontSize={ TextStyles.textSm.bold } color={ ColorStyles.base.white } mb={ 2 }>
							Stay up to date
						</Typography>
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={ 2 }>
							<TextField className="subscribe" size="small" hiddenLabel={ true } placeholder="Enter Your Email" sx={ { backgroundColor: "#fff", borderRadius: "10px" } } />
							<Button variant="primary">
								Subscribe
							</Button>
						</Stack>
					</Grid>
				</Grid>

				<Grid container borderTop="1px solid" borderColor={ ColorStyles.gray[ 600 ] } mt={ 2 }>
					<Grid item xs={ 12 } sm={ 7 } md={ 8 } mt={ 4 }>
						<Typography fontSize={ TextStyles.textSm.normal } color={ ColorStyles.gray[ 400 ] } paragraph>
							{ "© 2022 DealershipONE. All rights reserved." }
						</Typography>
					</Grid>
					<Grid item xs={ 12 } sm={ 5 } md={ 4 } mt={ 4 } textAlign="right">
						<Stack direction="row" spacing={ 4 } >
							{ PoliciesMenus && PoliciesMenus.map( ( menuFooter, index ) => (
								<Link key={ index } href={ menuFooter.url } style={ { textDecoration: "none" } }>
									<Typography
										variant={
											router.pathname == menuFooter.url
												? "footerMenu1_acive"
												: "footerMenu1"
										}
										fontSize={ TextStyles.textSm.normal } color={ ColorStyles.gray[ 400 ] }
									>
										{ menuFooter.title }
									</Typography>
								</Link>
							) ) }
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
