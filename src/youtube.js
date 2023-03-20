import React, { useState } from "react";

import axios from 'axios'
import Input from "./common/input.component";
import Button from "./common/button.component";
import Logo from "./images/youtube2.png"
import VideoList from "./common/videoList.component";
import VideoPlayer from "./common/videoPlayer.component";
import "./App.css"

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [videoId, setVideoId] = useState('');

  const video = videos.find(video => video.id.videoId === videoId);
  const handleSearch = async (e) => {

    e.preventDefault();

    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const key = 'AIzaSyBaEBn1hJ9ayJXIqZXIWu6dnD6wG31Z9NQ';
    const type = 'video';
    const part = 'snippet';

    const { data } = await axios.get(`${baseUrl}?key=${key}&type=${type}&maxResults=20&part=${part}&q=${searchQuery}`)
    setVideos(data.items)
  }
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="d-flex col-12 col-sm-12 col-lg-12">
            <div className='col-4 col-sm-4 col-lg-4'>
              <img src={Logo} alt="" style={{ width: '150px', height: '45px' }} />
            </div>

            <form className="d-flex" onSubmit={handleSearch}>
              <div className='col-6 col-sm-6 col-lg-6'>
                <Input
                  onChange={e => { setSearchQuery(e.target.value) }}
                  className="input"
                  value={searchQuery}
                />
              </div>

              <div className='col-2 col-sm-2 col-lg-2'>
                <Button
                  className="btn btn-primary mx-3 "
                  text="Search"

                  style={{

                    padding: "5px",
                    fontSize: "20px",

                  }}
                />
              </div>
            </form>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md- col-lg-8">
            <VideoPlayer
              videoId={videoId}
              title={video?.snippet?.title || ''}
              description={video?.snippet?.description || ''}
              channelTitle={video?.snippet?.channelTitle || ''}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-4">
            <VideoList handleSelect={Id => { setVideoId(Id) }} videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Youtube;
