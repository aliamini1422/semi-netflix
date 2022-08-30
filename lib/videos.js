import videos from "./VideosData.json";

export const getVideos = () => {
  //   return videos.map((video) => {
  //     return {
  //       id: video.id,
  //       title: video.title,
  //       imgUrl: video.imgUrl,
  //     };
  //   });
  return videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      imgUrl: video.imgUrl,
    };
  });
};
