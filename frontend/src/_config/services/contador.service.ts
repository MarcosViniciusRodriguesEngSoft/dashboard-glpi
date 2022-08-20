import { Api } from "../api";
import { IContadorFullDTO } from "../base/contador.service";
import { IAxiosResponseCustom } from "../models/http.model";

export const useContadorService = () => {
	const resourceURL = 'dashboard';

	const Contadores = (
	): Promise<IAxiosResponseCustom<IContadorFullDTO>> =>
		Api.get(`${resourceURL}/contador`);

	/*const findCustom = (
		predicate: Predicate = new Predicate()
	): Promise<AxiosResponse<PageableResponse<ICobrancaCustomDTO>>> => {
		return http.get(`${resourceURL}/custom`, formatHttpParams(predicate));
	};

	const findCheckout = (
		codigoPedido: string,
		token: string
	): Promise<AxiosResponse<ICobrancaPagarMeDTO>> => {
		return http.get(`${resourceURL}/checkout?codigoPedido=${codigoPedido}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
	};

	const findStatus = (
		cobrancaId: number,
		token: string
	): Promise<AxiosResponse<string>> => {
		return http.get(`${resourceURL}/checkout/status?cobrancaId=${cobrancaId}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
	};

	const pagarme = (
		cobrancaPagarMeDTO: ICobrancaPagarMeDTO,
		token: string
	): Promise<AxiosResponse<ICobrancaPagarMeDTO>> => {
		return http.post(`${resourceURL}/pagarme`, cobrancaPagarMeDTO, {
			headers: { Authorization: `Bearer ${token}` },
		});
	};

	const atualizaVencimento = (
		cobranca: any,
		token: string
	): Promise<AxiosResponse<ICobrancaDTO>> =>
		http.patch(
			`${resourceURL}/${cobranca.id}`,
			{
				statusCobranca: { id: 1 },
				quantidadeReemissao: cobranca.quantidadeReemissao + 1,
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);

	const byAluno = (
		predicate: Predicate = new Predicate(),
		idAluno: number
	): Promise<AxiosResponse<PageableResponse<ICobrancaCustomDTO>>> => {
		return http.get(
			`${resourceURL}/custom/${idAluno}/`,
			formatHttpParams(predicate)
		);
	};

	const getKpi = (
		predicate: Predicate = new Predicate()
	): Promise<AxiosResponse<ICobrancaKpiDTO>> => {
		return http.get(`${resourceURL}/kpi`, formatHttpParams(predicate));
	};

	const patch = (
		toUpdate: any
	): Promise<IAxiosResponseCustom<ICobrancaCleanDTO>> =>
		http.patch(`${resourceURL}/${toUpdate.id}`, toUpdate);

	const retentarCobranca = (
		idCobranca: number
	): Promise<IAxiosResponseCustom<ICobrancaCleanDTO>> =>
		http.post(`${resourceURL}/retentar-cobranca/${idCobranca}`);

	

	const editarCartaoAssinatura = (idCobranca: number ,cartaoDTO:  ICartaoDTO
		): Promise<IAxiosResponseCustom<any>> =>
		http.post(`${resourceURL}/editar-cartao-assinatura/${idCobranca}`,cartaoDTO);*/

	return {
		//...baseFind<IAxiosResponseCustom>(resourceURL),
		//...baseFindById<>(
		//	resourceURL
		//),
		//...baseFindList<>(
		//	resourceURL
		//),
		Contadores,
	};
};
