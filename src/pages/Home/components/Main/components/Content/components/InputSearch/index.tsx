import { ContainerSearch } from './styles'

export function InputSearch() {
  return (
    <ContainerSearch>
      <div id="wrapper">
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        className="input_search"
        placeholder="Buscar conteúdo"
      />
    </ContainerSearch>
  )
}
