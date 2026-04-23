# Manicure App (Polish Version)

This is a Polish version of the Manicure App, a web application designed for booking manicure services. The app allows users to view available services, make bookings, and manage their appointments.

## Features

- User authentication
- Service booking
- Responsive design
- Internationalization support (currently in Polish and English)

## Project Structure

```
manicure-app-pl
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── screens
│   │   ├── Home.tsx
│   │   └── Booking.tsx
│   ├── services
│   │   └── api.ts
│   ├── hooks
│   │   └── useAuth.ts
│   ├── styles
│   │   └── theme.ts
│   ├── i18n
│   │   ├── index.ts
│   │   └── locales
│   │       ├── en.json
│   │       └── pl.json
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── .eslintrc.js
└── README.md
```

## Installation

To get started with the Manicure App, clone the repository and install the dependencies:

```bash
git clone https://github.com/Vladouk/manicure-app-pl.git
cd manicure-app-pl
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Localization

The application supports multiple languages. Currently, Polish translations are available in the `src/i18n/locales/pl.json` file. You can add more translations as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.