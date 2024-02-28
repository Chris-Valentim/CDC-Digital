import * as S from './styles'
import Photo1 from '../../assets/photo1.svg'
import { GuideTitle } from './GuideTitle'
import { Text } from './Text'
import { ReactButton } from './ReactButton'
import { Comments } from './Comments'

export const Content = () => {
  return (
    <S.Wrapper>
      <GuideTitle />
      <S.Container>
        <S.Subtitle>
          Novo visual do CDC digital
        </S.Subtitle>
        <S.Date>
          26/12/2022 15h05
        </S.Date>
      </S.Container>
      <S.Division />
      <S.Photo>
        <S.Image src={Photo1} alt="Fotográfia" />
        <S.DescriptionPhoto>
          foto tirada pelo fotógrafo Carlos no dia 01/01/2022
        </S.DescriptionPhoto>
      </S.Photo>
      <S.Description>
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <ReactButton />
        <Comments />
      </S.Description>
    </S.Wrapper>
  )
}
