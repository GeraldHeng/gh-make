import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="hero">
        <Navbar />
      </div>
      <div>Second section</div>
    </div>
  );
}
