import { ContainerSearch } from './styles'

export interface PublishesApi {
  publishes: []
}

export function InputSearch(publishes: PublishesApi) {
  return (
    <ContainerSearch>
      <div id="wrapper">
        <span>Publicações</span>
        <span>{publishes.publishes.length} publicações</span>
      </div>
      <input
        type="text"
        className="input_search"
        placeholder="Buscar conteúdo"
      />
    </ContainerSearch>
  )
}
