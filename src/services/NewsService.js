const apiURL ="http://latino-api.herokuapp.com/"
export async function getAllNews(){
    try {
        fetch(apiURL + 'api/news/').then((response)=> {
            console.log(response.json());
            return response.json();
        });
        
    } catch (error) {
        return[];
    }
}