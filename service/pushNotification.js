export async function sendTokenToServer(nome, acao, prisma) {

    const allTokens = await prisma.tokens.findMany({});
    
    allTokens.forEach(el => {
        fetch('http://0.0.0.0:3000/send-notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: el.token,
                title: 'Agendamento concluído',
                body: `O ${nome} foi ${acao} com sucesso!`,
            }),
        });
    })
}