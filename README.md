# Igor Martins de Vasconcelos — Portfólio

Página pessoal profissional estática, feita com HTML, CSS e JavaScript sem dependências de build.

## Executar localmente

Abra `index.html` no navegador, ou sirva a pasta com qualquer servidor estático. Por exemplo, com Python:

```bash
python3 -m http.server 8000
```

Depois acesse <http://localhost:8000>.

## Personalizar links

Os links de LinkedIn, GitHub e e-mail ficam centralizados em `config.js` para facilitar a atualização.

## Publicar no GitHub Pages

1. Crie um repositório GitHub e envie estes arquivos para a branch principal.
2. Nas configurações do repositório, abra **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch principal e a pasta `/(root)`.
4. Salve e aguarde a publicação. O ponto de entrada é `index.html`.

Não há etapa de compilação nem configuração adicional.
