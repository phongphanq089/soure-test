import CarEditor from '@components/CartInput/CarEditor';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'react-quill/dist/quill.bubble.css';
import arrow from "../../../public/muiten.svg";
import FormLogin from '../../components/LayoutSocial-Marketing/FormLogin';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );


const BannerContent = styled.div`
@media only screen and (max-width: 850px) {
    div {
       margin : auto;
       text-align : center;
    }
  }
`;

const ContentImg = styled.div`
@media only screen and (max-width: 1200px) {
        div {
            left : 8%;
        }
    }
    @media only screen and (max-width: 750px) {
    display : none;
    }   
`;
const BannerSocialMarketing = () => {

    const session = useSession();
    return (
        <Grid container spacing={ 0 } sx={ {
            my: 9.5,
            mx: 'auto',
            position: "relative",
            px: 4,
            zIndex: 999,

            maxWidth: ( theme ) => theme.breakpoints.values.lg
        } }>
            < Grid item md={ 6 } lg={ 7 } xs={ 12 } >
                <BannerContent>
                    <Box sx={ {
                        maxWidth: "489px",
                        minHeight: "fit-content",
                        marginTop: "108px"
                    } }>
                        {
                            session.status !== "authenticated" ?
                                <Typography sx={ { display: 'inline-block' } } variant='banner' color='#fff' marginBottom={ '32px' }>
                                    Super simplified customer service
                                </Typography>
                                :
                                <Typography variant='bannerQuill'
                                    sx={ {
                                        ".ql-editor, .ql-snow * ": {
                                            color: "#fff"
                                        },
                                        ".quill .ql-container .ql-editor ": {
                                            padding: "14px 0"
                                        },
                                    } }
                                >
                                    <CarEditor value={ "Super simplified customer service" } field='' />
                                </Typography>
                        }
                        {
                            session.status !== "authenticated" ?
                                <Typography sx={ { display: 'inline-block' } } variant='body1' color='#fff' marginBottom={ "48px" }>
                                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
                                </Typography>
                                :
                                <Typography
                                    variant='body1Quill' marginBottom={ "48px" }
                                    sx={ {
                                        display: 'inline-block',
                                        ".ql-editor, .ql-snow * ": {
                                            color: "#fff"
                                        },
                                    } }
                                >
                                    <CarEditor value={ "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more." } field='' />
                                </Typography>
                        }

                        <ContentImg>
                            <Box sx={ {
                                position: "relative",
                                bottom: "3rem",
                                left: "60%",
                                width: "100%",
                                zIndex: "-1"
                            } }>
                                <Image src={ arrow } alt="" />
                            </Box>
                        </ContentImg>
                    </Box>
                </BannerContent>


            </ Grid>
            < Grid item md={ 6 } lg={ 5 } xs={ 12 }>

                <Box sx={ {
                    maxWidth: " 413px",
                    height: "600px",
                    backgroundColor: "#fff",
                    margin: "auto",
                    padding: "32px 0",
                    textAlign: "center",
                    borderRadius: "10px"
                } }>
                    <FormLogin />
                </Box>

            </ Grid>

        </Grid>

    );
};

export default BannerSocialMarketing;