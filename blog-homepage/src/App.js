//import logo from './logo.svg';
import './App.css';
import Article from './Article';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';


function App() {
    return (
        <div className="App">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <section className='your'>
                                <h1>For you</h1>
                                <Article key='your' articleList={yourArticles} />
                            </section>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <section className='missed'>
                                <h1>In case you missed it</h1>
                                <Article key='missed' articleList={missedArticles} />
                            </section>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
}

export default App;
