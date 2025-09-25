import { ContainerHero } from "./styles";

type ContainerProps = {
    children: React.ReactNode;
}

export function Container({children}: ContainerProps) {
    return (
        <ContainerHero>
            {children}
        </ContainerHero>
    )
}