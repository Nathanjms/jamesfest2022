import DefaultLayout from "../components/layouts/DefaultLayout";
import StyledDropzone from "../components/Dropzone";
import { withSessionSsr } from "../lib/withSession";

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req?.session?.user;
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login#upload",
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

export default function Upload() {
  return (
    <DefaultLayout title="Gift List" backgroundClass="backgroundAlt">
      <section id="gift-list">
        <div className="section-background gift-list">
          <div className="container">
            <h1 className="textOverlay-container">Gift List</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 d-flex flex-column justify-content-center">
                <p>
                  Thank you so much for looking at our Gift List page. You can
                  see we have produced 2 lists; one for John Lewis and one for
                  Amazon. Please take your pick!
                </p>
                <p>
                  Alternatively, if you prefer, we&apos;d also be delighted to
                  receive a gift voucher for either Marks and Spencer or Amazon.
                </p>
                <p> With Love &amp; Thanks,</p>
                <p className="mb-md-0"> Anna &amp; Ian XXX</p>
              </div>
              <div className="col-12">
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
