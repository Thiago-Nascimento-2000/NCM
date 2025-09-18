
import { Ncm } from '../../ConsumoNCM/ConsumoNCM';
import { useNcm } from '../Contecto/useNcm';
import { ButtonSearch, Icon, Title } from './styles'

type Props = {
    name: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

export default function Button({ name, icon }: Props) {
    const { ncm } = useNcm();

    async function sendNcmApi(): Promise<void> {
        try {
            Ncm(ncm);
        } catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <ButtonSearch onClick={() => sendNcmApi()}>
            <Title>{name}</Title>
            <Icon>{icon}</Icon>
        </ButtonSearch>
    );
}