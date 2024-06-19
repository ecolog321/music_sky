import { Nav } from "../Nav/Nav";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import { CenterBlock } from "./CenterBlock/CenterBlock";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav></Nav>
          <CenterBlock></CenterBlock>
          <Sidebar></Sidebar>
          <Player></Player>
        </main>
      </div>
    </div>
  );
};
