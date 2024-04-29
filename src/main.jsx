import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)


/*
TODO: Bootstrap Nav Yapısı Oluştur.
TODO: React Router Dom'u kur.
TODO: Ana Sayfa, Her Api için Kategori Oluştur.
TODO: .env Yapısı Oluştur ve İçine Bilgi Ekle.
TODO: Cat API den Key Al.
TODO: Cat API yapısını Fetch ile Kullan.
TODO: isLoading, isError, error ve data yapısını Kurugula.
TODO: Cat API Custom Hook Yap.
TODO: Cat API Kategori Detay Sayfası Yap.
TODO: UI Düzenlemesi Yap.
TODO: Axios ile Aynı Çalışmaları Tekrarla.
TODO: RTK Query ile Aynı Yapıyı Kurgula.

*/