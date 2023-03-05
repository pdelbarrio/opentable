import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
    </main>
  );
}
