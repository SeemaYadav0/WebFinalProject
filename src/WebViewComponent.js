import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

const WebViewComponent = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoad = () => {
		setIsLoading(false);
	};

	return (
		<div style=({ position: 'relative', height" '100vh'}}>
	{ isLoading && (
		<div style={{ position: 'absolute', top: '50%, left
