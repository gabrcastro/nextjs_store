import useStore from "@/app/stores/store";
import Image from "next/image";

export default function HeaderComponent() {
  const { collapsed, toggleCollapsed } = useStore();

  return (
    <div className="w-full h-[100px] bg-blue-700 flex justify-between items-center px-20">
      <p className="text-white font-bold text-3xl">
        MKS<span className="text-xl font-light ml-3">Store</span>
      </p>
      <button 
        className="h-max w-max py-2 px-5 justify-center items-center flex flex-row bg-white rounded-lg hover:cursor-pointer hover:brightness-125"
        onClick={toggleCollapsed}>
        <Image
          src="/icons/cart_icon.svg"
          alt="Cart Icon"
          width={20}
          height={20}
        />
        <span className="text-black font-bold text-xl ml-4">{collapsed ? 1 : 0}</span>
      </button>
    </div>
  );
}
