import Navbar from "../components/Navbar";
import styles from "../styles/pages/index.module.css";
import InstallerExample from "../assets/installer_example.svg";
import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

export default function Index() {
  // Count
  const [c, setC] = useState(0); // set progress percentage
  // If Clicked Install Button
  const [cl, setCl] = useState(false)

  function install() {
    if (cl) return;
     setCl(true);
    setC(c +1)
  }
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <h1>
            swift, reliable, multi-language
            <br />
            package manager.
          </h1>
          <p>The only package manager you’ll ever need.</p>
          <a onClick={() => install()}>
            <span>{!cl ? `Install` : `Installing`}</span>
            <i className="ri-arrow-right-line"></i>
          </a>
          {c > 0 ? <ProgressBar progress={c}/>: <></>}
        </div>
        <div className={styles.right}>
          <Image src={InstallerExample} className={styles.img} draggable={false} />
        </div>
      </div>
    </>
  );
}
