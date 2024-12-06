import Image from "next/image";
import logo from '/assets/logo.png';

export default function Logo() {
    return (
      <div className="text-center mb-8">
        <Image src={logo} alt="Logo" width={300} height={40} />
      </div>
    );
  }
  