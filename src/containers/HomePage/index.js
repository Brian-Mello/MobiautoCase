import React from "react";
import { connect } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import SelectUI from "../../components/selectUI";
import { getAnos, getMarcas, getModelos, getValor, setAno } from "../../actions";
import { HomePageContainer, SearchFormComponent, MainContainer, MainContainerHeader, MainContainerFiltersSection, MainContainerDetalhesSection, Title } from './styled';
import Header from "../../components/header";
import Footer from "../../components/footer";
import VeiculoCard from "../../components/veiculoCard";

export class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      marca: "",
      modelo: "",
      ano: ""
    }
  }

  componentDidMount() {
    const { getMarcas } = this.props
    getMarcas()
  };

  componentDidUpdate(prevProps, prevState) {
    const { marca, modelo, ano } = this.state

    if( marca && marca !== prevState.marca ) {

      const { getModelos } = this.props
      getModelos(marca)
    }

    if( modelo && modelo !== prevState.modelo){
      const { getAnos } = this.props
      getAnos(marca, modelo)
    }
    
    if( ano && ano !== prevState.ano){
      const { getValor } = this.props

      getValor(marca, modelo, ano)
    }
  };

  handleOnChangeMarca = (event) => {
    const { value } = event.target;

    this.setState ({ marca: value})
  }

  handleOnChangeModelo = (event) => {
    const { value } = event.target;

    this.setState ({ modelo: value})
  }

  handleOnChangeAno = (event) => {
    const { value } = event.target;

    this.setState ({ ano: value})
  }

  handleOnClick = (event) => {
    event.preventDefault();

    const { ano } = this.state;

    setAno(ano);
  }

  render() {
    const { marcas, modelos, anos, detalhes } = this.props
    const { marca, modelo, ano } = this.state

    const marcasMap = marcas.map((marca) => 
      <MenuItem 
        key={marca.codigo} 
        value={marca.codigo} 
      >
        {marca.nome}
      </MenuItem>
    )

    const modelosMap = modelos.map((modelo)=>
      <MenuItem 
        key={modelo.codigo} 
        value={modelo.codigo} 
      >
        {modelo.nome}
      </MenuItem>
    )

    const anosMap = anos.map((ano)=>
      <MenuItem 
        key={ano.codigo} 
        value={ano.codigo} 
      >
        {ano.nome}
      </MenuItem>
    )

    const renderDetalhesCard = ano === "" ? "" : (
      <VeiculoCard
        marca={detalhes.Marca}
        modelo={detalhes.Modelo}
        combustivel={detalhes.Combustivel}
        combustivelSigla={detalhes.SiglaCombustivel}
        ano={detalhes.AnoModelo}
        fipe={detalhes.CodigoFipe}
        referencia={detalhes.MesReferencia}
        tipo={detalhes.TipoVeiculo}
        valor={detalhes.Valor}
      />
    )

    const renderSelects = (
      <SearchFormComponent>
        <SelectUI
          label="Marca"
          name="Marca"
          map={marcasMap}
          value={marca}
          onChange={this.handleOnChangeMarca}
        />
        <SelectUI
          label="Modelo"
          name="Modelo"
          map={modelosMap}
          value={modelo}
          onChange={this.handleOnChangeModelo}
        />
        <SelectUI
          label="Ano"
          name="Ano"
          map={anosMap}
          value={ano}
          onChange={this.handleOnChangeAno}
        />
      </SearchFormComponent>
    )

    return (
      <HomePageContainer>
        <Header/>
        <MainContainer>
          <MainContainerHeader> <Title>Tabela Fipe</Title></MainContainerHeader>
          <MainContainerFiltersSection> {renderSelects} </MainContainerFiltersSection>
          <MainContainerDetalhesSection> {renderDetalhesCard} </MainContainerDetalhesSection>
        </MainContainer>
        <Footer/>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = state => ({
  marcas: state.tabelafipe.todasMarcas,
  modelos: state.tabelafipe.todosModelos,
  anos: state.tabelafipe.todosAnos,
  detalhes: state.tabelafipe.valorVeiculo,
  anoSelecionado: state.tabelafipe.anoSelecionado
})

const mapDispatchToProps = dispatch =>({
  getMarcas: () => dispatch(getMarcas()),
  getModelos: (marca) => dispatch(getModelos(marca)),
  getAnos: (marca, modelo) => dispatch(getAnos(marca, modelo)),
  getValor: (marca, modelo, ano) => dispatch(getValor(marca, modelo, ano)),
  setAno: (ano) => dispatch(setAno(ano))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);