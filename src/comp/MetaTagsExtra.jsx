import React, { useEffect } from 'react';

export const MetaTagsExtra = props => {
	useEffect(() => {
		window.scrollTo(0, 0); // Start from top when navigating
		console.log(props.children.props.children);
		console.log(props);
		document.title = props.children.props.children;
		if (props.description) {
		  document
			.querySelector('meta[name="description"]')
			.setAttribute("content", props.description);
		}
		if (props.children.props.children) {
			document
			  .querySelector('meta[name="title"]')
			  .setAttribute("content", props.children.props.children);
		  }
		  if (props.children.props.children) {
			document
			  .querySelector('meta[property="og:title"]')
			  .setAttribute("content", props.children.props.children);
		  }
	
	  }, [props.children.props.children, props.description]);
	
	//   const str = props.title;
	//   console.log(props);

	// // Replacing "&" to "" (empty space)
	// const NotFriendlyTitle = str.replaceAll("&", '')
	
	// // Replacing " " (space) to "" (empty space)
	// const FriendlyTitle = NotFriendlyTitle.replaceAll(/ /g, '')
	}