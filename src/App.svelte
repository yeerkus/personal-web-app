<script>
	import Card from "./components/Card.svelte"

	async function getProjects(){
		try{
			const res = await fetch("https://berry-projects-api.herokuapp.com/projects");
			const text = await res.json();
			return text;
		}
		catch(err){
			console.log(err)
		}
	}

</script>

<main>
	{#await getProjects()}
		<h4 class="text-dark">Fetching Berry's Projects...</h4>
		{:then project}
			{#each project as prop}
				<Card 
					title={prop.title} 
					description={prop.description}
					tech={prop.tags}
					link={prop.link}
				/>
			{/each}
		{:catch}
			<h4>Error occured :( Couldn't fetch projects</h4>
	{/await}
</main>

<style>
	main{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1rem;
		margin: 1rem;
	}
</style>