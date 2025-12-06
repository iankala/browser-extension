import { createRoot } from "react-dom/client"
import Header from "./Header"
import Main from "./main"
import Footer from "./footer"
const root = createRoot(document.getElementById("root"))

// eslint-disable-next-line react-refresh/only-export-components
function Page() {
    return (
        <>
         <Header />
         <Main />
         <Footer />
      
        </>
    )
}

root.render(
    <Page />,
   
    
)



