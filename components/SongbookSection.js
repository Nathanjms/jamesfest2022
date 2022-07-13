import { FaGuitar } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

export const SongbookSection = ({ background }) => {
  return (
    <section id="songbook" className={`${background} py-4`}>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h2 className="h3 pb-2">Singalong Songbook</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              Click the buttons below to see the songbook for our Community
              Singalong.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <a
              href="/singalong/JamesFestSingalongWords.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-100 py-2 td-none h-100 text-dark"
            >
              <div className="card whatsOnCard mx-auto h-100">
                <h3 className="h1">
                  <GrGroup />
                </h3>
                <p className="px-2">Download the Signalong Version</p>
              </div>
            </a>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <a
              href="/singalong/JamesFestSingalongChords.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-100 py-2 td-none h-100"
            >
              <div className="card whatsOnCard mx-auto h-100 text-dark">
                <h3 className="h1">
                  <FaGuitar />
                </h3>
                <p className="px-2">Download the Chords Version</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
