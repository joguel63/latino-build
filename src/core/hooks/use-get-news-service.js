import { getNews } from "core/services";

export const useGetNewsService = () =>{

    const getNewsPage = () =>{
        try {
            getNews().then(({data})=> {
                if(!data) return;

                console.log(data);

            })
            
        } catch (error) {
            
        }

    }
    return {getNewsPage}
}