import Button from "./button";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="m-5 text-5xl">SGF</h1>
        <div className="ml-5">
          <Button name={"Home"} link={"https://youtube.com"} />
          -
          <Button name={"Culturas"} link={"https://youtube.com"} />
          -
          <Button name={"Notícias"} link={"https://youtube.com"} />
        </div>
        <h1 className="m-5 text-5xl opacity-5">SGF</h1>
      </div>
    </div>
  );
}
