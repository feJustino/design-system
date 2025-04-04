# 🎨 Design System React

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://seusite-storybook.vercel.app)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/feJustino/design-system/main.yml?label=CI%2FCD&logo=github)](https://github.com/feJustino/design-system/actions)
[![Coverage](https://img.shields.io/codecov/c/github/feJustino/design-system?logo=codecov)](https://codecov.io/gh/feJustino/design-system)
[![NPM Version](https://img.shields.io/npm/v/@fejustino/design-system?logo=pnpm)](https://www.pnpmjs.com/package/@fejustino/design-system)

Biblioteca de componentes React para aplicações web, seguindo princípios de Design System moderno com:

- **Acessibilidade** priorizada em todos os componentes
- **Consistência** através de tokens de design
- **Customização** via theming
- **Documentação** interativa com Storybook

## ✨ Funcionalidades Principais

✅ 30+ Componentes atomicos (Atomos, Moléculas, Organismos)<br>
✅ Sistema de tokens de design (cores, tipografia, espaçamento)<br>
✅ Suporte a temas light/dark<br>
✅ Testes unitários com Jest + Testing Library<br>
✅ Documentação interativa com Storybook<br>
✅ Integração contínua com GitHub Actions

## 🛠 Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Stitches](https://img.shields.io/badge/Stitches-000?style=flat&logo=stitches&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)

## 📦 Instalação

```bash
npm install @fejustino/design-system
# ou
yarn add @fejustino/design-system
```

## 🚀 Uso Básico

```tsx
import { Button, ThemeProvider } from '@fejustino/design-system';

function App() {
  return (
    <ThemeProvider theme="light">
      <Button variant="primary">Clique aqui</Button>
    </ThemeProvider>
  );
}
```

## 📚 Storybook

Explore todos os componentes visualmente:
```bash
npm run storybook
```
Acesse a versão online: [Storybook Deploy](https://seusite-storybook.vercel.app)

## 🤝 Contribuição

1. Faça fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Siga nosso [guia de contribuição](CONTRIBUTING.md)
4. Abra um Pull Request

## 📄 Licença

MIT License © 2024 [Felipe Justino](https://github.com/feJustino)

### 🔍 Sugestões de Melhoria com Base em Boas Práticas :
1. **Adicione Diagramas de Arquitetura**
   - Fluxo de construção do DS
   - Relação entre tokens > componentes > páginas

2. **Documentação de Tokens**

   ## 🎨 Tokens de Design
   | Categoria      | Token          | Valor        |
   |----------------|----------------|--------------|
   | Cores          | `$primary`     | #2563EB      |
   | Tipografia     | `$font-body`   | 16px/1.5 Rem |

3. **Badges Adicionais**

   [![Bundle Size](https://img.shields.io/bundlephobia/minzip/@fejustino/design-system)](https://bundlephobia.com/package/@fejustino/design-system)
   [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

4. **Seção de Roadmap**

   ## 🗺 Roadmap
   - [ ] Adicionar componentes de Data Visualization
   - [ ] Suporte a modo de alta contraste
   - [ ] Internacionalização de componentes
