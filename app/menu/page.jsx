"use client";
import Header from "../components/header";
import GridLgCard from "../components/gridLgCard";

export default function Menu() {
  return (
    <div>
      <Header></Header>
      <div className="grid gap-4 grid-cols-2 grid-rows-3 bg-farm bg-cover bg-current py-14 px-36 h-[85vh]">
        <GridLgCard
          title="Lorem Ipsum"
          imageUrl="https://cdn.kastatic.org/ka-perseus-graphie/412c1dd8a2eaa4b5fa3160a87194c6301534c56d.svg"
          imageAlt="imagem-de-grafico"
          lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo consectetur possimus,
          facere officia quo ducimus tempora at obcaecati saepe quam quis odit cumque est voluptate!"
          sizeOrderImg="3 order-first"
          sizeOrderLorem="2 order-last"
        ></GridLgCard>
        <GridLgCard
          title="Lorem Ipsum"
          imageUrl="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJVxolSJAaNeTSEyUuNmXAbEqDqq45am6287gGo1MMTz0PlvgH0noaswhQ9uS09gaeoN1QSLaVQmRe7LophhMrGvYFH4J2npnDthJnGYQ&usqp=CAE"
          imageAlt="cafe-imagem"
          lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo consectetur possimus,
          facere officia quo ducimus tempora at obcaecati saepe quam quis odit cumque est voluptate,
          magnam officiis consequuntur ipsam!"
          sizeOrderImg="2 order-last"
          sizeOrderLorem="3 order-first"
        ></GridLgCard>
        <div className="bg-zinc-200 rounded-lg">
          <h1>Fazendas</h1>
        </div>
        <div className="bg-zinc-200 rounded-lg">
          <h1>Fazendas</h1>
        </div>
      </div>
    </div>
  );
}
