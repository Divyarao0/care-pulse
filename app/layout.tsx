// app/patients/[userId]/register/layout.tsx
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import "@/app/globals.css"; // tumhara custom global CSS

import React, { ReactNode } from "react";

interface RegisterLayoutProps {
  children: ReactNode;
}

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Register Patient</title>
      </head>
      <body className="min-h-screen bg-gray-50">
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
};

export default RegisterLayout;
