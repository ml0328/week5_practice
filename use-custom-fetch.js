const useCustomFetch = (url) => {
    const [data, SetData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url);

                SetData(response);
            }catch (error) {
                console.log(error)
                setIsError(true);
            }finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, isLoading, isError}
}

export default useCustomFetch;