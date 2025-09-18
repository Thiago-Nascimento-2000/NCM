import { BiMailSend } from "react-icons/bi";
import Button from "../../components/Button";
import { MainContainer } from "./styles";
import { InputSearchCliente } from "../../components/InputSearchClient";
import { Container } from "../../components/Container/Container";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


export function Ncm() {
    const [searchData, setSearchData] = useState<string[]>([]);
    const [search, setSearch] = useState('');
    const [email, setEmail] = useState('');
    const URL = 'http://192.168.51.252:5000/atualiza_clientes_vpn';

    useEffect(() => {
        if (search !== '') {
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log("API DATA:", data);
                    if (Array.isArray(data.names)) {
                        setSearchData(data.names);
                    } else {
                        setSearchData([]);
                    }
                })
                .catch(error => {
                    console.error(error);
                    setSearchData([]);
                });
        }
    }, [search]);

    const closeToast = () => {
        console.log("fechou!!!!!!!");
    };

    async function SendEmailClient(search: string, email: string) {
        const URL = 'http://192.168.51.252:5000/cliente';

        if (!search && !email) {
            toast.warn('Preencha os campos loja e e-mail!', { position: 'top-center', autoClose: 2000 });
            return;
        }
        if (!search) {
            toast.warn('Preencha o campo loja antes de continuar!', { position: 'top-center', autoClose: 2000 });
            return;
        }
        if (!email) {
            toast.warn('Preencha o campo e-mail antes de continuar!', { position: 'top-center', autoClose: 2000 });
            return;
        }

        let toastId: string | number | null = null;

        try {

            toastId = toast.loading('Processando requisição, aguarde...', { position: 'top-center', onClose: closeToast });

            const response = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: search, email: email })
            })

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Erro na requisição');
            }

            toast.dismiss(toastId);

            const data = await response.json();
            console.log('EMAIL ENVIADO!', data);
            toast.success('Email enviado para sua caixa de entrada!', { position: 'top-center', autoClose: 2000 });

        } catch (error) {
            if (toastId) toast.dismiss(toastId);
            console.error('ERRO NA REQUISIÇÃO', error);
            toast.error('Falha no processo de consulta dos ncms invalidos na loja, verifique o nome e tente novamente!', { position: 'top-center', autoClose: 5000 });
        }
    }

    const handleChangeClient = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setSearchData([]);
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        <MainContainer>
            <Container>
                <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <div style={{ position: 'relative' }}>
                        <InputSearchCliente
                            name="Selecione o cliente"
                            label='Cliente'
                            type="text"
                            onChange={handleChangeClient}
                            value={search}
                        />
                        {search && (
                            <div style={{ backgroundColor: 'white', width: '290px', minHeight: '20px', overflow: 'hidden', position: 'absolute', borderRadius: '10px 10px 10px 10px', marginTop: '0.3rem', padding: '1rem' }}>
                                {searchData
                                    .filter((cliente) => cliente.toLowerCase().includes(search.toLowerCase()))
                                    .map((item, index) => (
                                        <p style={{ padding: '0.3rem', cursor: 'pointer' }} key={index}>
                                            {item}
                                        </p>
                                    ))}
                            </div>
                        )}
                    </div>
                    <InputSearchCliente
                        name="Insira o e-mail"
                        type="email"
                        label='Email'
                        onChange={handleChangeEmail}
                        value={email}
                    />
                    <Button
                        name='Enviar'
                        icon={<BiMailSend />}
                        onClick={() => SendEmailClient(search, email)}
                    />

                    <div className="help-list">
                        <h2>Passos para Realizar o Processo</h2>
                        <br />
                        <ol>
                            <li>Selecione a loja</li>
                            <li>Insira o e-mail para recebimento do arquivo .csv com os ncms invalidos</li>
                            <li>Clique no botão enviar para efetuar o envio do email</li>
                            <li>Verifique sua caixa de entrada e spam</li>
                        </ol>
                    </div>
                </div>
            </Container>
        </MainContainer>
    );
}