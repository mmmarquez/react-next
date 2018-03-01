import 'isomorphic-fetch';
import WorkLink from '../components/WorkLink.js';
import { createClient } from '../plugins/contentful.js';
const client = createClient();
import Head from 'next/head';
import React from 'react'
import { Divider } from 'material-ui';


export default class Test extends React.Component {

     static async getInitialProps() {
        	return Promise.all([
        		client.getEntries({
        			content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        			order: '-sys.createdAt'
        		})
        	])
        		.then(([entries]) => {
                    console.log(entries)
        			return {
        				entries: entries.items
        			};
        		})
        		.catch(console.error);
        };

  
    componentDidMount () {
        console.log('yum')

        let radius = 200;

let fields = document.querySelectorAll('.field')
// var fields = $('.field')
let container = document.querySelector('#container')
// var container = $('#container')
let width = container.offsetWidth
// var width = container.width()
let height = container.offsetHeight
// var height = container.height()

let angle = 0
let step = (2*Math.PI) / fields.length;


fields.forEach( field =>{
	let x = Math.round(width/2 + radius * Math.cos(angle) - field.offsetWidth/2);
  let y = Math.round(height/2 + radius * Math.sin(angle) - field.offsetHeight/2);
	field.style.left = x + 'px'
	field.style.top = y + 'px'  
  angle += step;
})




    }
  
    render () {
        return (
            <div id="container" className="relative w-screen h-screen">
                {
                    this.props.entries.map(x => (
                        <div className="field absolute bg-red" key={x.sys.id}>
                            <div className="border border-yellow w-full">
                                <WorkLink key={x.sys.id} title={x.fields.title} slug={x.fields.slug} />
                            </div>
                        </div>
                    ))
                }
		    </div>
        )        

    }
  }