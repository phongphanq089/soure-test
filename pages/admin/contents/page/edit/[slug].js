import ActionButton from "@components/Admin/AcctionForm/ActionButton";
import CarEditor from "@components/CartInput/CarEditor";
import { CarInput } from "@components/CartInput/CartInput";
import CartInputSelect from "@components/CartInput/CartInputSelect";
import CheckboxGroup from "@components/CartInput/CheckBoxGroup";
import { ContainerAdmin, ContentAdmin } from "@components/Layouts";
import axiosClient from "@configs/axios";
import { OPTIONS_SELECT, OPTIONS_STATUS } from "@configs/constants";
import BlockItemForm from "@elements/AdminLayout/BlockItemForm";
import CustomBreadcrumbs from "@elements/AdminLayout/CustomBreadcrumbs";
import useForm from "@hooks/useForm";
import { Box, FormControl, Grid, Stack, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ColorStyles } from "@theme/Designs";
import Dayjs from "dayjs";
import { getCsrfToken, getProviders } from "next-auth/react";
import dynamic from 'next/dynamic';
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );

export async function getServerSideProps( context ) {

    const providers = await getProviders();
    const csrfToken = await getCsrfToken( context );
    // call API to get data
    const res = await axiosClient.get( '@/contents/pages', {
        params: {
            // fields: 'id, name, slug, description, status, meta_title, meta_keyword, meta_description, created',
            meta_fields: 'id,key,value',
            slug: context.query[ 'slug' ]
        }
    } );

    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Page List',
            link: '/admin/contents/page'
        },
        {
            label: `Edit Page: ${ res.data.name }`
        }
    ];

    // return props with fetched data
    return {
        props: {
            titlePage: `Edit Page: ${ res.data.name }`,
            providers,
            csrfToken,
            breadcrumbs,
            content: res.data
        }
    };
}

const EditPage = ( { content, csrfToken, titlePage = '', breadcrumbs } ) => {

    const { formRef, form, valid, handleChange, hanldeBlur } = useForm(
        { ...content },
        { name: true }
    );

    const [ valueDateCreated, setValueDateCreated ] = useState( Dayjs( content.created ) );

    const handleChangeCreated = ( newValue ) => {
        setValueDateCreated( newValue );
    };

    const [ valueDateModified, setValueDateModified ] = useState( Dayjs( content.modified ) );
    const handleChangeModified = ( newValue ) => {
        setValueDateModified( newValue );
    };

    const handleCheckboxChange = ( checkedItems ) => {
        console.log( checkedItems );
    };

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
        console.log( data.get( 'name' ) );
    };

    return (
        <ContainerAdmin>
            <Stack direction="column" spacing={ 0.5 } mb={ 4 }>
                <Typography variant='title1'>{ titlePage }</Typography>
                <CustomBreadcrumbs crumbList={ breadcrumbs } />
            </Stack>
            <ContentAdmin>
                <Box ref={ formRef } onSubmit={ handleSubmit } component='form' noValidate>
                    <input name="csrfToken" type="hidden" defaultValue={ csrfToken } />
                    <input name="id" type="hidden" value={ content.id } />
                    <Grid container>
                        <Grid item xs={ 12 } md={ 7 }>
                            {/* INFORMATION CONTENT */ }
                            <BlockItemForm icon="user" title="Infomation Content">
                                <FormControl fullWidth required={ true } sx={ { mb: 2 } } >
                                    <CarInput
                                        name="name"
                                        placeholder='Name'
                                        label="Name"
                                        value={ form.name }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                                    <CarInput
                                        name="slug"
                                        label="Slug"
                                        placeholder='Slug'
                                        value={ form.slug }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        size='small'
                                    />
                                </FormControl>
                                <Stack direction='column' spacing={ 1 } alignItems='start' >
                                    <Typography variant="lable1">Description</Typography>
                                    <Box
                                        border={ `1px solid ${ ColorStyles.gray[ 400 ] } ` }
                                        borderRadius='4px'
                                        width={ '100%' }>
                                        <CarEditor theme='snow' value={ content.description } />
                                    </Box>
                                </Stack>
                            </BlockItemForm>
                            {/* SEO */ }
                            <BlockItemForm icon="globe" marginY="40px" title="SEO" >
                                <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                                    <CarInput
                                        name="meta_title"
                                        label="Title"
                                        placeholder="Meta Title"
                                        value={ form.metaTitle }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                                    <CarInput
                                        name='meta_keyword'
                                        label="Keyword"
                                        placeholder='Meta Keyword'
                                        value={ form.metaKeyword }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                                    <CarInput
                                        name="meta_description"
                                        label="Description"
                                        placeholder="Meta Description"
                                        value={ form.metaDescription }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        multiline
                                        rows={ 4 }
                                    />
                                </FormControl>
                            </BlockItemForm>
                        </Grid>
                        <Grid item xs={ 12 } md={ 5 }>
                            {/* created */ }
                            <BlockItemForm icon="calendar" title="Created Date" sx={ { mx: { xs: 0, md: 3 } } }>
                                <Stack direction='column' spacing={ 1 } alignItems='start' mb={ 2 } >
                                    <Typography variant="lable1">Created</Typography>
                                    <LocalizationProvider dateAdapter={ AdapterDayjs } >
                                        <DesktopDatePicker
                                            inputFormat="MM/DD/YYYY"
                                            value={ valueDateCreated }
                                            className="select-edit-value"
                                            onChange={ handleChangeCreated }
                                            renderInput={ ( params ) => <TextField name='created' { ...params } /> }
                                        />
                                    </LocalizationProvider>
                                </Stack>
                                <Stack direction='column' spacing={ 1 } alignItems='start' mb={ 2 } >
                                    <Typography variant="lable1">Modified</Typography>
                                    <LocalizationProvider dateAdapter={ AdapterDayjs } >
                                        <DesktopDatePicker
                                            inputFormat="MM/DD/YYYY"
                                            value={ valueDateModified }
                                            className="select-edit-value"
                                            onChange={ handleChangeModified }
                                            renderInput={ ( params ) => <TextField name='modified' { ...params } /> }
                                        />
                                    </LocalizationProvider>
                                </Stack>
                            </BlockItemForm>
                            {/* status */ }
                            <BlockItemForm icon="check-square" title="Status" marginY="40px" sx={ { mx: { xs: 0, md: 3 } } }>
                                <Stack direction='column' spacing={ 1 } alignItems='start' my={ 2 } >
                                    <CheckboxGroup
                                        name='status'
                                        options={ OPTIONS_STATUS }
                                        value={ content.status }
                                        onChange={ handleCheckboxChange }
                                        title="Enabled"
                                        className="row"
                                    />
                                    <CheckboxGroup
                                        name='isLogin'
                                        options={ OPTIONS_STATUS }
                                        value={ content.isLogin }
                                        onChange={ handleCheckboxChange }
                                        title="Check Login"
                                        className="row"
                                    />
                                </Stack>
                                {/* action button */ }
                                <ActionButton href="/admin/contents/page" />

                            </BlockItemForm>
                            {/* Attribute page */ }
                            <BlockItemForm icon="paperclip" title="Attribute Page" marginY="40px" sx={ { mx: { xs: 0, md: 3 } } }>
                                <CartInputSelect
                                    label="Attribute page"
                                    options={ OPTIONS_SELECT }
                                    defaultOption="ĐỘ RỘNG"
                                />
                            </BlockItemForm>
                        </Grid>
                    </Grid>
                </Box>
            </ContentAdmin>
        </ContainerAdmin>
    );
};

export default EditPage;