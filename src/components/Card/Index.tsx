import { Card, Icon, Title, Number } from './styles';

type Props = {
  icon: React.ReactNode;
  name: string;
  numberinfo: string | undefined;
}

export function CardInfo({ icon, name, numberinfo }: Props) {
  return (
    <Card>
      <div className='containerIcon'>
        <Icon>{icon}</Icon>
      </div>
      <div className='info'>
        <Title>{name}</Title>
        <Number>{numberinfo}</Number>
      </div>
    </Card>
  )
}
