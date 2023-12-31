import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Zumbi.png";

export default function Zumbi() {

    return(

        <div id="zumbi" className="flex flex-col p-10 gap-5">

            <Section title="Zumbi dos Palmares" text="Zumbi dos Palmares foi um dos líderes mais emblemáticos do quilombo dos Palmares, o maior e mais duradouro quilombo formado por comunidades de africanos escravizados fugitivos no Brasil colonial. Aqui estão alguns pontos importantes sobre Zumbi e o Quilombo dos Palmares." image={true} src={PovoQuilomba} desc="Zumbi dos Palmares, primeiro herói da independência do Brasil" alt="Foto do povo quilomba"/>

        </div>
    );
};
