import { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import "./Category.css";
import Article from "../components/Article";

const API_KEY = import.meta.env.VITE_API_NEWS_KEY;

function Sport() {
  const [articles, setArticles] = useState([]);

  async function fetchSportNews() {
    try {
      const res = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=sports`
      );
      const json = await res.json();
      setArticles(json.results || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchSportNews();
  }, []);

  return (
    <div className="category-page">
      <h2 className="category-heading">Sport Headlines</h2>
      <Row>
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
      </Row>
    </div>
  );
}

export default Sport;