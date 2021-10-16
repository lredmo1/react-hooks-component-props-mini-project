import Article from "./Article"


function ArticleList({article}) {
    console.log(article)
    return (<main>
        {article.map((props) => <Article title={props.title} date={props.date} preview={props.preview} key={props.id} />)}
    </main>)
}

export default ArticleList