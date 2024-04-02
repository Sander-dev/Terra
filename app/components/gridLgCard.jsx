export default function gridLgCard(props) {
  return (
    <div className="bg-zinc-200 rounded-lg row-span-2 ">
      <h1 className="text-center m-3 text-xl">{props.title}</h1>
      <div className="grid grid-cols-5 mx-4 ">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className={`col-span-${props.sizeOrderImg}`}
        />
        <p className={`pt-3 mx-5 col-span-${props.sizeOrderLorem}`}>
          {props.lorem}
        </p>
      </div>
    </div>
  );
}
