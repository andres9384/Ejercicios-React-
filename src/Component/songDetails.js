import Message from "./message";
import SongArtist from "./songArtist";
import SongLyric from "./songLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.err || lyric.error || lyric.name === "AbortError" ? (
        <Message
        contenti={`Error: No existe la cancion "<em>${search.song}</em>"`}
          color="#ffc107 "
        />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
        contenti={`Error: No existe el artista  "<em>${search.artist}</em>"`}
          color="#ffc107 "
        />
      )}
    </>
  );
};

export default SongDetails;
