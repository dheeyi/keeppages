import { AppContextProvider } from '../context/context'
import '../styles/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    );
}

export default MyApp
