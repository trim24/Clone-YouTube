import React from 'react'

function Video(props) {
    const { imgUrl, title, videoId, description, channelTitle, handleSelect } = props
    return ( 
    <>
         <div className={`d-flex`} onClick={() => handleSelect(videoId)}>
            
            <div className='row'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4' style={{ height: "80px" }}>
                    <img src={imgUrl} className='list-image ' style={{ width: "100%" }} />
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8'>
                    <div className=''>
                        
                            <p className='list-heading 'style={{fontSize: 12}}>{title}</p>
                        
                            <p className='list-description' style={{fontSize: 5}}>{channelTitle}</p>
                            <p className='list-description' style={{fontSize: 8}}>{description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </> 
    );
}

export default Video;