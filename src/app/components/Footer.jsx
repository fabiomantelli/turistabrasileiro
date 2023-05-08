import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <hr className="border-1" />
      <div>
        <p className="text-gray-700 text-xs text-center p-4">
          Copyright &copy; 2023 Turista Brasileiro. Todos os direitos
          reservados.
        </p>
        <div className="flex justify-evenly p-4">
          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaGoogle />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
