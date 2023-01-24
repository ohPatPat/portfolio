import React, { useEffect } from 'react';

export const MetaTags = props => {
	useEffect(() => {
		window.scrollTo(0, 0); // Start from top when navigating
        console.log(props.title);
		document.title = props.title;
		if (props.description) {
		  document
			.querySelector('meta[name="description"]')
			.setAttribute("content", props.description);
		}
		if (props.title) {
			document
			  .querySelector('meta[name="title"]')
			  .setAttribute("content", props.title);
		  }
		  if (props.title) {
			document
			  .querySelector('meta[property="og:title"]')
			  .setAttribute("content", props.title);
		  }
	
	  }, [props.title, props.description]);
	
	  const str = props.title;
	
	// Replacing "&" to "" (empty space)
	const NotFriendlyTitle = str.replaceAll("&", '')
	
	// Replacing " " (space) to "" (empty space)
	const FriendlyTitle = NotFriendlyTitle.replaceAll(/ /g, '')
	}