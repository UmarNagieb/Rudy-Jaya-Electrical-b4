import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from "@/components/ScrollToTop"
import PageNotFound from "@/lib/PageNotFound"
import Home from "@/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App