import { Card } from './Card'
import { Column } from './Column'

import { AppContainer } from './styles'

function App({}) {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Complete This Project" />
      </Column>
      <Column text="In Progress">
        <Card text="Some important task" />
      </Column>
      <Column text="Done">
        <Card text="Cool stuff" />
      </Column>
    </AppContainer>
  )
}

export default App
