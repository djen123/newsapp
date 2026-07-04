import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";


const API_KEY = import.meta.env.VITE_API_NEWS_KEY;

function Home() {
  const [articles, setArticles] = useState([]);

  async function fetchNews() {
    try {
      const res = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&size=8`
      );
      const json = await res.json();
      setArticles(json.results || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  const leadStory = articles[0];
  const sideStories = articles.slice(1, 4);
  const bottomStories = articles.slice(4, 8);

  return (
    <Container className="bbc-home">
      <h2 className="section-title">News headlines</h2>

      {/* Top Row */}
      <Row className="mb-4">
        <Col md={6}>
          {leadStory && (
            <Card className="lead-card">
              <Card.Img src={leadStory.image_url} className="lead-img" />
              <Card.Body>
                <Card.Title className="lead-title">{leadStory.title}</Card.Title>
                <Card.Text className="lead-desc">
                  {leadStory.description?.slice(0, 120)}...
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>

        <Col md={6}>
          <Row>
            {sideStories.map((story) => (
              <Col md={6} key={story.article_id} className="mb-3">
                <Card className="side-card">
                  <Card.Img src={story.image_url} className="side-img" />
                  <Card.Body>
                    <Card.Title className="side-title">{story.title}</Card.Title>
                    <Card.Text className="side-desc">
                      {story.description?.slice(0, 80)}...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Bottom Row */}
      <Row>
        {bottomStories.map((story) => (
          <Col md={4} key={story.article_id} className="mb-4">
            <Card className="bottom-card">
              <Card.Img src={story.image_url} className="bottom-img" />
              <Card.Body>
                <Card.Title className="bottom-title">{story.title}</Card.Title>
                <Card.Text className="bottom-desc">
                  {story.description?.slice(0, 80)}...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
