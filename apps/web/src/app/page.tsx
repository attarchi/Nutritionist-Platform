import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-dark-outline-green mb-4">
        Welcome to Mansouri Nutritionist Platform
      </h1>
      <p className="text-dark-gray">
        Professional platform for nutritionists to manage client diets and track progress.
      </p>
    </div>
  );
}
