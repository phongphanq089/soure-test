/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import {
    Box,
    Button,
    CardActionArea,
    CircularProgress,
    Typography,
    useFormControl,
} from "@mui/material";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { Edit, UploadCloud } from "react-feather";
import { triggerEvent } from ".";
// import banner from "../../../public/banner.png";
import axiosClient from "@configs/axios";
import { isURL } from "@configs/Vaildate";
import Image from "next/image";

export const CarInputFile = ( { label, note, value, image, ...props } ) => {
    const { focused, filled, required } = useFormControl() || {};
    // const [focus, setFocus] = useState(false);


    const defaultImage = image;
    const [ preview, setPreview ] = useState( defaultImage );
    const fileRef = useRef();
    const attachmentRef = useRef();
    // const value = props.value ? props.value : "";

    useEffect( () => {
        async function readImage() {
            if ( value != "" && isURL( value ) ) {
                const image = await axiosClient.get( "@/readImage", {
                    params: { image: value },
                } );
                triggerEvent( attachmentRef.current, {
                    event: "change",
                    value: JSON.stringify( image ),
                } );
                setPreview( image.file );
            }
        }

        readImage();
    }, [ value ] );

    const handleChangeFile = ( event ) => {
        const files = Array.from( event.target.files );
        if ( files.length > 0 ) {
            setPreview( <CircularProgress color="inherit" /> );
            const [ file ] = files;
            const fileReader = new FileReader();
            fileReader.readAsDataURL( file );
            fileReader.onload = async ( e ) => {
                triggerEvent( attachmentRef.current, {
                    event: "change",
                    value: JSON.stringify( {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        file: e.target.result,
                    } ),
                } );

                setPreview( e.target.result );
            };
        }
    };

    const handleRemoveImage = () => {
        setPreview( defaultImage );
        fileRef.current.value = "";
        attachmentRef.current.value = "";
    };

    return (
        <>
            <Box
                height={ "100%" }
                position={ "relative" }>
                <Button type="submit" value="Upload File"
                    sx={ {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        zIndex: 100,
                    } } >
                    <UploadCloud
                        color={ "#fbbf24" }
                        size={ 40 }
                        style={ {
                            cursor: "pointer",
                            display: preview !== defaultImage ? "flex" : "none",
                        } }
                    // onClick={ handleRemoveImage }
                    />
                </Button>

                <Box
                    height={ "100%" }
                >
                    <CardActionArea
                        sx={ {
                            height: "100%",
                            img: {
                                objectFit: "cover"
                            }
                        } }
                    >
                        <Image
                            src={ _.isString( preview ) ? preview : "" }
                            height={ 500 }
                            width={ 500 }
                            style={ { width: '100%', height: '100%' } }
                            alt=""
                        />
                    </CardActionArea>
                </Box>
                <Button
                    onClick={ () => fileRef.current && fileRef.current.click() }
                    sx={ {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        zIndex: 100,
                        display: preview !== defaultImage ? "none" : "flex",
                    } }
                >
                    <Edit
                        color={ "#fff" }
                        fill="#ef4444"
                        size={ 40 }
                        style={ {
                            cursor: "pointer",
                        } }
                    />
                </Button>
            </Box>
            <textarea
                ref={ attachmentRef }
                style={ { display: "none" } }
                name={ props.name }
                onChange={ props.onChange }
            />
            <input
                ref={ fileRef }
                type="file"
                accept="image/*"
                hidden
                onChange={ handleChangeFile }
            />
            { note !== undefined && (
                <Typography variant="label1" mt={ 0.5 } mb={ 0 } paragraph>
                    { note }
                </Typography>
            ) }
        </>
    );
};
