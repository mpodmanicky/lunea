import Button from "./Button";

export default function ProductCard({
  image_link,
  title,
  description,
  price,
}: {
  image_link: string;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="flex-none w-72 md:w-md flex-col p-2 bg-gunmetal drop-shadow-md transition-transform duration-200 ease-out hover:translate-y-2 hover:shadow-lg">
      {/* Image placeholder replaced with real picture image_link*/}
      <img src="src/assets/react.svg" alt="Product image" className="w-full" />
      <h1 className=" text-charcoal font-bold text-left md:text-2xl">
        {title}
      </h1>
      <p className="text-gray-400 text-left md:text-lg">{description}</p>
      <div className="text-right">
        <Button text={price} />
      </div>
    </div>
  );
}
