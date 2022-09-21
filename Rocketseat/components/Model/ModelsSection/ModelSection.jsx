import { Container } from './styles.js'

export function ModelSection({content, key }) {
  return (
    <Container
      key={key}
    >{content}
    </Container>
  )
}
