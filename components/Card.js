import Image from "next/image";
import Link from "next/link";

import Styles from "../styles/Card.module.css";

export default function createHeaderRoute({ pokemon }) {
  return (
    <div className={Styles.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={Styles.id}>#{pokemon.id}</p>
      <h3 className={Styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={Styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}
