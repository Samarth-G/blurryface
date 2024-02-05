import React, { useRef } from 'react';

const Upload: React.FC = () => {
  const videoSrcRef = useRef<HTMLSourceElement>(null);
  const videoTagRef = useRef<HTMLVideoElement>(null);
  const inputTagRef = useRef<HTMLInputElement>(null);

  const readVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (videoSrcRef.current && videoTagRef.current) {
          console.log('loaded');
          videoSrcRef.current.src = e.target?.result as string;
          videoTagRef.current.load();
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <input type="file" accept="video/*" id="input-tag" ref={inputTagRef} onChange={readVideo} />
      <hr />
      <video controls id="video-tag" ref={videoTagRef}>
        <source id="video-source" src="" ref={videoSrcRef} />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Upload;
