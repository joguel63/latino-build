import { getNews } from "core/services";

export const useGetNewsService = () =>{

    const getNewsImage = () =>{
        try {
            console.log("cargando Imagen")    
                    
        } catch (error) {
            
        }
    }

    const getNewsPage = () =>{
        try {
            console.log("cargando")
            getNews().then(({data})=> {
                if(!data) return;

                console.log(data);

            })
            
        } catch (error) {
            
        }

    }
    return {getNewsPage}
}