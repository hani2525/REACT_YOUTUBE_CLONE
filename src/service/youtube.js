class Youtube {
    constructor(key) {
        this.key = 'AIzaSyCcmMsnLwiSW3nuZFj8E9Q3nc1XXxay764';
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=${this.key}`,
        this.getRequestOptions
        );
      const result = await response.json();
      return result.items;
    }

    async search(query){
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${this.key}`,
       this.getRequestOptions
       );
      const result = await response.json();
      return result.items.map(item => ({ ...item, id: item.id.videoId }));    }
}

export default Youtube;