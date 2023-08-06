import "./app.css";
import { TwitterFollowCard } from "./assets/TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        initialIsFollowing
        userName="midudev"
        name="Miguel Ángel Durán"
      />

      <TwitterFollowCard
        initialIsFollowing={false}
        userName="santi_kong19"
        name="Santiago Diaz"
      />
      <TwitterFollowCard
        initialIsFollowing={false}
        userName="josevidrio"
        name="Jose Luis"
      />

  

      
    </section>
  );
}
