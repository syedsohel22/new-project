// components/HomeCard.jsx

import Image from "next/image";

interface HomeCardProps {
  title: string;
  description: string;
  imagePath: string;
}

export default function HomeCard({
  title,
  description,
  imagePath,
}: HomeCardProps) {
  return (
    <div className="block bg-white rounded-2xl shadow-md hover:shadow-xl mb-2 p-4 transition w-full sm:w-72">
      <div className="flex flex-col items-center text-center">
        <Image
          src={imagePath}
          alt={title}
          className="w-full h-40 object-contain mb-4"
          width={800}
          height={400}
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
