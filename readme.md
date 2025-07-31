# 🎨 JAX UI Design System

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://fejustino.github.io/design-system/?path=/docs/home--docs)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/feJustino/design-system/deploy-docs.yaml?label=Deploy&logo=github)](https://github.com/feJustino/design-system/actions/workflows/deploy-docs.yaml)
[![Release Status](https://img.shields.io/github/actions/workflow/status/feJustino/design-system/release.yml?label=Release&logo=github)](https://github.com/feJustino/design-system/actions/workflows/release.yml)

Design System React construído com TypeScript, Stitches e Radix UI. Monorepo gerenciado com Turborepo e pnpm.

## 🏗️ Arquitetura do Projeto

Este é um monorepo contendo:

- **`@jax-ui/tokens`** - Design tokens (cores, tipografia, espaçamentos, bordas)
- **`@jax-ui/react`** - Componentes React reutilizáveis
- **`@jax-ui/docs`** - Documentação interativa com Storybook
- **`@jax-ui/eslint-config`** - Configurações de ESLint compartilhadas
- **`@jax-ui/ts-config`** - Configurações TypeScript compartilhadas

## ✨ Funcionalidades

✅ **10+ Componentes** prontos para uso<br>
✅ **Design Tokens** sistemáticos e consistentes<br>
✅ **TypeScript** para type safety<br>
✅ **Acessibilidade** com Radix UI<br>
✅ **Documentação** interativa com Storybook<br>
✅ **Monorepo** estruturado com Turborepo

## 🛠 Stack Tecnológica

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Stitches](https://img.shields.io/badge/Stitches-000?style=flat&logo=stitches&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat&logo=radix-ui&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-000000?style=flat&logo=turborepo&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)

## 📦 Instalação

```bash
npm install @jax-ui/react @jax-ui/tokens
# ou
pnpm add @jax-ui/react @jax-ui/tokens
# ou
yarn add @jax-ui/react @jax-ui/tokens
```

## 🚀 Uso Básico

```tsx
import { Button, Box, Text } from '@jax-ui/react';

function App() {
  return (
    <Box>
      <Text size="lg">Bem-vindo ao JAX UI</Text>
      <Button variant="primary">Clique aqui</Button>
    </Box>
  );
}
```

## 🎨 Componentes Disponíveis

### Form Components
- **Button** - Botão com variantes (primary, secondary, tertiary)
- **TextInput** - Campo de texto com prefixo
- **TextArea** - Área de texto multilinha
- **Checkbox** - Caixa de seleção animada

### Display Components
- **Avatar** - Avatar com fallback automático
- **Box** - Container flexível para layout
- **Text** - Componente de texto tipográfico
- **Heading** - Títulos com diferentes tamanhos

### Feedback Components
- **Toast** - Notificações temporárias
- **Tooltip** - Dicas contextuais
- **Multistep** - Indicador de progresso

## 📚 Storybook

Explore todos os componentes e tokens:

```bash
# Desenvolvimento
pnpm dev

# Build do Storybook
pnpm build
```

## 🎨 Design Tokens

Nosso sistema é baseado em tokens consistentes:

| Categoria | Exemplo | Valores |
|-----------|---------|---------|
| **Cores** | `$gray900` | #121214, #202024, #29292E... |
| **Espaçamento** | `$space$4` | 1rem, 1.5rem, 2rem... |
| **Tipografia** | `$fontSizes$md` | 1rem, 1.125rem, 1.25rem... |
| **Bordas** | `$radii$sm` | 4px, 6px, 8px... |

```tsx
// Usando tokens diretamente
import { colors, space, radii } from '@jax-ui/tokens';

const customButton = {
  backgroundColor: colors.ignite500,
  padding: space[4],
  borderRadius: radii.sm,
}
```

## 🏗️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- pnpm 8+

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/feJustino/design-system.git

# Instale as dependências
pnpm install

# Inicie o desenvolvimento
pnpm dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento (todos os pacotes)
pnpm dev

# Build de produção
pnpm build

# Storybook (docs)
cd packages/docs && pnpm dev

# Release de versões
pnpm changeset
pnpm version-packages
pnpm release
```

## 📁 Estrutura do Projeto

```
packages/
├── docs/          # Storybook + Documentação
├── react/         # Componentes React
├── tokens/        # Design tokens
├── eslint-config/ # Configurações ESLint
└── ts-config/     # Configurações TypeScript
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

### Padrões de Commit

Seguimos o [Conventional Commits](https://conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes

## � Licença

MIT License © 2024 [Felipe Justino](https://github.com/feJustino)

---

<div>
  <strong>Construído com ❤️ por Felipe Justino</strong>
</div>
