export default function Footer({ children, footerAlt }) {
  return (
    <footer>
      <div className={"text-center" + (footerAlt ? " alt" : "")}>
        <small>
          Website Created by{" "}
          <a
            href="https://nathanjms.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            NathanJms
          </a>
        </small>
      </div>
    </footer>
  );
}
