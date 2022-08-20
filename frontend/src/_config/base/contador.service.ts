export interface IBaseDTO {
    ativo: boolean;
}

export interface IContadorFullDTO extends IBaseDTO {
    abertos:number;
    solucionados:number;
    fechados:number;
    atribuidos:number;
    pendentes:number;
    atrasados:number;
    critico:number;
    alto:number;
    medio:number;
    baixo:number;
    muitoBaixo:number;
}

/*
export interface IColaboradorListDTO extends IBaseDTO {
    content: IColaboradorFullDTO[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface IQuestionarioFullDTO extends IBaseDTO {
    id: string,
    nomeQuestionario: string,
    primeiraPergunta: string,
    segundaPergunta: string,
    terceiraPergunta: string,
    quartaPergunta: string,
    quintaPergunta: string,
    sextaPergunta: string,
    setimaPergunta: string,
    oitavaPergunta: string,
    nonaPergunta: string,
    ativo: true,
    respondido: false
}

export interface IQuestionarioPessoaFullDTO extends IBaseDTO {
    horaAvaliacao: null,
    id: '',
    respostaUm: number,
    respostaDois: number,
    respostaTres: number,
    respostaQuatro: number,
    respostaCinco: number,
    respostaSeis: number,
    respostaSete: number,
    respostaOito: number,
    respostaNove: number,
    questionario: {
        ativo: true,
        id: '',
        nomeQuestionario: "",
        primeiraPergunta: "",
        quartaPergunta: "",
        quintaPergunta: "",
        sextaPergunta: "",
        setimaPergunta: "",
        respondido: false,
        segundaPergunta: "",
        terceiraPergunta: "",
        oitavaPergunta: "",
        nonaPergunta: ""
    },
    pessoa: {
        id: number;
        login: string;
        senha: string;
        area: string;
        admin: boolean;
        nome: string;
        endereco: string;
        numeroEndereco: number;
        telefone: number;
        bairro: string;
        cidade: string;
        cep: number;
        estado: string;
        cidadeNascimento: string;
        nacionalidade: string;
        dataNascimento: Date;
        estadoCivil: string;
        nomeConjuge: string;
        nomePai: string;
        nomeMae: string;
        beneficiario: string;
        ctp: string;
        ctpSerie: number;
        pisPasep: number;
        dataExpedicaoCtps: Date;
        rg: number;
        orgaoEmissorRg: string;
        dataExpedicaoRg: Date;
        cpf: number;
        dataExpedicaoCpf: Date;
        tituloEleitoral: string;
        dataExpedicaoTitulo: Date;
        secao: string;
        zona: number;
        reservista: string;
        carteiraConselhoRegional: string;
        numeroCarteiraConselhoRegional: number;
        banco: number;
        contaCorrente: number;
        agencia: number;
        grauInstrucao: string;
        estudaAtualmente: boolean;
        seriePeriodo: string;
        curso: string;
        cidadeCurso: string;
        estadoCurso: string;
        paisCurso: string;
        escolaFaculdade: string;
        outrosCursos: string
        outrasInformacoes: string;
        funcao: string;
        salario: BigInt;
        patente: string;
        dataAdmissao: Date;
        dataDesligamento: Date;
        status: string;
        matricula: number;
    },
    pessoaAvaliada: {
        id: number;
        login: string;
        senha: string;
        area: string;
        admin: boolean;
        nome: string;
        endereco: string;
        numeroEndereco: number;
        telefone: number;
        bairro: string;
        cidade: string;
        cep: number;
        estado: string;
        cidadeNascimento: string;
        nacionalidade: string;
        dataNascimento: Date;
        estadoCivil: string;
        nomeConjuge: string;
        nomePai: string;
        nomeMae: string;
        beneficiario: string;
        ctp: string;
        ctpSerie: number;
        pisPasep: number;
        dataExpedicaoCtps: Date;
        rg: number;
        orgaoEmissorRg: string;
        dataExpedicaoRg: Date;
        cpf: number;
        dataExpedicaoCpf: Date;
        tituloEleitoral: string;
        dataExpedicaoTitulo: Date;
        secao: string;
        zona: number;
        reservista: string;
        carteiraConselhoRegional: string;
        numeroCarteiraConselhoRegional: number;
        banco: number;
        contaCorrente: number;
        agencia: number;
        grauInstrucao: string;
        estudaAtualmente: boolean;
        seriePeriodo: string;
        curso: string;
        cidadeCurso: string;
        estadoCurso: string;
        paisCurso: string;
        escolaFaculdade: string;
        outrosCursos: string
        outrasInformacoes: string;
        funcao: string;
        salario: BigInt;
        patente: string;
        dataAdmissao: Date;
        dataDesligamento: Date;
        status: string;
        matricula: number;
    }
}

export interface IAreasCleanDTO extends IBaseDTO {
    id: number;
    descricao: string
}

export interface ICargoCleanDTO extends IBaseDTO {
    id: number;
    descricao: string
}
export interface IPatenteCleanDTO extends IBaseDTO {
    id: number;
    descricao: string
}

export interface ILogPatenteDTO extends IBaseDTO {
    id: number;
    diaAlteracao: Date;
    patenteAnterior: string;
    pessoa: IColaboradorFullDTO;
}*/