import {app, BrowserWindow} from 'electron';

const criarJanela = () => {
    const janela = new BrowserWindow({
    width:  "800px",
    height: "800px",
    title:"Exemplo - Aplicação Desktop"
    })
    janela.loadFile('index.html');
};

// function criarJanela(){
//     const janela = new BrowserWindow({
//         width: 800,
//         height: 800
//     })
// };

app.whenReady().then(() => {
    criarJanela()
    console.log('Executando Electron');
})
.catch((erro) => {
    console.error(erro)
});

