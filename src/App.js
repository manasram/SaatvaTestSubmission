import React from 'react';
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";


class App extends React.Component{

    state={
        products: [
            {
                "_id": "1",
                "title": ["Saatva Classic","Loom & Leaf","Zenhaven"],
                "src": [
                    "https://www.saatva.com/static/assets/images/hero-carousels-wide/mattresses/sm-carousel-6/d-sm-carousel-6@2x.webp",
                    "https://www.saatva.com/static/assets/images/hero-carousels-wide/mattresses/ll-carousel-6/d-ll-carousel-6@2x.webp",
                    "https://www.saatva.com/static/assets/images/hero-carousels-wide/mattresses/zen-carousel-4/d-zen-carousel-4@2x.webp"

                ],
                "description": ["Our flagship hybrid innerspring mattress","Our ultra-premium 5-lb memory foam mattress","Our 100% natural Talalay latex mattress"],
                "price": [999,1299,1599],
                "rating":[4.9,4.0,4.5]
            }
        ],
        index: 0,
        count: 0
    };

    handleCLick(){
        this.setState({
            count:this.state.count+1
        });
    }




    myRef= React.createRef();

    handleTab= index =>{
        this.setState({index: index});
        console.log(this.myRef.current.children);
         const images=this.myRef.current.children;
        // //console.log(images.length);
         for(let i=0;i<images.length;i++){
             images[i].className=images[i].className.replace("active","");
         }
         images[index].className="active";
    }

    componentDidMount() {
        const {index}=this.state;
        this.myRef.current.children[index].className="active";
    }



    render() {
      const {products,index}=this.state;
        return(
            <React.Fragment>
                <NavBar/>

                <span style={{float:'right',paddingRight:"160px",flexWrap:'wrap'}}>{this.state.count}</span>

            <div className="app">
                <div className="header"><h1 style={{fontFamily:'Source serif Pro'}}>Choose Your Mattress</h1></div>
            {
                products.map(item=>(
                    <div className="details" key={item._id}>
                        <div className="big-img">
                        <img src={item.src[index]} alt=""/>
                        </div>
                        <div className="box">
                            <div className="row">

                                <h2 style={{color:'darkgoldenrod'}}>{item.title[index]}</h2>
                                <span style={{paddingLeft:10}}>${item.price[index]}</span>
                            </div>
                            <p className="details">{item.description[index]}</p>

                            <div className="row">
                                <span style={{color:'darkgoldenrod',paddingLeft:'10px'}}> Rating : {item.rating[index]}</span>
                            </div>
                        </div>

                        {/*<div className="colors">*/}
                        {/*    {*/}
                        {/*        item.colors.map((color,index)=>(*/}
                        {/*            <button style={{background: color}} key={index}></button>*/}
                        {/*            ))*/}
                        {/*    }*/}

                        {/*</div>*/}
                        <div className="thumb" ref={this.myRef}>
                            {
                                item.src.map((img,index)=>(
                                    <img src={img} alt=""  key={index}
                                    onClick={()=>this.handleTab(index)}
                                    />
                                ))
                            }
                        </div>
                        <button className="cart" onClick={this.handleCLick.bind(this)}>Add To cart</button>
                    </div>
                ))
            }
        </div>
            </React.Fragment>
    );
  };
}

export default App;
