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
<div class="intro">
	<h1><a target="_blank" href="https://berrykarake.ml/about/about.html">Bertrand (Berry) Karake</a></h1>
	<p class="text-dark">Hello There! Here are some of my favourite projects!</p>
	<p class="text-dark">Feel free to go to <a target="_blank" href="https://github.com/yeerkus"> my Github</a> if you want the code</p>
</div>

<main>
	{#await getProjects()}
		<h4 class="text-success">Fetching Berry's Projects...</h4>
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
		margin: 3%;
	}
	.intro{
		margin: 3%;
	}
</style>