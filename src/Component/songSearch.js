import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./loader";
import SongDetails from "./songDetails";
import SongForm from "./songForm";
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      // console.log(artistUrl,songUrl);

      setLoading(true);

      const [artistRest, songRest] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      // console.log(artistRest,songRest)

      setBio(artistRest);
      setLyric(songRest);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };
  return (
    <div>
      <h2>Sonido</h2>
      <article className="resposive-designe-song">
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
      </article>
    </div>
  );
};

export default SongSearch;
