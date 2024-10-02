# BlinkBuilder

BlinkBuilder is a no-code platform that allows users to create, customize, and manage Solana Blinks effortlessly. Built with SvelteKit, Prisma, and Tailwind CSS, BlinkBuilder provides a seamless experience for users to build their blockchain presence.

## Features

- User authentication and authorization
- Template-based Blink creation
- Integration with Solana blockchain
- Analytics and performance tracking
- Social features (sharing Blinks, following creators)
- Marketplace for discovering popular Blinks
- Reward system based on Blink performance

## Prerequisites

- Node.js (v18.13 or later)
- PostgreSQL
- Solana CLI tools

## Installation

1. Clone the repository:
```bash
git clone [https://github.com/your-username/blinkbuilder.git](https://github.com/your-username/blinkbuilder.git)
cd blinkbuilder

```

2. Install dependencies:

```bash

npm install

```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/blinkbuilder"
SOLANA_RPC_URL="[https://api.mainnet-beta.solana.com](https://api.mainnet-beta.solana.com)"
JWT_SECRET="your-secret-key"

```

4. Set up the database:

```bash

npx prisma migrate dev

```

5. Start the development server:
```bash
npm run dev

```

## Project Structure

- `src/routes`: Contains all the SvelteKit routes and API endpoints
- `src/lib`: Contains utility functions and shared components
- `prisma`: Contains the Prisma schema and migrations
- `static`: Contains static assets

## Contributing

We welcome contributions to BlinkBuilder! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository or contact our support team at support@blinkbuilder.com.

## Acknowledgements

- [SvelteKit](https://kit.svelte.dev/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Solana](https://solana.com/)

Thank you for using BlinkBuilder! We hope you enjoy building and sharing your Solana Blinks.