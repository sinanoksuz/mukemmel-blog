import css from 'styled-jsx/css'

export default css.global`
.container {
    max-width: 700px;
    width: 100%;
    background-color:#ecf0f1;
    margin: 0 auto;
  }

  .hero {
    text-align: center;
  }

  .social-link {
    margin-right: 8px;
    vertical-align:top;
  }

  .hero-title {
    font-size: 48px;
  }

  .blog-left {
    text-align: center;
    width:50px;
    max-height:150px;
    float:left;
    border-right:1px solid #7f8c8d;
    color: #cccccc;
    display:block;
    margin:0 auto;
}

  a {
    color: #2980b9;
    margin-left:10px;
    text-decoration: none;
  }
  .blog-text{
    color:#16a085;
    width: 500px;  
    max-height:150px;
    margin-left:60px;
    padding:7px;
    overflow:hidden;
    text-overflow: ellipsis;
    text-align:justify;
    border-radius:10px;
    border: 1px solid #00b894;
} 
.blog-text2{
    color:#16a085;
    margin:20px;
    padding:7px;
    text-align:justify;
    border-radius:10px;
    border: 1px solid #00b894;
}
button{
    background-color:#1abc9c;
    display:inline-block;
    margin-left:70px;
    margin-top:10px;
    padding:4px;
    font-size:14px;
    border:none;
    text-decoration:none;
    cursor:pointer;
    color:white;
    border-radius:5px;
}
button:hover{
    background-color:#16a085;
}
`