import styled from "styled-components";

const FadeInText = styled.h1`
    font-size: 100px;
    font-weight: 700;
    opacity: 0.85;
    color: black;
    font-family: 'cwTeXKai';
    font-style: normal;
    src: url(//fonts.gstatic.com/ea/cwtexkai/v3/cwTeXKai-zhonly.eot);
    src: url(//fonts.gstatic.com/ea/cwtexkai/v3/cwTeXKai-zhonly.eot?#iefix) format('embedded-opentype'),
        url(//fonts.gstatic.com/ea/cwtexkai/v3/cwTeXKai-zhonly.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/cwtexkai/v3/cwTeXKai-zhonly.woff) format('woff'),
        url(//fonts.gstatic.com/ea/cwtexkai/v3/cwTeXKai-zhonly.ttf) format('truetype');


    span{
        margin: 0px 7px;
    }

    span:nth-child(1){
        color: white;
    }
    span:nth-child(2){
        color: white;
    }
    span:nth-child(3){
        margin: 0px 7px;
    }

`


export default FadeInText