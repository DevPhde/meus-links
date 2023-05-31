import "./App.css"
import linkedinImage from "./assets/linkedin.png"
import githubImage from "./assets/github.png"
import downloadImage from "./assets/download.png"
function App() {
  const handleDownload = () => {
    fetch('/cv.pdf')
      .then(response => response.blob())
      .then(blob => {

        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement('a');
        link.href = url;
        link.download = 'DIEGO_BAUMBACH_CV.pdf';
        link.click();

        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="mt-5 border rounded margin-control bg-white">
          <div className="d-flex justify-content-center">
            <h2 className="mt-5">Meus Links</h2>
          </div>
          <div className="mt-5 d-flex justify-content-center flex-wrap">
            <section className="text-center m-2"><img src={linkedinImage} alt="linkedin img" className="p-1 rounded-circle" /><a href="https://www.linkedin.com/in/diego-baumbach-a24444238/" className="font">Linkedin</a></section>
            <section className="text-center m-2"><img src={githubImage} alt="linkedin img" className=" rounded-circle" /><a href="https://github.com/DevPhde" className="font">Github</a></section>
          </div>
          <div className="my-4">
          <section className="text-center m-2"><button className="btn btn-dark icon p-1 ps-4" onClick={handleDownload}>Baixar Currículo</button></section>
          </div>
        </div>

    </>
  )
}

export default App
