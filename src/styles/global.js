import css from 'styled-jsx/css'

export default css.global`
/*index.js */
body{
     background-image:url('/bgimg.png');
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover; 
    margin:0 auto;
    height:100%;
    
}

.container {
    max-width: 70%;
    width: 100%;
    background-color:rgba(236,240,241,0.4);
    margin: 0 auto;
    color:#273c75;
    padding:50px;
    margin-bottom:50px;
    
  }

  .hero {
    color:black;
    text-align: center;
  }
  .hero-img{
    width:40px;
    height:40px;
    margin-right:10px;
    border-radius:25px;

  }

  .social-link {
    margin-right: 8px;
    vertical-align:top;
  }

  .hero-title {
    font-size: 48px;
    vertical-align:center;
    display:inline-block;
  }

  .blog-left {
    text-align: center;
    float:left;
    margin-left:5px;
    border-right:1px solid #7f8c8d;
    color: gray;
    display:block;
    
}

  a {
    color: #273c75;
    margin-left:10px;
    text-decoration: none;
  }
  .blog-text{
    color#273c75;
    width: 60%;
      
    max-height:150px;
    padding:7px;
    overflow:hidden;
    text-overflow: ellipsis;
    text-align:justify;
    border-radius:10px;
    border: 1px solid #636e72;

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
button:hover
{
    background-color:#16a085;
  }
  .img-cover{
    float:left;
    width:30%;
    height:10%;
    margin-bottom:38px;
    
  }
//postid.js
.blog-text2{
  color:#8f8f8f;
  margin:20px;
  padding:7px;
  text-align:justify;
  border-radius:10px;
  border: 1px solid #636e72;
}
@media only screen and (max-width:700px){
.blog-sub button,.blog-left,.blog-text{
display:none;
}
.blog-title a{
  display:block;
  position:static;
  color:black;
  border:1px solid red;
}
.img-cover{
  width:100%;
}
}
//comment and text area

  
`