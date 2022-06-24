import Image from "next/image";

import Styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={Styles.about}>
      <h1>Sobre o PokeNext</h1>
      <p>
        Labore nostrud ullamco laborum sunt. Pariatur aute qui deserunt deserunt
        id reprehenderit amet. Adipisicing reprehenderit ad sit ut culpa ipsum
        culpa pariatur magna laboris duis eiusmod enim sunt.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
