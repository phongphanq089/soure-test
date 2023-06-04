import { BlockMenuTop } from '@components/Layouts';
import { TopMenus } from '@configs/menuItems';
import { AppBar, Box, Button, IconButton, List, ListItemButton, Menu, Toolbar, Typography } from "@mui/material";
import Slide from '@mui/material/Slide';
import { AlignJustify, X } from 'feather-icons-react';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";
import LogoIcon from './LogoIcon';
import UserDestop from './MenuUser/UserDestop';
import UserMobile from './MenuUser/UserMobile';
import NabarMobile from './NabarMobile';
import NavbarDesktop from './NavbarDesktop';

const Header = ( { sx, customClass, position, isMobile, session, toggleMobileSidebar, IconMenu, baseUrl } ) => {
	const router = useRouter();
	const [ OpenMenu, setOpenMenu ] = useState( null );
	const [ anchorEl, setAnchorEl ] = React.useState( null );
	const open = Boolean( anchorEl );
	const isLogined = session.status === "authenticated" ? true : false;

	const handleClick = ( event ) => {
		setAnchorEl( event.currentTarget );
		setOpenMenu( event.currentTarget );
	};
	const handleClose = () => {
		setAnchorEl( null );
		setOpenMenu( null );
	};

	/* mobile and device */
	if ( isMobile === true ) {
		return <AppBar sx={ sx } position={ position } elevation={ 0 } className={ customClass }>
			<BlockMenuTop>
				<Toolbar>
					{
						IconMenu ? <IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={ toggleMobileSidebar }
							size="large"
							sx={ {
								padding: "0 20px",
								display: {
									md: "none",
									xs: "flex",
								},
							} }
						>
							<FeatherIcon icon={ IconMenu } width="30" height="30" />
						</IconButton>
							: ""
					}
					<Box width={ "100%" } display={ "flex" } justifyContent={ "space-between" } alignItems="center">
						<LogoIcon />
						<Button aria-controls={ open ? 'basic-menu' : undefined } aria-haspopup="true" aria-expanded={ open ? 'true' : undefined } onClick={ handleClick }>
							{ OpenMenu ? <X size={ 35 } /> : <AlignJustify size={ 35 } /> }
						</Button>
					</Box>
					<Menu className='menuTopMobile' anchorEl={ anchorEl } open={ open } onClose={ handleClose } TransitionComponent={ Slide }>
						{
							TopMenus.map( ( MenuItem ) => {
								return MenuItem.children !== undefined && MenuItem.children.length > 0 ?
									<NabarMobile
										key={ MenuItem.id }
										logined={ isLogined }
										menu={ MenuItem }
										menuItems={ MenuItem.children }
									/> :
									<List key={ MenuItem.id }>
										<ListItemButton onClick={ () => router.push( MenuItem.href ) }>
											<Typography variant='h4' >
												{ MenuItem.title }
											</Typography>
										</ListItemButton>
									</List>;
							} )
						}
						{ isLogined ? <UserMobile user={ session.data.user } /> : '' }
					</Menu>
				</Toolbar>
			</BlockMenuTop>
		</AppBar>;
	}

	/* desktop */
	return (
		<AppBar sx={ sx } position={ position } elevation={ 0 } className={ customClass }>
			<BlockMenuTop>
				<Toolbar>
					<Box marginRight={ "2rem" }>
						<LogoIcon />
					</Box>
					<Box flexGrow={ 1 } />
					{
						TopMenus.map( ( MenuItem ) => {
							return MenuItem.children !== undefined && MenuItem.children.length > 0 ?
								<NavbarDesktop
									key={ MenuItem.title }
									menu={ MenuItem }
									logined={ isLogined }
									menuItems={ MenuItem.children } /> :
								<Button
									key={ MenuItem.title }
									onClick={ () => router.push( MenuItem.href ) }
									variant='linkgray'
									sx={ { whiteSpace: "nowrap" } }
								>
									{ MenuItem.title }
								</Button>;
						} )
					}
					{ isLogined ? <UserDestop user={ session.data.user } /> : '' }
				</Toolbar>
			</BlockMenuTop>

		</AppBar >
	);
};
Header.propTypes = {
	sx: PropTypes.object,
	customClass: PropTypes.string,
	position: PropTypes.string
};

export default Header;
