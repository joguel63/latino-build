import { getNews, getFullNew } from "core/services";

export const useGetNewsService = () =>{

    const getNewsPage = (setNews) => {
        try {
            getNews().then(({data}) => {
                if(!data) return;
                setNews(data);             
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getFullNewPage = (id,setContent) =>{
        try {
            getFullNew(id).then(({data}) => {
                if(!data) return;
                setContent(data);                
            });            
        } catch (error) {
            console.log(error);
        }
    }
    return {getNewsPage, getFullNewPage}
}