export default interface Tanque {
    idTanque: string;
    calidad?: string;
    peso?: number;
    fechaEsperadaRetorno?: Date | string;
    idEtiqueta?: number;
    foto?: string;
}