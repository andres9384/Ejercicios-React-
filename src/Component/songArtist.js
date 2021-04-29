const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDeadYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      {artist.strWebsite === "" ? (
        ""
      ) : (
        <a
          href={`http://${artist.strWebsite}`}
          target="_blank"
          rel="noreferrer"
        >
          Sitio Web oficial{" "}
        </a>
      )}

      <p>{artist.strBiographyES}</p>
    </section>
  );
};

export default SongArtist;
