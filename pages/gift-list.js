import { AiOutlineAmazon } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "gift-list",
});

export default function GiftList({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Gift List" backgroundClass="backgroundAlt">
      <section id="#gift-list">
        <div className="section-background gift-list">
          <div className="container">
            <h1 className="textOverlay-container">Gift List</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="d-flex h-100 flex-column justify-content-center">
                  <p>
                    Thank you so much for looking at our Gift List page. You can
                    see we have produced 2 lists; one for John Lewis and one for
                    Amazon. Please take your pick!
                  </p>
                  <p>
                    Alternatively, if you prefer, we&apos;d also be delighted to
                    receive a gift voucher for either Marks and Spencer or
                    Amazon.
                  </p>
                  <p> With Love &amp; Thanks,</p>
                  <p> Anna &amp; Ian XXX</p>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="d-flex h-100 flex-column justify-content-center">
                  <a
                    href="https://www.amazon.co.uk/wedding/ian-james-anna-mainley-drotwich-july-2022/registry/1KF8W86I9QK7C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100 py-2 td-none"
                  >
                    <div className="card whatsOnCard accomCard mx-auto text-black">
                      <h3 className="h1">
                        <AiOutlineAmazon />
                      </h3>
                      <p className="ps-2 pe-2">Go To Our Amazon List</p>
                    </div>
                  </a>
                  <a
                    href="https://www.johnlewis.com/wish-list/HVRWTTK?tmcampid=7&tmad=c&s_share=jlappios_wishlist_bmV0LndoYXRzYXBwLldoYXRzQXBwLlNoYXJlRXh0ZW5zaW9u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100 py-2 td-none"
                  >
                    <div className="card whatsOnCard accomCard mx-auto text-black">
                      <h3 className="h1">
                        <JohnLewisLogo />
                      </h3>
                      <p className="ps-2 pe-2">Go To Our John Lewis List</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

const JohnLewisLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="-16.65 -17.5 144.3 105"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#000"
        d="M111 0H41v70h70zM38 0H27v70h11zM19 0h-5v70h5zM3 0H0v70h3z"
      />
      <path
        d="M57.4053 12.6398h1.273v7.611c0 .854-.047 1.81-.661 2.473-.301.316-.67.519-1.105.605-.022-.018-1.181-1.181-1.181-1.181.344-.004.704.022 1.03-.112.228-.088.389-.244.483-.467.118-.222.161-.734.161-1.464zm9.8174 1.0855c-1.018 0-1.854.318-2.509.955-.655.637-.983 1.45-.983 2.439 0 .96.329 1.757.986 2.394.657.637 1.481.955 2.468.955.993 0 1.82-.325 2.484-.974.664-.649.996-1.458.996-2.426 0-.943-.332-1.735-.996-2.378-.664-.643-1.478-.965-2.446-.965m-.051-1.209c1.375 0 2.52.435 3.434 1.305.914.87 1.371 1.961 1.371 3.273 0 1.311-.462 2.397-1.384 3.256-.923.86-2.086 1.29-3.49 1.29-1.341 0-2.458-.43-3.351-1.29-.892-.859-1.34-1.936-1.34-3.231 0-1.329.451-2.428 1.35-3.298.899-.87 2.036-1.305 3.41-1.305m16.284 9.02h-1.273v-3.871h-5.203v3.871h-1.274v-8.895h1.274v3.873h5.203v-3.873h1.273zm13.0424 0h-1.096l-6.216-6.851v6.851h-1.196v-8.895h1.031l6.267 6.909v-6.909h1.21zm-38.8305 19.133v-1.154h-4.197v-7.791h-1.284v8.945zm10.0595 0v-1.154h-4.487v-2.781h4.237v-1.154h-4.237v-2.702h4.369v-1.154h-5.653v8.945zm11.1202-8.945h-1.218l-2.478 6.165-2.467-6.165h-1.284l3.619 9.024h.249l2.964-7.319 2.94 7.319h.249l3.631-9.024h-1.271l-2.441 6.165zm11.3647.0007h-1.286v8.944h1.286zm7.2363 5.218l-.974-.591c-.61-.373-.996-.745-1.273-1.091-.289-.358-.433-.798-.433-1.268 0-.704.244-1.277.733-1.716.489-.439 1.14-.652 1.922-.652.823 0 1.431.21 2.054.629v1.454c-.644-.62-1.338-.931-2.081-.931-.418 0-.761.097-1.03.291-.269.193-.403.447-.403.749 0 .268.065.49.262.724.199.234.551.507.991.765l1.014.578c1.091.652 1.6 1.481 1.6 2.488 0 .718-.248 1.309-.729 1.756-.48.448-1.096.688-1.864.674-.882-.017-1.672-.262-2.414-.824v-1.626c.691.876 1.492 1.295 2.4 1.295.402 0 .736-.093 1.002-.316.267-.223.412-.503.412-.839 0-.545-.404-1.061-1.189-1.549M53.0928 51.5773c0 .106.042.229.128.369.086.14.184.261.298.362.169-.103.303-.209.402-.315.1-.106.15-.231.15-.374 0-.132-.046-.242-.139-.33-.093-.088-.212-.132-.358-.132-.128 0-.242.039-.337.118-.096.078-.144.179-.144.302m-.569 2.5c0 .155.059.286.178.393.12.106.261.159.425.159.278 0 .571-.134.881-.403l-.832-.932c-.204.129-.363.256-.479.38-.116.123-.173.257-.173.403m1.064-3.624c.37 0 .679.104.925.314.246.209.369.477.369.803 0 .236-.073.455-.22.658-.147.204-.372.406-.674.604l.666.77c.196-.196.376-.453.541-.77h.88c-.231.556-.527 1.011-.887 1.367l.974 1.1h-1.211l-.447-.51c-.245.203-.481.35-.709.438-.228.089-.5.134-.817.134-.391 0-.72-.118-.989-.354-.268-.236-.402-.525-.402-.867 0-.285.097-.54.29-.765.193-.226.468-.434.823-.626-.169-.212-.292-.405-.371-.577-.078-.172-.118-.348-.118-.526 0-.353.129-.64.388-.862.258-.221.587-.331.989-.331m7.4747 2.081c.25 0 .444-.058.585-.172.14-.114.21-.283.21-.508 0-.446-.287-.669-.86-.669h-.639v1.349zm.232-2.081c.454 0 .822.132 1.105.394.283.262.425.6.425 1.014 0 .419-.143.757-.43 1.017-.287.259-.665.387-1.134.387h-.902v2.034h-.937v-4.846zm3.8989 2.9551h1.564l-.818-1.918zm1.222-2.955l2.139 4.846h-.988l-.503-1.18h-2.154l-.468 1.18h-.981l1.997-4.846zm4.9216 2.0673c.246 0 .438-.062.578-.184.14-.123.21-.29.21-.503 0-.222-.069-.388-.208-.498-.139-.109-.337-.165-.593-.165h-.583v1.35zm.212-2.067c.456 0 .827.126 1.113.378.287.252.43.581.43.985 0 .275-.07.515-.213.72-.142.204-.353.365-.633.483.155.083.293.197.413.34.12.143.27.386.448.725.295.587.515.992.659 1.214h-1.044c-.073-.106-.169-.276-.292-.509-.268-.516-.465-.864-.59-1.043-.124-.179-.244-.306-.36-.381-.116-.075-.248-.114-.399-.114h-.34v2.047h-.936v-4.845zm5.609.7316v4.114h-.936v-4.114h-1.72v-.732h4.377v.732zm6.9554-.732h.915v4.846h-.805l-2.895-3.438v3.438h-.916v-4.846h.822l2.879 3.382zm3.8127.732v1.273h2.101v.731h-2.101v1.377h2.244v.733h-3.181v-4.846h3.132v.732zm5.5837 1.3354c.245 0 .437-.062.577-.184.14-.123.21-.29.21-.503 0-.222-.069-.388-.208-.498-.139-.109-.337-.165-.593-.165h-.583v1.35zm.211-2.067c.456 0 .827.126 1.114.378.286.252.43.581.43.985 0 .275-.071.515-.214.72-.142.204-.353.365-.633.483.155.083.293.197.413.34.12.143.27.386.448.725.295.587.515.992.659 1.214h-1.044c-.072-.106-.169-.276-.292-.509-.268-.516-.464-.864-.589-1.043-.125-.179-.245-.306-.361-.381-.116-.075-.248-.114-.399-.114h-.34v2.047h-.936v-4.845zm5.0273-.0629c.472 0 .926.118 1.362.354v.833c-.501-.303-.946-.455-1.335-.455-.235 0-.42.045-.552.137-.133.092-.2.213-.2.366 0 .183.123.352.371.506.07.047.336.176.801.389.398.187.685.395.861.624.175.229.263.504.263.825 0 .417-.15.752-.449 1.008-.3.256-.687.384-1.164.384-.31 0-.576-.034-.8-.103-.222-.068-.472-.185-.75-.352v-.922c.518.429 1.006.644 1.463.644.23 0 .414-.05.556-.149.14-.099.211-.231.211-.395 0-.224-.122-.407-.367-.548-.204-.111-.466-.244-.788-.399-.381-.174-.667-.376-.855-.607-.189-.231-.282-.499-.282-.804 0-.407.151-.732.454-.974.303-.241.703-.362 1.2-.362"
        fill="#fff"
      />
    </g>
  </svg>
);
