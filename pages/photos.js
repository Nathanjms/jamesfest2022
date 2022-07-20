import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import StyledDropzone from "../components/Dropzone";
import { withSessionSsr } from "../lib/withSession";
import PhotoGallery from "../components/PhotoGallery";

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
    },
  };
});

export default function Photos({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }

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
                  share, we would love to see them! Please upload them below.
                </p>
                <p>
                  You can see all the uploaded pictures in the section below!
                </p>
                <form name="dropzoneForm" id="dropzoneForm">
                  <StyledDropzone />
                </form>
              </div>
            </div>
            <PhotoGallery />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
