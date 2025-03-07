 # Error Detection System

A Next.js application with Firebase Firestore backend for detecting and managing code errors.

## Features

- Error Reports Collection
- Bug Fixes Collection
- AI Fixes Collection
- RESTful API Endpoints
- TypeScript Support
- Firebase Integration

## Project Structure

```
src/
├── lib/           # Firebase and other library configurations
├── models/        # TypeScript interfaces and data models
├── services/      # Business logic and data access layer
├── utils/         # Utility functions and helpers
└── pages/         # Next.js pages and API routes
    ├── api/       # API endpoints
    └── index.tsx  # Home page
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Firebase credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Error Reports
- `POST /api/error-reports` - Create a new error report
- `GET /api/error-reports` - Get all error reports
- `GET /api/error-reports/:id` - Get a specific error report
- `PATCH /api/error-reports/:id` - Update error status

### Bug Fixes
- `POST /api/bug-fixes` - Create a new bug fix
- `GET /api/bug-fixes/:errorId` - Get bug fixes for an error
- `PATCH /api/bug-fixes/:id` - Update review status

## Environment Variables

Required environment variables:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

## Security

- Never commit `.env.local` or any files containing credentials
- Keep Firebase service account keys private
- Use environment variables for sensitive data

## Development

1. Create a Firebase project
2. Generate service account credentials
3. Set up environment variables
4. Install dependencies
5. Run development server

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request