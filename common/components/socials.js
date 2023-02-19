import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-col mt-40">
      <div className="flex justify-between">
        <h1 className="uppercase">follow us on instagram</h1>
        <button className="uppercase">follow us</button>
      </div>

      <div className="flex justify-center items-center space-x-14">
        <small>prev</small>
        {/* carousel */}
        <div className="flex mt-10">
          <Image src="/top.jpg" alt="crop top" width={250} height={200} />
          <Image src="/top.jpg" alt="crop top" width={250} height={200} />
          <Image src="/top.jpg" alt="crop top" width={250} height={200} />
        </div>
        <small>next</small>
      </div>
    </div>
  );
}
