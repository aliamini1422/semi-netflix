import { useRouter } from "next/router";
import styles from "../../styles/Video.module.css";
import Modal from "react-modal";
import NavBar from "../../components/nav/NavBar";
import clsx from "classnames";

Modal.setAppElement("#__next");

const videoId = () => {
  const router = useRouter();
  const videoId = router.query.videoId;
  const video = {
    title: "Hi cute dog",
    publishTime: "1990-9-12",
    description:
      " ciis perspiciatis, obcaecati, suscipit magni, culpa consequuntur adipisci harum voluptatibus debitis. a big red dog has own story Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quo itaque consequatur a assumenda et architecto possimus distinctio inventore, quam maxime excepturi, at nihil. Optio eum at eos officiis? ",
    channelTitle: "Paramount Picture",
    viewCount: 1000,
  };
  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = video;
  return (
    <div className={styles.container}>
      <NavBar />
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameborder="0"
        ></iframe>

        {/* <div className={styles.likeDislikeBtnWrapper}>
          <div className={styles.likeBtnWrapper}>
            <button onClick={handleToggleLike}>
              <div className={styles.btnWrapper}>
                <Like selected={toggleLike} />
              </div>
            </button>
          </div>
          <button onClick={handleToggleDislike}>
            <div className={styles.btnWrapper}>
              <DisLike selected={toggleDisLike} />
            </div>
          </button>
        </div> */}
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default videoId;
