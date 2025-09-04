import { ContainerInfoNCM, ContentInfoNCM } from './styles'

type Props = {
    name: string;
    value: React.ReactNode;
}

export function InfoNCMSearch({name, value}: Props){
    return (
        <ContainerInfoNCM>
            <ContentInfoNCM>{name='NCM:'} {value}</ContentInfoNCM>
            <ContentInfoNCM>{name='Descrição:'} {value}</ContentInfoNCM>
            <ContentInfoNCM>{name='Data de Inicio:'} {value}</ContentInfoNCM>
        </ContainerInfoNCM>
    );
}