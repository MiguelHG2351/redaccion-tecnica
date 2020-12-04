import styles from "components/styles/media_player";

export default function MediaPlayer({video_url}) {

    return (
        <>
            <div className="media-player">
                <video src={video_url} controls></video>
            </div>
            <style jsx>
              { styles }
            </style>
        </>
    );
}
