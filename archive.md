//11월 18일 
*** popular 목록 API 이용해서 받아와서 보여주기
map 오류가 났었는데 undefined 오류면 넘어오는 데이터가 없어서 생긴다는 오류다.
그렇기 때문에 어디서 못받아오는지 확인했다.
-> App.jsx에서 fetch할 때 setVideos에 넣어줄 때 items가 아닌 item으로 오타를 적어서 아무것도 못 가져온거다.

//11월 18일

*8.6 검색 기능 UI 구현하기
search header 추가 방법 -> App 컴포넌트에서 비디오 목록 위에 보여줘야 한다.
