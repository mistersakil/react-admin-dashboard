import "./footer.css";
import { EmojiFoodBeverage } from "@material-ui/icons";
export default function Footer() {
  return (
    <div className="footer">
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()}, Octapia.
      </p>
      <p className="coffee">
        <a
          target="_blank"
          href="https://www.upwork.com/o/companies/~011335ddde8074293a/"
        >
          Buy me a coffee
        </a>
        <EmojiFoodBeverage className="icon" />
      </p>
    </div>
  );
}
