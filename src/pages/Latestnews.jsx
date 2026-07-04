import React from 'react'
import { useState ,useEffect} from 'react'
import Article from '../components/Article'
import {Row} from 'react-bootstrap'

function Latestnews() {
      const [articles ,setArticles] = useState([])
      async function getLatestnews(){
        try{
          const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_34cef3e06fcc47e680c3e1f6e8488782&country= gb&language=en')
          const data = await response.json();
          console.log(data.results)
          setArticles(data.results)

        }catch(err){
          console.log(err)

        }
       }
      useEffect(()=>{
        getLatestnews()
      },[])
  return (
    <div>
      <Row>
      {
        articles.map((article)=>(
        <Article article = {article} key = {article.article_id}/>
         
        ))
      }
      </Row>
    </div>
  )
}

export default Latestnews