import DefaultLayout from "../components/layouts/DefaultLayout";
import { newsItems } from "../components/data/newsItems";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "news",
});

export default function Music({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  const NewsArticle = ({ title, date, content }) => {
    return (
      <div className="row customCard mx-auto shadow">
        <h2 className="h3">{title}</h2>
        <h3 className="h5 mb-4 text-muted">{date}</h3>
        <div className="col-md-12">{content}</div>
      </div>
    );
  };
  return (
    <DefaultLayout title="News">
      <div id="#music" className="section">
        <div className="container">
          <h1 className="pb-5 color-primary">News</h1>
          <div className="text-start">
            {[...newsItems].reverse().map((newsItem, index) => (
              <NewsArticle
                key={index}
                title={newsItem.title}
                date={newsItem.date}
                content={newsItem.content}
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}