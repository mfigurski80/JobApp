import * as xlsx from 'xlsx';
import { AiOutlineDownload, AiOutlineUpload } from 'react-icons/ai';

// import scoped css
import './UpDownload.css'

type UpDownloadProps = {
  content: string;
  setContent: (content: string) => void;
}

export default function UpDownload({ content, setContent }) {

  const handleDownload = () => {
    const wb = xlsx.utils.book_new()
    const ws = xlsx.utils.json_to_sheet(content)
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1')
    xlsx.writeFile(wb, 'jobapps.xlsx')
  }

  return (
    <div id="updown-container">
      <button onClick={handleDownload}>
        <AiOutlineDownload />
      </button>
      { /*<input type="file" onChange={console.log}
        accept=".xlsx, .xls, .csv, .txt"
        /> */ }
    </div>
  )
}
