import CarEditor from '@components/CartInput/CarEditor';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'react-quill/dist/quill.bubble.css';
import { ColorStyles } from '../../theme/Designs';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );


const ContentService = ( { icon, header, description, item, reverse, image } ) => {
    const session = useSession();
    return (
        <Grid container item xs={ 12 } md={ 12 } flexDirection={ reverse } marginTop={ "48px" } >
            <Grid item xs={ 12 } md={ 6 } my={ "auto" }>
                <Box
                    display={ "flex" }
                    flexDirection={ "column" }
                    alignItems={ "flex-start" }
                >
                    <Image src={ icon } alt="" width={ 48 } height={ 48 } />

                    {
                        session.status !== "authenticated" ?
                            <Typography variant='body5' mt={ "24px" } mb={ "16px" }>{ header }</Typography>
                            :
                            <Typography variant='body5Quill' mt={ "24px" } mb={ "16px" }>
                                <CarEditor value={ header } field='' />
                                
                            </Typography>
                    }
                    {
                        session.status !== "authenticated" ?
                            <Typography variant='body3' color={ ColorStyles.gray[ 500 ] } > { description }</Typography>
                            :
                            <Typography variant='body3Quill'
                                sx={ {
                                    ".quill .ql-container .ql-editor": {
                                        textAlign: "left"
                                    },
                                    ".ql-editor, .ql-snow * ": {
                                        color: ColorStyles.gray[ 500 ]
                                    },
                                } }
                            >
                                <CarEditor value={ description } field='' />
                            </Typography>
                    }
                </Box>
                <Box
                    padding={ "0 16px" }
                    mt={ "32px" }
                >
                    {
                        item.map( ( i, index ) => {
                            return (
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={ 2 }
                                    marginBottom={ "20px" }
                                    key={ index }
                                >
                                    <Image src={ i.checkSvg } alt="" width={ 28 } height={ 28 } />
                                    {
                                        session.status !== "authenticated" ?
                                            <Typography variant='body1'>{ i.description }</Typography>
                                            :
                                            <Typography variant='body1Quill'>
                                                <CarEditor value={ i.description } field='' />
                                            </Typography>
                                    }
                                </Stack>
                            );
                        } )
                    }
                </Box>
            </Grid>
            <Grid item xs={ 12 } md={ 6 } textAlign={ "center" } >
                <Box >
                    <Image src={ image } alt='' width={ 544 } height={ 512 } />
                </Box>
            </Grid>
        </Grid>
    );
};

export default ContentService;