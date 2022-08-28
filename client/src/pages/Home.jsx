
import HomeCard from "../components/HomeCard";
import NavbarCompo from "../components/NavbarComponent";

function Home() {
  return (
    <div className="HomeContainer">
      <NavbarCompo />
      <section>
        <HomeCard/>
      </section>
    </div>
  );
}

export default Home;
