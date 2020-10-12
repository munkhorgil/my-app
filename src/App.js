import React, { useState } from "react";
import Comments from "./Comments";
import Header from "./Header";
import { getComments, validURL } from "./util";
import Sounds from "./Sounds";

function App() {
  const [comments, setComments] = useState([]);
  const [url, setUrl] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentSong, setCurrentSong] = useState("");

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const result = await getComments(currentSong);

      setComments(result);
      setLoading(false);
    };

    if (currentSong) {
      fetch();
    }
  }, [currentSong]);

  const handleSubmit = () => {
    if (url.length === 0 || !validURL(url)) {
      return alert("Please enter a valid URL");
    }

    const videoId = url.split("v=")[1];

    setCurrentSong(videoId);
    setPlaying(true);
  };

  const handleType = (value) => {
    return setUrl(value);
  };

  return (
    <section className="wrapper">
      <h1>Late Night Vibes</h1>
      <Header
        url={url}
        playing={playing}
        onType={handleType}
        onSubmit={handleSubmit}
      />
      <Sounds />
      <div className="tabWrapper">
        <Comments loading={loading} items={comments} />
      </div>
    </section>
  );
}

export default App;
