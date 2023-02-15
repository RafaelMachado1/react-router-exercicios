import { useParams } from "react-router-dom"
import { Header } from "../components/Header"

export const ProductPage = () => {
    const { id } = useParams()
    return (
        <section>
            <Header />
            <h1>Página do produto {id} </h1>
            <img src="https://picsum.photos/400" alt="produto" />
        </section>
    )
}