const { REACT_APP_API_KEY } = process.env;

const fetchData = async (tokenQuery) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems
?part=contentDetails
&part=snippet
&part=id
&maxResults=50
&pageToken=${tokenQuery.queryKey[1].nextPageToken}
&playlistId=PLwtwwDbdYBn5N0ZpTTc0BrTvqe1Jxj0rs
&key=${REACT_APP_API_KEY}`
  );
  return await res.json();
};

export default fetchData;
