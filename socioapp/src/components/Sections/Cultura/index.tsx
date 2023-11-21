import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Cultura() {

    return(

        <div id="cultura" className="flex flex-col p-10 gap-5">

            <Section title="Cultura e Identidade" text="A cultura quilombola é marcada por expressões artísticas, religiosas e gastronômicas únicas, contribuindo para a riqueza do mosaico cultural brasileiro. A preservação da identidade é um valor central, transmitido por gerações como parte fundamental da herança dessas comunidades." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
