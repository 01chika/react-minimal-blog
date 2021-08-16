import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");


    return ( 
        <div className="homepage">
            {error && <div>could not fetch the data for that resource</div>}
            {isPending && <div> Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Posts!"/>}
        </div>
     );
}
 
export default Home;