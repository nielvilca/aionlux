import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Container } from "react-bootstrap";
import "../assets/styles/Main.scss";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {backendURL } from "../utils.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// products
import ProductItem from "./ProductItem";
// import { results
//  } from "../resultList.js";

const Main = () => {
	const [productList, setProductList] = useState([]);

	useEffect(()=>{
		axios.get(backendURL+'api/products/')
			.then((res) => {
				console.log(res.data);
				setProductList(res.data);
			})
			.catch(err => {
				console.erro(err);
			})
		
	}, [])

	const resultList = productList.slice(0, 9).map((link) =>{
		return( 
			<React.Fragment>
				<div>
					<ProductItem 
						id={link.id}
						likes={link.likes.length}
						key={link.id}
						image={link.image}
						in_="in-products"
					/>
				</div>
			</React.Fragment>
		)
	});

    
	return (
		<React.Fragment>
			<section className="section-m section-1">
				<Container>
					<div className="section-1-content">
						<div className="portal-phrase">
							<h1 className="portal-title">
								Proyecto Aionlux
							</h1>
							<p className="portal-subtitle">
								Es un sistema de gestión de datos en seguridad.
							</p>
							<button 
                                className="principal__message-button"
                                onClick={() => window.location.href = "/begin/"}
                            >
								Ver avances
                            </button>
						</div>
						<div className="portal-media">
							{/* <img className="portal-image pimage-1" src="https://images.pexels.com/photos/10827305/pexels-photo-10827305.jpeg" alt="" />
							<img className="portal-image pimage-2"src="https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg" alt="" /> */}
							
						</div>
					</div>
				</Container>
			</section>
			{/* <section className="section-m section-2">
				<Container fluid="xxl">
					<h2 className="category">Nuestros resultados</h2>
					<div className="c-container">
						<div className="products">   
							{resultList}
						</div>
						
						<HashLink style={{textDecoration: "none"}} to="/products/">Ver más</HashLink>
					</div>
				</Container>
			</section> */}
		</React.Fragment>
  );
}

export default Main;