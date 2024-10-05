import Image from "next/image";
import Container from "./component/layers/layers/Container";
import Navbar from "./component/layers/layers/Navbar";
import Profile from "./component/layers/layers/Profile";
import Check from "./component/layers/layers/Check";

export default function Home() {
  
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[url('../public/bg.png')] bg-cover bg-center">
        <Container className='pt-[70px]'>
          <div className="flex gap-3 items-start">
            <Navbar />
            <Profile />
            <Check />
          </div>
        </Container>
      </div>
    </>
  );
}
