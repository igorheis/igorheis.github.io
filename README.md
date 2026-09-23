# Igor Martins de Vasconcelos — Portfólio

Página pessoal profissional estática, feita com HTML, CSS e JavaScript sem dependências de build.

## Executar localmente

Abra `index.html` no navegador, ou sirva a pasta com qualquer servidor estático. Por exemplo, com Python:

```bash
python3 -m http.server 8000
```

Depois acesse <http://localhost:8000>.

## Personalizar links

Edite `config.js` e preencha `linkedin`, `github` e `email`. Esses três campos são os únicos dados pessoais ainda ausentes. Os cards na seção Projetos são placeholders identificados; ao substituí-los por projetos reais, atualize nome, descrição, tecnologias e link para o repositório nos respectivos cards do `index.html`, e configure `project1` e `project2` em `config.js`.

## Publicar no GitHub Pages

1. Crie um repositório GitHub e envie estes arquivos para a branch principal.
2. Nas configurações do repositório, abra **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch principal e a pasta `/(root)`.
4. Salve e aguarde a publicação. O ponto de entrada é `index.html`.

Não há etapa de compilação nem configuração adicional.
