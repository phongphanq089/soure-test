import SocialItem from '@components/socialItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BlockItemPageMobile = ( { data, isLogin } ) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider { ...settings }>
            { data !== undefined && data.map( ( item, index ) => (
                <SocialItem
                    key={ index }
                    image={ item.image }
                    text={ item.description }
                    button='Learn more'
                    reverse='inherit'
                    href={ "#" }
                />
            )
            ) }
        </Slider>
    );
};

const BlockItemPage = ( { mdDown, data, isLogin } ) => {

    if ( mdDown === true ) return <BlockItemPageMobile data={ data } isLogin={ isLogin } />;

    return (
        <>
            { data !== undefined && data.map( ( item, index ) => (
                <SocialItem
                    key={ index }
                    isLogin={ isLogin }
                    image={ item.image }
                    text={ item.description }
                    reverse={ item.reverse }
                    href={ "#" }
                />
            )
            ) }
        </>
    );
};

export default BlockItemPage;