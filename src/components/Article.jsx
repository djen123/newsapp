

import {Col,Badge,Card,Button} from 'react-bootstrap'
import fallbackimg from '../assets/fallbackimg.jpg'

function Article({article}) {
  return (
  <>
    <Col md = {4} className =" mb-4" >
                <Card className = "m-auto" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.image_url || fallbackimg}  style ={{height:'200px', objectFit:'cover'}}/>
      <Card.Body>
        <Card.Title style={{minHeight:'50px'}}>
           {article.title && article.title.length>100? article.title.substring(0,100) + '...' : article.title}

          
        </Card.Title>

        <Card.Text style ={{minHeight:'100px'}}>
          {article.description && article.description.length>100? article.description.substring(0,100) + '...' : article.description}
        </Card.Text>
         <a className = "btn btn-primary" href = {article.link} target="_blank" rel="noopener noreferrer">Read more</a>
         <div>
          {
            article.category.map((cat,index)=>(
               <Badge pill bg="dark me-2" key = {index}>
                  {cat}
      </Badge>


            ))
          }

         </div>
     
      </Card.Body>
      <Card.Footer className="text-muted">{article.source_name}</Card.Footer>
      
    </Card>
          


          </Col>
         
  
  
  </>
  )
}

export default Article