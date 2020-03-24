import React, { Fragment } from 'react'
import ContentLoader from "react-content-loader";
const ImageBoxLoader = props => (
    <ContentLoader height={400} width={250}
    speed={2}
        {...props}
    backgroundColor="#333333"
    foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="5" ry="5" width="400" height="400" />
    </ContentLoader>
)
const cardListTemplate = () => {
    return (
        <div className='row'>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-6 ">
                <div className='character-card-loader'>
                    <ImageBoxLoader />
                </div>
            </div>
           

        </div>
    )
}
export default cardListTemplate