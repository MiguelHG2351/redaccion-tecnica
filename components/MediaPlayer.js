import styles from "components/styles/media_player";

export default function MediaPlayer() {
    return (
        <>
            <div className="media-player">
                <video src="/videos/video.webm" controls></video>
            </div>
            <style jsx>
              { styles }
            </style>
        </>
    );
}
