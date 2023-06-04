import CarEditor from '@components/CartInput/CarEditor';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'react-quill/dist/quill.bubble.css';
import { ColorStyles, TextStyles } from '../../../theme/Designs';
import ButtonPlan from '../ButtonPlan';
import { BasicPlan, Business_plan, Enterprise_plan } from '../dataSocialMarketing';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );

const Content = styled.div`
 box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
 padding : 32px;
 max-width: 384px;
 height : fit-content;
 margin : auto;
 position : relative;
`;
const PlanDesktop = () => {
    const session = useSession();
    return (
        <Grid container item xs={ 12 } md={ 12 } >
            { BasicPlan.map( ( itemPlans, index ) => (
                <Grid item xs={ 12 } md={ 4 } marginTop={ "96px" } key={ index }>
                    <Content   >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={ 1 }
                            textAlign="center"

                        >
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='banner'>{ itemPlans.Money }</Typography>
                                    :
                                    <Typography variant='bannerQuill'
                                        sx={ {
                                            ".quill .ql-container .ql-editor ": {
                                                padding: " 1px 0"
                                            },
                                        } }
                                    >
                                        <CarEditor value={ itemPlans.Money } field='' />
                                    </Typography>
                            }
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='body6'>{ itemPlans.heading }</Typography>
                                    :
                                    <Typography variant='body6Quill'
                                    >
                                        <CarEditor value={ itemPlans.heading } field='' />
                                    </Typography>
                            }
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='body7'>{ itemPlans.descriptions }</Typography>
                                    :
                                    <Typography variant='body7Quill'
                                    >
                                        <CarEditor value={ itemPlans.descriptions } field='' />
                                    </Typography>
                            }

                        </Stack>

                        <Box margin={ "32px 0 40px 0" } >
                            { itemPlans.List_item.map( ( item, index ) => (
                                <Stack key={ index }
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={ 1.2 }
                                    mb={ 1.6 }

                                >
                                    <Image src={ item.icon } alt="icon" width={ 24 } height={ 24 } />
                                    {
                                        session.status !== "authenticated" ?
                                            <Typography variant='body7'>{ item.item }</Typography>
                                            :
                                            <Typography variant='body7Quill'
                                                sx={ {} }
                                            >
                                                <CarEditor value={ item.item } field='' />
                                            </Typography>
                                    }
                                </Stack>
                            ) ) }
                        </Box>
                        <ButtonPlan>Get Started</ButtonPlan>
                    </Content>
                </Grid>
            ) ) }
            { Business_plan.map( ( itemPlans, index ) => (

                <Grid item xs={ 12 } md={ 4 } marginTop={ "96px" } key={ index }  >

                    <Content>
                        <Box
                            width={ "100%" }
                            height={ "44px" }
                            backgroundColor={ "#EDFCF2" }
                            position={ "absolute" }
                            top={ "-44px" }
                            left={ "0" }
                            textAlign={ "center" }
                        >
                            <Typography fontSize={ TextStyles.textSm.medium } color={ ColorStyles.primary[ 700 ] } lineHeight="44px">Most popular plan</Typography>
                        </Box>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={ 1 }
                            textAlign="center"

                        >
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='banner'>{ itemPlans.Money }</Typography>
                                    :
                                    <Typography variant='bannerQuill'
                                        sx={ {
                                            ".quill .ql-container .ql-editor ": {
                                                padding: " 1px 0"
                                            },
                                        } }
                                    >
                                        <CarEditor value={ itemPlans.Money } field='' />
                                    </Typography>
                            }
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='body6'>{ itemPlans.heading }</Typography>
                                    :
                                    <Typography variant='body6Quill'
                                    >
                                        <CarEditor value={ itemPlans.heading } field='' />
                                    </Typography>
                            }
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='body7'>{ itemPlans.descriptions }</Typography>
                                    :
                                    <Typography variant='body7Quill'
                                    >
                                        <CarEditor value={ itemPlans.descriptions } field='' />
                                    </Typography>
                            }
                        </Stack>
                        <Box margin={ "32px 0 40px 0" } >
                            { itemPlans.List_item.map( ( item, index ) => (
                                <Stack key={ index }
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={ 1.2 }
                                    mb={ 1.6 }
                                >
                                    <Image src={ item.icon } alt="icon" width={ 24 } height={ 24 } />
                                    {
                                        session.status !== "authenticated" ?
                                            <Typography variant='body7'>{ item.item }</Typography>
                                            :
                                            <Typography variant='body7Quill'
                                                sx={ {} }
                                            >
                                                <CarEditor value={ item.item } field='' />
                                            </Typography>
                                    }
                                </Stack>
                            ) ) }
                        </Box>
                        <ButtonPlan>Get Started</ButtonPlan>
                    </Content>
                </Grid>
            ) ) }
            { Enterprise_plan.map( ( itemPlans, index ) => (
                <Grid item xs={ 12 } md={ 4 } marginTop={ "96px" } key={ index } >
                    <Content >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={ 1 }
                            textAlign="center"
                        >
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='banner'>{ itemPlans.Money }</Typography>
                                    :
                                    <Typography variant='bannerQuill'
                                        sx={ {
                                            ".quill .ql-container .ql-editor ": {
                                                padding: " 1px 0"
                                            },
                                        } }
                                    >
                                        <CarEditor value={ itemPlans.Money } field='' />
                                    </Typography>
                            }
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='body6'>{ itemPlans.heading }</Typography>
                                    :
                                    <Typography variant='body6Quill'
                                    >
                                        <CarEditor value={ itemPlans.heading } field='' />
                                    </Typography>
                            }
                            {
                                session.status !== "authenticated" ?
                                    <Typography variant='body7'>{ itemPlans.descriptions }</Typography>
                                    :
                                    <Typography variant='body7Quill'
                                    >
                                        <CarEditor value={ itemPlans.descriptions } field='' />
                                    </Typography>
                            }
                        </Stack>
                        <Box margin={ "32px 0 40px 0" } >
                            { itemPlans.List_item.map( ( item, index ) => (
                                <Stack key={ index }
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={ 1.2 }
                                    mb={ 1.6 }
                                >
                                    <Image src={ item.icon } alt="icon" width={ 24 } height={ 24 } />
                                    {
                                        session.status !== "authenticated" ?
                                            <Typography variant='body7'>{ item.item }</Typography>
                                            :
                                            <Typography variant='body7Quill'
                                                sx={ {} }
                                            >
                                                <CarEditor value={ item.item } field='' />
                                            </Typography>
                                    }
                                </Stack>
                            ) ) }
                        </Box>
                        <ButtonPlan>Get Started</ButtonPlan>
                    </Content>
                </Grid>
            ) ) }
        </Grid>
    );
};

export default PlanDesktop;