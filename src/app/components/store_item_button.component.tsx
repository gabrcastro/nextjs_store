import Image from "next/image";

export default function StoreItemButtonComponent(params: { id: number }) {
  return (
    <div className="flex flex-row bg-blue-700 h-14 w-full justify-center items-center align-bottom hover:bg-blue-800">
      <Image
        src="/icons/shopping-bag.svg"
        alt="Shopping Bag"
        width={25}
        height={25}
      />
      <p className="ml-4 text-white text-2xl font-medium">COMPRAR</p>
    </div>
  );
}
