import { Nav } from "@components/Nav/Nav";
import { Player } from "@components/Player/Player";
import { Sidebar } from "@components/Sidebar/Sidebar";
import styles from "./layout.module.css"

export default function CategoryLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Nav />
           {children}
            <Sidebar />
            <Player />
          </main>
        </div>
      </div>
    );
  }