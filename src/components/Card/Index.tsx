import { Card, Icon, Title, Number } from './styles';

type Props = {
  icon: React.ReactNode;
  name: string;
  numberinfo: string;
}

export function CardInfo({ icon, name, numberinfo }: Props) {
  return (
    <Card>
      <div className='containerIcon'>
        <Icon>{icon}</Icon>
      </div>
      <Title>{name}</Title>
      <Number>{numberinfo}</Number>
    </Card>
  )
}
