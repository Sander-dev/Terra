export default function Button({ link, name }) {
  return (
    <button
      type="button"
      className="inline-block rounded px-6 pb-[6px] pt-2
      text-xs font-medium uppercase leading-normal  m-2 text-black transition duration-150
      ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300
      focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300
      active:text-neutral-200 motion-reduce:transition-none dark:hover:bg-neutral-600
      dark:focus:bg-neutral-600 bg-zinc-50"
      data-twe-ripple-init
      onClick={link}
    >
      {name}
    </button>
  );
}
