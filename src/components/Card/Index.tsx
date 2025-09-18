import { Card, Icon, Title, Number } from './styles';

type Props = {
  icon: React.ReactNode;
  name: string;
  numberinfo: string;
  style?: React.CSSProperties;
}

function CardInfo({ icon, name, numberinfo, style }: Props) {
  return (
    <Card>
      <div>
        <Icon>{icon}</Icon>
      </div>
      <Title>{name}</Title>
      <Number style={style}>{numberinfo}</Number>
    </Card>
  )
}

export default CardInfo
