import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import { Providers } from './providers';
import Footer from '@/components/Footer/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EasyPay',
  description:
    "Facilitez l'accès aux services financiers pour les employés qui n'ont pas de compte bancaire traditionnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <header
            className='navbar'
            style={{
              position: 'absolute',
              width: '100%',
              top: '0px',
              left: '0px',
              zIndex: '10',
            }}
          >
            <Navbar />
          </header>
          {children}
          <footer id='footer'>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
