import DefaultLayout from "../components/layouts/DefaultLayout";
import StyledDropzone from "../components/Dropzone";
import { withSessionSsr } from "../lib/withSession";

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req?.session?.user;
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login#photos",
      },
    };
  }
  return {
    props: {
      user,
      folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
    },
  };
});

export default function Photos() {
  return (
    <DefaultLayout title="Photos" backgroundClass="backgroundAlt">
      <section id="photos">
        <div className="section-background photos">
          <div className="container">
            <h1 className="textOverlay-container">Photos</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row customCard mx-auto shadow">
              <div className="col-12 d-flex flex-column justify-content-center">
                <p>
                  If you have any photos of the day that you would like to
                  share, please upload them below.
                </p>
                <form name="dropzoneForm" id="dropzoneForm">
                  <StyledDropzone />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
