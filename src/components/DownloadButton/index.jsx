function DownloadButton({ patientId }) {
  return (
    <a
      href={`https://bula.vercel.app/pdf?id=${patientId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download
    </a>
  );
}

export default DownloadButton;
