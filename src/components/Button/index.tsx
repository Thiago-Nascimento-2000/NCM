import { ButtonSearch, Icon, Title } from './styles'

type Props = {
    name: string;
    icon: React.ReactNode;
}

export default function Button({name, icon}: Props) {
    return (
        <ButtonSearch>
            <Title>{name}</Title>
            <Icon>{icon}</Icon>
        </ButtonSearch>
    );
}