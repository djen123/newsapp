import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { Row, Form, InputGroup, Button, Card, Col } from "react-bootstrap";
import "./Latestnews.css";


const API_KEY = import.meta.env.VITE_API_NEWS_KEY;

function Latestnews() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("");
  const [query, setQuery] = useState("");

  async function getLatestnews(selectedCountry) {
    try {
      let params = selectedCountry ? `&country=${selectedCountry}` : "";
      if (query) params += `&q=${query}`;

      const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en${params}`;
      const response = await fetch(url);
      const data = await response.json();

      setArticles(data.results || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getLatestnews(country);
  }, []);

  useEffect(() => {
    if (country) getLatestnews(country);
  }, [country]);

  return (
    <div className="latest-news-container">

      {/* Search Bar */}
      <div className="search-bar">
        <InputGroup>
          <Form.Select
            className="country-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">🌍 Country</option>
            <option value="us">🇺🇸 USA</option>
            <option value="gb">🇬🇧 UK</option>
            <option value="in">🇮🇳 India</option>
          </Form.Select>

          <Form.Control
            className="search-input"
            size="lg"
            type="text"
            placeholder="🔍 Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Button className="search-btn" onClick={() => getLatestnews(country)}>
            Search
          </Button>
        </InputGroup>
      </div>

      {/* News Cards */}
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.article_id} className="mb-4">
            <Card className="news-card shadow-sm">
              {article.image_url && (
                <Card.Img
                  variant="top"
                  src={article.image_url}
                  className="news-img"
                />
              )}
              <Card.Body>
                <Card.Title className="news-title">{article.title}</Card.Title>
                <Card.Text className="news-desc">
                  {article.description?.slice(0, 120)}...
                </Card.Text>
                <Button
                  variant="dark"
                  href={article.link}
                  target="_blank"
                  className="read-btn"
                >
                  Read More →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Latestnews;
