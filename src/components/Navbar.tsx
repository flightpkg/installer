import styles from "../styles/components/navbar.module.css";
import Image from "next/image";
import FlightLogo from "../assets/FlightLogo.svg";

export default function Navbar() {
    return (
      <div className={styles.navbar}>
        <div className={styles.branding}>
          <Image
            src={FlightLogo}
            className={styles.img}
            height={100}
            width={200}
            draggable={false}
          />
        </div>
        <div className={styles.socials}>
          <a href="/github">
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    );
}