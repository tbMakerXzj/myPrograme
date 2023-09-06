import ModuleWrapper from "../../component/moduleWrapper";

// import ModuleWrapper from "@/pages/component/moduleWrapper";
import style from "./index.module.css";

const Css2Component = () => {
  return (
    <>
      <ModuleWrapper width={450}>
        <h2>多行文本溢出</h2>
        <p className={style.single}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          labore corporis similique quos necessitatibus voluptatem cupiditate
          fugiat deleniti earum omnis! Quidem eum dignissimos obcaecati officia
          ratione eius aut quis placeat tempora earum, exercitationem
          voluptatibus ducimus iste itaque error nobis. Deleniti minus fugit
          sint dolores corrupti itaque, doloremque atque distinctio repudiandae
          debitis laborum laudantium consequatur voluptatum inventore voluptate
          perspiciatis quas ea! Itaque illo officiis magnam natus, corrupti
          commodi ipsa quia eius cum laudantium cumque dicta, saepe in a quod ea
          sed? Doloremque blanditiis at voluptatibus iste expedita ut eius
          quaerat officiis deleniti hic quo labore eligendi, quod dolorum
          numquam optio quisquam?
        </p>
        <p className={style.multi}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil
          quibusdam quod quo nesciunt asperiores nisi quae molestias laudantium,
          doloribus veritatis neque saepe nemo rerum non laboriosam ipsam?
          Dolore quisquam, ea ullam cum exercitationem mollitia provident.
          Recusandae enim aperiam minus neque praesentium soluta debitis eveniet
          ullam dicta, cum repellat provident voluptas. Quisquam voluptatibus
          veritatis eos! Architecto saepe, modi possimus ea vitae aperiam
          temporibus sed dolorem, quae minus labore. Et ab libero non incidunt,
          ea, minima itaque, maiores ipsam qui soluta deserunt reiciendis
          necessitatibus adipisci. Molestiae quis quaerat quas iusto rerum!
          Suscipit reprehenderit ullam officia tempora molestiae modi accusamus
          quo animi.
        </p>
      </ModuleWrapper>
      <ModuleWrapper>
        <div className={style.container}>
          <div className={style.left}>left</div>
          <div className={style.right}>right</div>
        </div>
      </ModuleWrapper>
      <ModuleWrapper>
        <button className={style.borderBtn}>边框按钮</button>
      </ModuleWrapper>
      <ModuleWrapper>
        <div className={style.container1}>
          <div className={style.drop}></div>
          <div className={style.drop}></div>
          <div className={style.drop}></div>
          <div className={style.drop}></div>
          <div className={style.boxWrapper}>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
          </div>
          <div className={style.cup}></div>
        </div>
        {/* <div className={style.container2}>
        </div> */}
      </ModuleWrapper>
    </>
  );
};

export default Css2Component;
