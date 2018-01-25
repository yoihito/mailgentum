import React from 'react';
import ContentLoader from "react-content-loader"

const ThreadItemsLoader = (props) => (
	<ContentLoader
		height={200}
		width={400}
		speed={2}
		primaryColor={"#f3f3f3"}
		secondaryColor={"#ecebeb"}
		style={{ height: '300px' }}
	>
		<rect x="24" y="15" rx="5" ry="5" width="330" height="31" /> 
		<rect x="24" y="58" rx="5" ry="5" width="310" height="31" /> 
		<rect x="24" y="101" rx="5" ry="5" width="260" height="31" /> 
		<rect x="24" y="141" rx="5" ry="5" width="300" height="31" />
	</ContentLoader>
)

export default ThreadItemsLoader;