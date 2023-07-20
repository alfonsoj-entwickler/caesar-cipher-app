import Image from "next/image";
import InputNumber from "@/components/InputNumber";
import CipherTextArea from "@/components/CipherTextArea";
import PlaintTextArea from "@/components/PlaintTextArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10 lg:p-24">
      <Image
        width={100}
        height={100}
        src="/caesar.svg"
        alt="ceaser logo"
        className="mb-4"
      />
      <h1 className="text-4xl md:text-6xl lg:text-8xl mb-10 font-bold text-center text-[#CFB53B]">
        Caesar Cipher App
      </h1>
      <div className="h-[65vh] lg:h-[55vh] w-full flex flex-col lg:flex-row items-center gap-4">
        <CipherTextArea />
        <div className="w-full md:w-2/3 lg:w-1/5 my-4 lg:my-0">
          <InputNumber />
        </div>
        <PlaintTextArea />
      </div>
    </main>
  );
}
