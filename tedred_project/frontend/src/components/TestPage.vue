<template>
	<div class="test-page">
		<p class="message">{{ message }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: '',
		}
	},
	async created() {
		try {
			const response = await fetch('http://127.0.0.1:8000/api/test/')
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			const data = await response.json()
			this.message = data.message
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error)
		}
	},
}
</script>

<style scoped>
.test-page {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #f0fff4;
	font-family: 'Arial', sans-serif;
}

.message {
	color: #276749;
	background-color: #c6f6d5;
	border: 2px solid #9ae6b4;
	border-radius: 10px;
	padding: 1rem 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.message:hover {
	transform: scale(1.05);
	box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
</style>
