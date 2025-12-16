import Button from "./Button";

export default function ProductCard({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className=" flex-none w-48 flex-col p-2 m-2 bg-gunmetal drop-shadow-md hover:scale-105 duration-300">
      {/* Image placeholder */}
      <h1 className=" text-charcoal font-bold text-left">{title}</h1>
      <p className="text-gray-400 text-left">{description}</p>
      <div className="text-right">
        <Button props={price} />
      </div>
    </div>
  );
}
