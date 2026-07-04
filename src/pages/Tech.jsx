import { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import "./Category.css";
import Article from "../components/Article";

const API_KEY = import.meta.env.VITE_API_NEWS_KEY;

function Tech() {
  const [articles, setArticles] = useState([]);

  async function fetchTechNews() {
    try {
      const res = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=technology`
      );
      const json = await res.json();
      setArticles(json.results || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTechNews();
  }, []);

  return (
    <div className="category-page">
      <h2 className="category-heading">Tech Headlines</h2>
      <Row>
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
      </Row>
    </div>
  );
}

export default Tech