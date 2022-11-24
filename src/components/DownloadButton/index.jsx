function DownloadButton(){
  function onDownload(){
    console.log("starting download...")
  }

  return (
    <button onClick={onDownload}>Download</button>
  )
}

export default DownloadButton