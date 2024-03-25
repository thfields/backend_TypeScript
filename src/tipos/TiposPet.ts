import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = {
    id: Number;
    nome: String;
    especie: EnumEspecie;
    dataDeNascimento: Date;
    adotado: Boolean;
}

export default TipoPet;