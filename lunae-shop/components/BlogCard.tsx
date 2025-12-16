import Button from "./Button";

export default function BlogCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    /**Style out the blog card vertical bit wider than product card */
    <div className="flex flex-none w-72 md:w-md flex-col p-2 bg-gunmetal drop-shadow-md">
      <img src="public/next.svg" alt="Blog image" className="w-full h-40" />
      <h1 className="text-charcoal text-left font-bold md:text-2xl">{title}</h1>
      <p className="text-gray-400 text-left md:text-lg">{description}</p>
      <div className="text-right">
        <Button text="VIEW MORE" />
      </div>
    </div>
  );
}
