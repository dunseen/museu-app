import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2022 Museu Inseto UFRA.</p>

      <ul>
        <li>
          <a
            href="https://pt-br.facebook.com/UFRAOficial/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsFacebook size={"25"} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ufraoficial/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsInstagram size={"25"} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/UfraOficial?s=20&t=ycti-n6SFrQY7x5sXd8ipg"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsTwitter size={"25"} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
