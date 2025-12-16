export default function Button({ props: text }: { props: string }) {
  return (
    <div className="m-0.5">
      <button className="px-4 py-1 font-bold bg-charcoal text-gunmetal drop-shadow-lg hover:cursor-pointer hover:text-white hover:scale-105 duration-300">
        {text}
      </button>
    </div>
  );
}
