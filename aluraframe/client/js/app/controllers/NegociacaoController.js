class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._limpaFormulario()
        this._negociacoesView.update(this._listaNegociacoes);

    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }


    _limpaFormulario() {
        let $ = document.querySelector.bind(document);
        $('.form').reset()
        this._inputData.focus()
    }
}