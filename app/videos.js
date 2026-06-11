export default function Videos() {
  const videos = [
    {
      id: 'gufNBgt_Iyr-LCxQ', // YouTube video ID
      title: 'IFRS Basics',
      description: 'Introduction to IFRS standards'
    },
    {
      id: 'gufNBgt_Iyr-LCxQ',
      title: 'ML in Finance',
      description: 'Machine learning applications'
    }
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Videos</h1>
      {videos.map((video) => (
        <div key={video.id} style={{ marginBottom: '40px' }}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allowFullScreen
            style={{ marginBottom: '20px' }}
          ></iframe>
        </div>
      ))}
    </div>
  );
}