import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap_grid.css';

class Container extends Component {
  render() {
    return (
    	<div  className="container">
	        <div className="row">
	         	<div class="col-md-12 centered">
					...
				</div>
				<div data-animation="fadeIn" className="revealOnScroll disp-hide col-md-12 centered">
					<h1>Resume</h1>
					<p class="tags">#Design #Travel #Sea #Draw</p>
					<h2>Lin Yu Hsiang</h2>	
					<img  className="circle" src="./img/UNADJUSTEDNONRAW_thumb_781.jpg"/>
					<div>
					<h2>林郁翔</h2>
					<p>姓名：林郁翔</p>
					<p>興趣：看海、設計、畫圖、思考、旅遊</p>
					<p>專長：版面設計、網頁前端、網站架設、WordPress版型設計、資料呈現</p>
					<br/>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Container
