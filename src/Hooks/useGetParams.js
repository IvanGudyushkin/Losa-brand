import { useParams } from "react-router-dom";

export default function useGetParams(massive) {
    const params = useParams();
    const getProductById = (massive, id) => {
        // Поиск продукта: элемент массива [key, value], где value - объект продукта
        const entry = massive.find(([key, product]) => product.id === id);
        return entry && entry[1]; // Возвращаем объект продукта, если продукт найден
    };
    const product = getProductById(massive, parseInt(params.id, 10));
    return product;
}
