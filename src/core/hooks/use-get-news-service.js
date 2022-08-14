import { getNews } from "core/services";

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
    return {getNewsPage}
}