const { REACT_APP_API_KEY } = process.env;

const fetchData = async (tokenQuery) => {
  const playlistID = tokenQuery.queryKey[1].playlistID;
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems
?part=contentDetails
&part=snippet
&part=id
&maxResults=50
&pageToken=${tokenQuery.queryKey[1].nextPageToken}
&playlistId=${playlistID}
&key=${REACT_APP_API_KEY}`
    );
    return await res.json();
  } catch (err) {
    throw new Error("Not a valid playlist ID or URL");
  }
};

export default fetchData;
