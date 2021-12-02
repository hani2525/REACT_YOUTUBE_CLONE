import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); //처음에는 선택된 것이 없으니 null
  
  const selectVideo = (video) => { //selectVideo가 호출되면 전달된 video를 selectedVideo 값으로 넣어준다.
    setSelectedVideo(video);
  };
  
  const search = useCallback(query => {
    youtube
    .search(query)
    .then(videos => { setVideos(videos);
      setSelectedVideo(null);
    });
  }, [youtube]);

  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]); //텅 빈 배열을 두번째 인자로 넣어줬을 때는 mount 되었을 때만 호출한다.

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        { //조건연산자로 조건문 사용-> selectedVideo가 있다면 videoDetail에 video 값으로 selectedVideo를 넣어준다.
        selectedVideo && (<div className={styles.detail}>
           <VideoDetail video={selectedVideo}/>
        </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid'} /> 
        </div>
      </section>
    </div>
  );//videoList에서 video가 selectVideo를 실행시킨다.
}

export default App;
