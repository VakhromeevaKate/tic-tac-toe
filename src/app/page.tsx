import styles from "./page.module.css";
import Game from "@/app/components/Game";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            TIC-TAC-TOE
          </h1>
        </div>
        <div>
          <Game />
        </div>
      </main>
    </div>
  );
}
