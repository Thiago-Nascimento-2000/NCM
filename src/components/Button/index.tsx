import { ButtonSearch, Icon, Title } from './styles'

type Props = {
    name: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

export function Button({ name, icon, onClick }: Props) {

    return (
        <ButtonSearch onClick={onClick}>
            <Title>{name}</Title>
            <Icon>{icon}</Icon>
        </ButtonSearch>
    );
}