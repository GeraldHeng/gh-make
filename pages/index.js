import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="hero">
        <Navbar />
        <div className="grid grid-cols-3 px-40 pt-20 gap-12">
          <div className="flex flex-col justify-center col-span-2">
            <p className="text-pale-white text-lg">Hi I am Gerald Heng!</p>
            <p className="text-pale-white text-5xl font-black">
              I <span className="text-accent">design and build</span> things for
              the internet.
            </p>
            <p className="text-pale-white text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et leo
              nunc. Nulla consequat lorem non volutpat pulvinar. Maecenas
              vestibulum lacus nec dui gravida, ut molestie orci placerat. Morbi
              at ex congue, tincidunt quam malesuada{" "}
            </p>
          </div>
          <div>
            <Image
              src="/images/happy_face.svg"
              height={280}
              width={280}
              alt="happy face"
            />
          </div>
        </div>
      </div>
      <div>Second section</div>
    </div>
  );
}
