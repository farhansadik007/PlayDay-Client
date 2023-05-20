import useTitle from "../../Common/useTitle";

const Blogs = () => {
    useTitle('PlayDay | Blogs ');
    return (
        <div className="text-center w-3/4 mx-auto">
            <h1 className="text-4xl my-12 font-bold text-red-500">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className="my-12 text-2xl">Access Token is basically a credential that is issued by an authentication or an authorization server after a user successfully authenticates and authorizes an application. On the other hand, refresh token is a long-time stored credential that is also issued by an authentication or authorization server along with the access token. Access Token is stored short-term storage and Access Token is stored in secure storage for security.</p>
            <h1 className="text-4xl my-12 font-bold text-red-500">Compare SQL and NoSQL databases?</h1>
            <p className="my-12 text-2xl">SQL for vertical scaling, NoSQL for horizontal scaling. SQL is structured, NoSQL is unstructured.</p>
            <h1 className="text-4xl my-12 font-bold text-red-500">What is express js? What is Nest JS?</h1>
            <p className="my-12 text-2xl">Express.js is a fast and lightweight web application framework for Node.js. Nest.js is opinionated and feature-rich framework.</p>
            <h1 className="text-4xl my-12 font-bold text-red-500">What is MongoDB aggregate and how does it work ?</h1>
            <p className="my-12 text-2xl">MongoDB aggregation is a way to process large number of documents in a collection by passing through different steps.It perform operations on the grouped data and return a single result.</p>
        </div>
    );
};

export default Blogs;