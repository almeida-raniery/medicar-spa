import { useMedicationApi } from "../../providers/MedicationProvider"

function DownloadButton({patientId}){
  const {getLeaflet} = useMedicationApi();

  function onDownload(){
    getLeaflet(patientId)
  }

  return (
    <button onClick={onDownload}>Download</button>
  )
}

export default DownloadButton