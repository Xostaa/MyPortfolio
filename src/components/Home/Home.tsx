import style from "./Home.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <div className={style.content}>
      <div className={style.title}>
        <div>
          <p>
            Hello! 👋🏻 <br /> My name is Denis.
          </p>
        </div>
        <div className={style.imagebox}>
          <Image
            className={style.imgProgramis}
            src="/Illustration.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className={style.moreDetailed}>
        <p>
          As Confucius wisely noted, &quot;Choose a job you love, and you will never
          have to work a day in your life.&quot; Embracing this philosophy, I&apos;ve
          pursued Frontend development with passion. I&apos;m Denis, with expertise
          in Next.js and React. My GitHub serves as an open resource: study the
          code, draw inspiration, and feel free to reach out with any questions!
        </p>
      </div>

      <div className={style.contact}>
        <h1>Как со мной связаться:</h1>
        <p>Тут будет данные</p>
      </div>
    </div>
  );
}
