import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    //mount 되었을 때 Youtube api를 통해서 Youtube 동영상 목록을 가져온다. (postman 사용)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyCcmMsnLwiSW3nuZFj8E9Q3nc1XXxay764",
     requestOptions)
      .then(response => response.json()) //반응을 json으로 변환
      .then(result => setVideos(result.items)) //result item에 있는 애들을 setVideos에 업데이트 --> items를 가져오기!
      .catch(error => console.log('error', error)); //에러 나오면 콘솔에 에러 출력
  }, []); //텅 빈 배열을 두번째 인자로 넣어줬을 때는 mount 되었을 때만 호출한다.

  return <VideoList videos={videos}/>;
}

export default App;
