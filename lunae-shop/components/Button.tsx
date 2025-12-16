export default function Button({ text }: { text: string }) {
  return (
    <div className="m-0.5">
      <button className="md:text-xl px-4 py-1 font-bold bg-charcoal text-gunmetal drop-shadow-lg hover:cursor-pointer hover:text-white hover:scale-105 duration-300">
        {text}
      </button>
    </div>
  );
}
