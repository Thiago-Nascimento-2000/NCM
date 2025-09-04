import { Card, Icon, Title, Number } from './styles';

type Props = {
  icon: React.ReactNode;
  name: string;
  numberinfo: string;
}

function CardInfo({icon, name, numberinfo}: Props) {
  return (
    <Card>
        <Icon>{icon}</Icon>
        <Title>{name}</Title>
        <Number>{numberinfo}</Number>
    </Card>
  )
}

export default CardInfo
